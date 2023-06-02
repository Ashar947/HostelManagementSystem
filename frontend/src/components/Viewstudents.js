import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

function Viewstudents() {
    const navigate = useNavigate();
    const [initial, setfinal] = useState({ Student: [] });
    const callStudents = async () => {
        try {
            console.log("in try");
            const res = await fetch("/viewStudents", {
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
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Room No</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">More...</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initial.Student.map((student, index) => {
                                    return <tr>
                                        <th scope="row">{student.firstName}</th>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.contactNumber}</td>
                                        <td>{student.room_No}</td>
                                        <td>
                                            {(() => {
                                                if ((student.status) === "Out") {
                                                    return (<button type="button" class="btn btn-danger">{student.status}</button>)
                                                } else if ((student.status) === "In") {
                                                    return (<button type="button" class="btn btn-success">{student.status}</button>)
                                                } else if ((student.status) === "Leave") {
                                                    return (<button type="button" class="btn btn-warning">{student.status}</button>)
                                                }
                                            })()}
                                        </td>
                                        <td><a href={`/studentView/${student._id}`} class="btn btn-primary">View</a></td>
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

export default Viewstudents;