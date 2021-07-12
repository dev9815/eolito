const express = require('express');
const morgan = require('morgan');
const {validationResult } = require('express-validator');
const dao = require('./dao.js');
const session = require('express-session'); //MW
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy((username, password, done) => {
  dao.getUserCreator(username, password).then((userCreator) => {
    if (!userCreator) 
      return done(null, false, { message: 'Username o password errati' });
    return done(null, userCreator)
  });
}));

passport.serializeUser((userCreator, done) => {
  done(null, userCreator.id);
});

passport.deserializeUser((id, done) => {
  dao.getUserCreatorById(id)
    .then(userCreator => {
      done(null, userCreator); //è in req.user
    }).catch(err => {
      done(err, null);
    });
});

const app = express();
const PORT = 3001;
app.use(morgan('dev'));
app.use(express.json());


const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated())
    return next();
  return res.status(401).json({ error: 'non autenticato' });
}

app.use(session({
  secret: 'a secret sentence not to share with anybody and anywhere, used to sign the session ID cookie',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api/`));

app.post('/api/login', function (req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);
    if (!user) {
      return res.status(401).json(info);
    }
    req.login(user, (err) => { 
      if (err){
        return next(err);
      }
      return res.json(req.user);
    });
  })(req, res, next);
});
 
app.get("/api/", isLoggedIn, async (req, res) => {
  dao.allMemeList()
    .then(m => res.json(m))
    .catch(() => res.status(500).end());
}); 
app.get("/api/userCreator",  async (req, res) => {
  dao.userCreatorsMemeList()
    .then(m => res.json(m))
    .catch(() => res.status(500).end());
}); 

app.get("/api/visible/:visible", async (req, res) => {
  dao.publicMemeList(req.params.visible)
    .then(m => res.json(m))
    .catch(() => res.status(500).end());
}); 

app.post('/api/addMeme', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const memeToAdd = req.body;
  memeToAdd.utenteCreatore = req.user.id;
  try {
    const id = await dao.maxId()    
    await dao.addMeme(id, memeToAdd);
    res.status(201).end(); 
  } catch (err) {
    res.status(503).json({ error: `Errore DB durante la creazione del meme  ${memeToAdd.id}.` });
  }
});

app.put("/api/aggiorna/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let meme = req.body;
  meme.id = req.params.id;
  try {
    await dao.updateMeme(meme);
    res.status(200).end();
  } catch (err) {
    res.status(503).json({ error: `Errore DB durante l'aggiornamento del meme ${meme.id}.` });
  }
});

app.delete("/api/elimina/:id", isLoggedIn, async (req, res) => {
  try {
    await dao.eraseMeme(req.user.id,req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(503).json({ error: `Errore DB durante l'eliminazione del meme ${req.params.id}.` });
  }
});

app.get('/api/memeId/:id',  (req, res) => {
  dao.memeListById(req.params.id)
    .then(m => res.json(m))
    .catch(() => res.status(500).end());
});






