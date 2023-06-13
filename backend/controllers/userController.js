const { sendMail } = require('../mail')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')

const register = (req, res) => {
    const { firstname, lastname, address, town, gender, genderF, genderM, dob, email, password } = req.body
    User.create({ firstname, lastname, address, town, gender, genderF, genderM, dob, email, password }).then(async data => {
        try {
            await sendMail({
                to: email,
                subject: 'Registration successful',
                html: `
                    <div>
                        <h3 style='font-size:20px'>Welcome</h3>
                        <p>You are welcome ${firstname} to PeasolBank</p>
                    </div>
                `
            });
        } catch (error) {
            console.log('An error occured when trying to send email' + error);
        }
        res.json({
            success: true,
            message: 'User Registration Succesful',
            data
        })

    }).catch(err => {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'An Error' + err
        })
    })
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const data = await User.findOne({ email }).select('+password').exec()
        if (!data) {
            return res.json({
                success: false,
                message: 'Failed to connect to mongoose database'
            })
        }
        const validPassword = await bcrypt.compare(password, data.password)
        console.log(data.password)
        if (validPassword) {
            const token = jwt.sign(
                { email: data.email, _id: data._id },
                process.env.jwt_SECRET,
                { expiresIn: 60 }
            )
            // data.password = '';
            res.json({
                token,
                success: true,
                message: "signed in",
                data
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'Password is not correct'
            })
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Couldn't find this user"
        })
        console.log(error)
    }
}

module.exports = { register, login }