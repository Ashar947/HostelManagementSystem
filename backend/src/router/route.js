const express = require("express");
const router = express.Router();
require('../db/connection');

// Importing Model
const Admin = require('../models/adminSchema')
const Student = require('../models/studentSchema')
const Employee = require('../models/employeeSchema')
const Room = require("../models/roomSchema")
// ---------------------
const cookieParser = require('cookie-Parser');
router.use(cookieParser());

const adminAuth = require('../middleware/adminauth');


router.get("/home", async (req, res) => {
    console.log("Home")
    let totalStudents = 0;
    let stdOut = 0;
    let stdIn = 0;
    let stdLeave = 0;
    let totalEmployee = 0;
    let totalRooms = 0;
    let roomFull = 0;
    let roomSpace = 0;
    let roomEmpty = 0;
    try {
        const studentData = await Student.find();
        for (x in studentData) {
            totalStudents = totalStudents + 1
            if ((studentData[x].status) === "Out") {
                stdOut = stdOut + 1
            } else if ((studentData[x].status) === "In") {
                stdIn = stdIn + 1
            } else if ((studentData[x].status) === "Leave") {
                stdLeave = stdLeave + 1
            }
        }
        const empData = await Employee.find();
        for (y in empData) {
            totalEmployee = totalEmployee + 1
        }
        const roomData = await Room.find();
        for (z in roomData) {
            totalRooms = totalRooms + 1;
            if ((roomData[z].status) === "Empty") {
                roomEmpty = roomEmpty + 1
            } else if ((roomData[z].status) === "Space") {
                roomSpace = roomSpace + 1
            } else if ((roomData[z].status) === "Full") {
                roomFull = roomFull + 1
            }
        }
        res.status(201).json({
            StudentTotal: totalStudents,
            StudentOut: stdOut,
            StudentIn: stdIn,
            StudentLeave: stdLeave,
            totalEmployees: totalEmployee,
            Rooms: totalRooms,
            RoomFull: roomFull,
            RoomSpace: roomSpace,
            roomEmpty: roomEmpty,
        })
    } catch (error) {
        res.status(404)
        console.log(error)
    }
}
)
router.get("/viewStudents", async (req, res) => {
    console.log("viewStudents")
    try {
        const studentData = await Student.find();
        res.status(201).json({ Student: studentData })
    } catch (error) {
        res.status(404)
        console.log(error)
    }
}
)
router.get("/viewRooms", async (req, res) => {
    console.log("/viewRooms")
    try {
        const roomData = await Room.find();
        res.status(201).json({ Room: roomData })
    } catch (error) {
        res.status(404)
        console.log(error)
    }
}
)
router.get("/roomview/:id", async (req, res) => {
    console.log("Room View by ID")
    const URL_id = req.params.id
    try {
        const room = await Room.findOne({ _id: URL_id });
        const student = await Student.find();
        res.status(201).json({ Room: room, Student: student })
    } catch (error) {
        res.status(404)
        console.log(error)
    }
}
)
// const editEmp = await User.updateOne({_id:id},{
//     $set : {
//         name,email,phone,work , salary , address
//     }});
// body: JSON.stringify({member_1:input.member_1 , member_2:input.member_2 ,  member_3:input.member_3 , member_4:input.member_4 })

router.post("/roomview/:id", async (req, res) => {
    console.log("POST....Room View by ID")
    const URL_id = req.params.id
    let roomdata = await Room.findOne({ _id: URL_id })
    let roomNo = roomdata.roomNo;
    console.log(`Room No : ${roomNo}`)
    try {
        const { member_1, member_2, member_3, member_4 } = req.body;
        console.log(`member_1 : ${member_1} , member_2 ${member_2} ,  member_3 ${member_3}, member_4 ${member_4}`)
        if (member_1 != 'none') {
            let email = member_1;
            let parts = email.split("/");
            let realEmail = parts.at(-1);
            const student = await Student.updateOne({ email: realEmail }, {
                $set: { room_No: roomNo }
            })
            const room = await Room.updateOne({ _id: URL_id }, {
                $set: { member_1 }
            });
            res.status(201)
        }
        if (member_2 != 'none') {
            let email = member_2;
            let parts = email.split("/");
            let realEmail = parts.at(-1);
            const student = await Student.updateOne({ email: realEmail }, {
                $set: { room_No: roomNo }
            })
            const room = await Room.updateOne({ _id: URL_id }, {
                $set: { member_2 }
            });
            res.status(201)
        }
        if (member_3 != 'none') {
            let email = member_3;
            let parts = email.split("/");
            let realEmail = parts.at(-1);
            const student = await Student.updateOne({ email: realEmail }, {
                $set: { room_No: roomNo }
            })
            const room = await Room.updateOne({ _id: URL_id }, {
                $set: { member_3 }

            });
            res.status(201)
        }
        if (member_4 != 'none') {
            let email = member_4;
            let parts = email.split("/");
            let realEmail = parts.at(-1);
            const student = await Student.updateOne({ email: realEmail }, {
                $set: { room_No: roomNo }
            })
            const room = await Room.updateOne({ _id: URL_id }, {
                $set: { member_4 }
            });
            res.status(201)
        }
        let roomdata = await Room.findOne({ _id: URL_id })
        let total = 0;
        let status;
        if (roomdata.member_1 != 'none') {
            total = total + 1;
        } else {
            total = total
        }
        if (roomdata.member_2 != 'none') {
            total = total + 1;
        } else {
            total = total
        }
        if (roomdata.member_3 != 'none') {
            total = total + 1;
        } else {
            total = total
        }
        if (roomdata.member_4 != 'none') {
            total = total + 1;
        }
        console.log(total)
        if (total == 0) {
            status = "Empty"
        } else if (total == 4) {
            status = "Full"
        } else if (total > 0 && total < 4) {
            status = "Available"
        }
        const roomStatus = await Room.updateOne({ _id: URL_id }, {
            $set: {status:status}
        });

        res.status(201).send("updated")
    } catch (error) {
        console.log(error)
    }
}
)







