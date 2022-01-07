const router = require('express').Router();
const main = require("../model/main");
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
require("../db/conn")

router.post("/otpsend", async (req, res) => {
    try {
        const userData = await main(req.body);
        await userData.save();

        // const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        // console.log(otp);

        var otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otp);

        email = req.body.email;
        const sendEmail = await main.findOne({ email });

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "",// please enter your email address.
                pass: "" // please enter your email address password.
            }
        })

        const mailoption = {
            from: "",// please enter your email address.
            to: sendEmail.email,
            subject: "send otp in your mail",
            text: `Your otp is :- ${otp}, please don't give other person for your safety.`
        }

        transport.sendMail(mailoption);
        res.status(200).json({
            mes: "data is successfully save.. and mail is send..",
            status: 200
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mes: "data not save",
            status: 400
        });
    }
});

module.exports = router;