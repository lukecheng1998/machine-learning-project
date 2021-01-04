const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();
const cors = require('cors');
app.use(cors());
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const {db} = require('./util/admin');
const { uploadData, memo, authMemo } = require('./handlers/landing');
const { signup, login } = require('./handlers/users');
const FBAuth = require("./util/fbAuth");

app.post('/memo', memo);
app.post('/memo', FBAuth, authMemo);
app.post('/uploadData', uploadData);
app.post('/signup', signup);
app.post('/login', login)

exports.api = functions.https.onRequest(app);