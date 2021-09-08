const mongoose = require('mongoose');
const DB = "items";

mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establishing a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