router.post("/adminregister", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(`First Name is ${firstName} ,Last Name is ${lastName} , email ${email} &&&& pasword ${password}`)
    if ((firstName.length == 0) || (lastName.length == 0) || (email.length == 0) || (password.length == 0)) {
        console.log("fields cannot be left emoty");
        return res.status(204).json({ error: "fields cannot be left emoty" });
    }
    try {
        const userExist = await Admin.findOne({ email: email });
        if (userExist) {
            console.log("user already registered")
            return res.status(422).json({ error: "User already exist with this email" })
        }
        const user = new Admin({ firstName, lastName, email, password });
        await user.save()
        res.status(201).json({ message: "User regsitered " })

    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)

router.post("/studentregister", async (req, res) => {
    console.log("Student Register Begin")
    const { firstName, lastName, email, password, address, city, contactNumber, guardianName, guardianContact } = req.body;
    console.log(`First Name is ${firstName} ,Last Name is ${lastName} , email ${email} &&&& pasword ${password}`)
    if ((firstName.length == 0) || (lastName.length == 0) || (email.length == 0) || (password.length == 0) || (address.length == 0) || (city.length == 0) || (contactNumber.length == 0) || (guardianName.length == 0) || (guardianContact.length == 0)) {
        console.log("fields cannot be left emoty");
        return res.status(204).json({ error: "fields cannot be left emoty" });
    }
    try {
        const userExist = await Student.findOne({ email: email });
        if (userExist) {
            console.log("user already registered")
            return res.status(422).json({ error: "User already exist with this email" })
        }
        const user = new Student({ firstName, lastName, email, password, address, city, contactNumber, guardianName, guardianContact });
        await user.save()
        res.status(201).json({ message: "User regsitered " })

    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)

router.post("/employeeregister", async (req, res) => {
    console.log("Employee Register Begin")
    const { firstName, lastName, email, password, address, city, contactNumber, jobType, salary } = req.body;
    console.log(`First Name is ${firstName} ,Last Name is ${lastName} , email ${email} &&&& pasword ${password}`)
    if ((firstName.length == 0) || (lastName.length == 0) || (email.length == 0) || (password.length == 0) || (address.length == 0) || (city.length == 0) || (contactNumber.length == 0) || (jobType.length == 0) || (salary.length == 0)) {
        console.log("fields cannot be left emoty");
        return res.status(204).json({ error: "fields cannot be left emoty" });
    }
    try {
        const userExist = await Employee.findOne({ email: email });
        if (userExist) {
            console.log("user already registered")
            return res.status(422).json({ error: "User already exist with this email" })
        }
        const user = new Employee({ firstName, lastName, email, password, address, city, contactNumber, jobType, salary });
        await user.save()
        res.status(201).json({ message: "User regsitered " })

    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)

router.post("/roomCreation", async (req, res) => {
    console.log("Room Creation Begin")
    const { roomLimit } = req.body;
    console.log(`Room Limit is ${roomLimit}`)
    let len = 0;
    let data = await Room.find();
    for (i in data) {
        len = len + 1
    }
    console.log(len)
    try {
        const user = new Room({ roomNo: len, roomLimit });
        await user.save()
        res.status(201).json({ message: "Room Created " })
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)
router.get("/studentView/:id", async (req, res) => {
    console.log("get student info")
    const uid = req.params.id;
    try {
        const studentData = await Student.findOne({ _id: uid })
        res.status(201).json({ data: studentData })
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)
router.get("/viewEmployees", async (req, res) => {
    console.log("get employees")
    try {
        const employeeData = await Employee.find()
        res.status(201).json({ Employee: employeeData })
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
)







module.exports = router;