'use strict';
const sqlite = require('sqlite3');
const bcrypt = require('bcrypt');
var data = new sqlite.Database('meme.db', (err) => {
  if (err) throw err;
});

exports.getUserCreatorById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM utentiCreatori WHERE ID = ?';
    data.get(sql, [id], (err, row) => {
      if (err)
        reject(err);
      else if (row === undefined)
        resolve({ error: 'Utente creatore non trovato' });
      else {
        const userCreator = { id: row.ID, username: row.Email, name: row.Nome }
        resolve(userCreator);
      } 
    });
  });
};

exports.getUserCreator = (Email, password) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM utentiCreatori WHERE Email = ?';
    data.get(sql, [Email], (err, row) => {
      if (err) { reject(err); }
      else if (row === undefined) { resolve(false); }
      else {
        const userCreator = { id: row.ID, username: row.Email, name: row.Nome }
        bcrypt.compare(password, row.Password).then(result => {
          if (result) resolve(userCreator);
          else resolve(false);
        })
      }
    })
  })
}

exports.memeList = (sql) => {
  return new Promise((resolve, reject) => {
    data.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const meme = rows.map((e) => ({
        id: e.id, titolo: e.titolo, immagine: e.immagine,
        testo1: e.testo1, testo2: e.testo2,
        testo3: e.testo3, comicSans: e.comicSans,
        colore: e.colore, utenteCreatore: e.utenteCreatore,
        visibilità: e.visibilità
      }));
      resolve(meme);
    });
  });
};

exports.userCreatorsList = (sql) => {
  return new Promise((resolve, reject) => {
    data.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const userCreators = rows.map((e) => ({ID: e.ID, Name: e.Nome}));
      resolve(userCreators);
    });
  });
};

exports.userCreatorMemeList = (creatorId) => {
  const sql = `SELECT * FROM meme WHERE utenteCreatore is ${creatorId} ORDER BY id DESC`;
  return exports.memeList(sql);
}

exports.userCreatorsMemeList = () => {
  const sql = `SELECT * FROM utentiCreatori `;
  return exports.userCreatorsList(sql);
}

exports.publicMemeList = (visibilità) => {
  const sql = `SELECT * FROM meme WHERE visibilità is ${visibilità} ORDER BY id DESC`;
  return exports.memeList(sql);
}

exports.allMemeList =() => {
  const sql = `SELECT * FROM meme ORDER BY id DESC`;
  return exports.memeList(sql);
}

exports.memeListById = (id) => {
  const sql = `SELECT * FROM meme WHERE id is ${id} ORDER BY id DESC`;
  return exports.memeList(sql);
}

exports.maxId = () => {
  const sql = `SELECT MAX(id) AS id FROM meme`
  return new Promise((resolve, reject) => {
    data.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const id = rows[0].id
      resolve(id);
    });
  });
}

exports.addMeme = (id, memeToAdd) => {
  const newId = id + 1;
  const sql = `INSERT INTO meme (id,titolo,immagine,testo1,testo2,
              testo3, comicSans, colore, utenteCreatore, visibilità) 
              VALUES(?,?,?,?,?,?,?,?,?,?)`
  return new Promise((resolve, reject) => {
    data.run(sql, [newId, memeToAdd.titolo, memeToAdd.immagine, memeToAdd.testo1,
      memeToAdd.testo2, memeToAdd.testo3, memeToAdd.comicSans, memeToAdd.colore, memeToAdd.utenteCreatore,
      memeToAdd.visibilità], function (err) {
        if (err) {
          reject(err)
          return;
        }
        resolve(newId)
      });
  })
}


exports.eraseMeme = (userCreator, id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM meme WHERE id = ? and utenteCreatore = ?';
    data.run(sql, [id, userCreator], (err) => {
      if (err) {
        reject(err);
        return;
      } else
        resolve(null);
    });
  });
}

exports.updateMeme = (meme) => {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE meme SET `;
    let array = []
    for (const key in meme) {
      if (key === 'id')
        continue;
      sql = sql + key + '= ? ,';
      array.push(meme[key]);
    }
    array.push(parseInt(meme['id'], 10));
    sql = sql.substring(0, sql.length - 1);
    sql = sql + 'WHERE id is ?'
    data.run(sql, array, (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(null);
      }
    });
  });
};