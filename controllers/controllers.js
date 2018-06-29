const db = require("../models");
console.log(db);
// Defining methods for the userController
module.exports = {
  sendEmail: function(req, res) {
    db.Emails
      .create(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));  
  }
};