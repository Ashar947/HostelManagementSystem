import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';


function Roomview() {
    //     
    //   const registerData = async (event) => {
    //     event.preventDefault() ;
    //     const { firstName,lastName,email ,password ,address,city,contactNumber,guardianName,guardianContact } = student;
    //     const res = await fetch('', {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({firstName:student.firstName , lastName:student.lastName , email:student.email , password:student.password , address:student.address , city:student.city , contactNumber:student.contactNumber , guardianName:student.guardianName , guardianContact:student.guardianContact})
    //     }).then((response)=>{
    //       console.log(response.status);
    //       if(response.status===422){
    //         window.alert("User already Registered with this email please use a new one");
    //         console.log("Invalid Registration");
    //       } else if(response.status===201){
    //         window.alert("User Registered");
    //         console.log("User Registered");
    //         // navigate('/signin');
    //       } else if(response.status === 204){
    //         window.alert("Fields Cannot be left empty");
    //         console.log("Fields Cannot be left empty");
    //       } else{
    //         window.alert("new error");
    //         console.log("new erro");
    //       }
    //     });
    //   };
    let url = window.location.pathname;
    const [initial, setfinal] = useState({ Room: [], Student: [] });
    const [input, setInput] = useState({Room: []})
    const callRoom = async () => {
        try {
            console.log("in try");
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (res.status === 201) {
                const data = await res.json();
                console.log(`${res.status} STATUS`);
                setfinal(data);
                setInput(data.Room)


            } else {
                window.alert("New Error");
                // navigate("/signin");
            }
        } catch (error) {
            window.alert("Catch error");
            console.log("Shoot at error");
            console.log(error);
        }
    };
    useEffect(() => {
        callRoom();
    }, []);


    let name, value;
    const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setInput({ ...input, [name]: value })
    }    
      const registerData = async (event) => {
        event.preventDefault() ;
        const { member_1,member_2,member_3,member_4 } = input ;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({member_1:input.member_1 , member_2:input.member_2 ,  member_3:input.member_3 , member_4:input.member_4 })
        }).then((response)=>{
          console.log(response.status);
          if(response.status===201){
            window.alert("Room Changed");
            console.log("Room Changed");
          }else{
            window.alert("new error");
            console.log("new erro");
          }
        });
      };
    return (
        <>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div class="divtwo black-bg" style={{ color: "white" }}>
                    <div style={{ margin: "1rem 6rem" }}>
                        <h1>Room Details</h1>
                        <form class="row g-3">
                            <div class="col-md-3">
                                <label for="inputEmail4" class="form-label">Room No</label>
                                <input type="text" class="form-control" value={initial.Room.roomNo} disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="inputPassword4" class="form-label">Room Limit</label>
                                <input type="text" class="form-control" value={initial.Room.roomLimit} disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="inputZip" class="form-label">Status</label>
                                <input type="text" class="form-control" value={initial.Room.status} disabled />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 1</label>
                                <input type="text" class="form-control" value={initial.Room.member_1} disabled />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 2</label>
                                <input type="text" class="form-control" value={initial.Room.member_2} disabled />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 3</label>
                                <input type="text" class="form-control" value={initial.Room.member_3} disabled />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 4</label>
                                <input type="text" class="form-control" value={initial.Room.member_4} disabled />
                            </div>

                        </form>
                    </div>
                    <div style={{ margin: "1rem 6rem" }}>
                        <h1>Change Members</h1>
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 1</label>
                                <select id="inputState" onChange={handleChange} name='member_1' class="form-select">
                                    <option selected>{input.member_1}</option>
                                    {initial.Student.map((student, index) => {
                                        return <option>{student.firstName}/{student.email}</option>
                                    })}


                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 2</label>
                                <select id="inputState" onChange={handleChange} name='member_2' class="form-select">
                                    <option selected>{input.member_2}</option>
                                    {initial.Student.map((student, index) => {
                                        return <option>{student.firstName}/{student.email}</option>
                                    })}
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 3</label>
                                <select id="inputState" onChange={handleChange} name='member_3' class="form-select">
                                    <option selected>{input.member_3}</option>
                                    {initial.Student.map((student, index) => {
                                        return <option>{student.firstName}/{student.email}</option>
                                    })}
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Member 4</label>
                                <select id="inputState" onChange={handleChange} name='member_4' class="form-select">
                                    <option selected>{input.member_4}</option>
                                    {initial.Student.map((student, index) => {
                                        return <option>{student.firstName}/{student.email}</option>
                                    })}
                                </select>
                                <br />
                                <div class="col-md-12">In order to avoid errors click on Save Changes after updating eact Student in Room
                                </div>
                            </div>
                            <div class="col-12">
                                <input type="submit" class="btn btn-primary" value="Save Changes" onClick={registerData}/>
                                {/* <input type="submit" className="btn btn-primary"  */}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Roomview