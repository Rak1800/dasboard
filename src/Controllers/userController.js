const userModel = require("../Models/userModel");

const register = async function (req, res) {
    try {

        const data = req.body;
        const { name, myId, gender, age, mobile, email, password, address, position, referId } = data
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, alert: "please provide some data" })
        if (!name) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!gender) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!age) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!mobile) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!email) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!password) return res.status(400).send({ status: false, alert: "Name is required" })
        if (!address) return res.status(400).send({ status: false, alert: "Name is required" })

        // craete Id from Math.random method
        const localId = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1
        data.myId = localId
        //check database length
        const databaselength = await userModel.find()

        if (databaselength.length >= 1) {
            const enums = ["left", "right"]
            const positions = enums.includes(position)
            if (!positions) return res.status(400).send({ status: false, alert: "enter your position left or right" })
        }
        if (databaselength.length >= 1) {
            // refer Id check in database 
            const checkreferIdvalid = await userModel.findOne({ myId: referId })
            if (!checkreferIdvalid)
                return res.status(400).send({ status: false, alert: "refer Id is not available" })
        }
        const checkId = await userModel.findOne({ myId: localId })
        if (checkId) return res.status(400).send({ status: false, alert: "already exist" })

        const checkreferId = await userModel.find({ referId: referId })
        console.log(checkreferId)
        if (checkreferId.length > 1) {
            return res.status(400).send({ status: false, alert: "please use other refer Id" })
        }

        const checkposition = await userModel.findOne({ position: position, referId: referId })



        if (!checkposition) {
            const saveData = await userModel.create(data)
            return res.status(201).send({ status: true, alert: "register successful", saveData })

        }
        if (databaselength.length >= 1) {
            if (checkposition.position == "left" || checkposition.position == "right") {
                return res.status(400).send({ status: false, alert: "please change your position left or right" })
            }
        }

        // if(checkposition.position=="right" && checkposition.position=="left") {
        //     return res.status(400).send({status:false,message:"please share your refer in the left side"})
        // }


        // const checkrightside= await userModel.findOne({referId:referId,positon:position})
        // if(checkrightside)  return res.status(400).send({status:false,message:"please share your refer in the left side"})





    } catch (error) {
        res.status(500).send({ status: false, message: error.message }) 
    }
}


const login = async (req, res) => {
    try {
        const data = req.body
        const { email, password } = data
        if (!email) return res.status(400).send({ status: false, message: "Name is required" })
        if (!password) return res.status(400).send({ status: false, message: "Name is required" })
        const checkUser = await userModel.findOne({ email: email, password: password })
        if (!checkUser) res.status(500).send({ status: false, message: "user not register, please register" })
        return res.status(200).send({ status: true, message: "login successful" ,checkUser})


    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

}

module.exports = { register, login }