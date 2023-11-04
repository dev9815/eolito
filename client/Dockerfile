FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@9.6.1
COPY . .
EXPOSE 9000
CMD ["npm", "start"]