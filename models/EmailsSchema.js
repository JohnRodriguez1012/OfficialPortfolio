var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmailsSchema = new Schema({

    Email: {type: String, required: true},
    Name: {type: String, required: true},
    Subject: {type: String, required: true},
    Message: {type: String, required: true},
});

// This creates our model from the above schema, using mongoose's model method
var Emails = mongoose.model("Scores", EmailsSchema);

// Export the Note model
module.exports = Emails;