const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

require("./config/mongoose.config");
require("./routes/routes")(app);

app.listen(port, () => {
    console.log(`You are now listening on port ${port}`);
})
