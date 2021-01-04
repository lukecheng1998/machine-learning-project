const { admin, db } = require("../util/admin");
//Uploading data

//upload data for non authenticated user
exports.memo = (req, res) => {
  const dataMemo = {
    memo: req.body.memo,
    createdAt: new Date().toISOString(),
  };
  db.collection("memo")
    .add(dataMemo)
    .then((doc) => {
      const resMemo = dataMemo;
      resMemo.memoId = doc.id;
      res.json(resMemo);
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.log(err);
    });
};
//Upload data if you were signed in
exports.authMemo = (req, res) => {
  const dataMemo = {
    memo: req.body.memo,
    createdAt: new Date().toISOString(),
    handle: req.user.handle,
  };
  db.collection("memo")
    .add(dataMemo)
    .then((doc) => {
      const meId = dataMemo;
      meId.memoId = doc.id;
      res.json(meId);
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
      console.log(err);
    });
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy({headers: req.headers})

    let imageFileName;
    let imageToBeUploaded = {};
    busboy. on ('file', (fieldname, file, filename, encoding, mimetype) => {
      if(mimetype !== 'file/csv' && mimetype !== 'file/xl'){
        return res.status(400).json({error: 'Please upload csv or xl file type'})
      }
      console.log(fieldname);
      console.log(filename);
      console.log(mimetype);
      const fileExtension = filename.split('.')[filename.split('.').length - 1];
      fileName = `${Math.round(Math.random() *10000000000)}.${imageExtension}`
      const filepath = path.join(os.tmpdir(), fileName)
    })
};
