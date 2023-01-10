const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mourad9haddad@gmail.com",
        pass: "051133861mo@mo",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('ready to send');
    }
});




app.listen(5000, () => console.log('Server running'));
