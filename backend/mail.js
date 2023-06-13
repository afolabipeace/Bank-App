const {createTransport} = require("nodemailer")

const sendMail =async ({to,subject,text,html})=>{
    const transporter = createTransport({
        host:'smtp.gmail.com',
        service:'gmail',
        secure:true,
        port:587,
        auth:{
            user: process.env.APP_MAIL,
            pass: process.env.APP_PASSWORD
        }
    })

    const info = await transporter.sendMail({
        from: process.env.APP_MAIL,
        to,
        subject,
        text,
        html
    })
    console.log(info)
}

module.exports = { sendMail }