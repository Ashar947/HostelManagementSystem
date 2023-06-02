import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';



function Managerooms() {
    const navigate = useNavigate();
    const [initial, setfinal] = useState({ Room: [] });
    const callStudents = async () => {
        try {
            console.log("in try");
            const res = await fetch("/viewRooms", {
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
        callStudents();
    }, []);
  return (
    <>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div class="divtwo black-bg" style={{ color: "white" }}>

                    <div class="tab-div">
                        <h2>All Students</h2>
                        <hr class="featurette-divider" />
                        <table class="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Room No</th>
                                    <th scope="col">Room Limit</th>
                                    <th scope="col">Member_1</th>
                                    <th scope="col">Member_2</th>
                                    <th scope="col">Member_3</th>
                                    <th scope="col">Member_4</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">More...</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initial.Room.map((room, index) => {
                                    return <tr>
                                        <th scope="row">{room.roomNo}</th>
                                        <td>{room.roomLimit}</td>
                                        <td>{room.member_1}</td>
                                        <td>{room.member_2}</td>
                                        <td>{room.member_3}</td>
                                        <td>{room.member_4}</td>
                                        {/* <td>{room.status}</td> */}
                                        <td>
                                        {(() => {
                                                if ((room.status) === "Empty") {
                                                    return (<button type="button" class="btn btn-danger">{room.status}</button>)
                                                } else if ((room.status) === "Full") {
                                                    return (<button type="button" class="btn btn-success">{room.status}</button>)
                                                } else if ((room.status) === "Available") {
                                                    return (<button type="button" class="btn btn-warning">{room.status}</button>)
                                                }
                                            })()}
                                            </td>
                                        <td><a href={`/roomview/${room._id}`} class="btn btn-primary">View</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </>
  )
}

export default Managerooms