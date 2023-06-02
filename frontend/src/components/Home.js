import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

function Home() {
    const navigate = useNavigate();
    const [initial, setfinal] = useState({
        roomEmpty: 0
    });
    const callHome = async () => {
        try {
            console.log("in try");
            const res = await fetch("/home", {
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
        callHome();
    }, []);
    return (
        <body className='black-bg'>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div className="divtwo black-bg" style={{ color: "white" }}>
                    <div className="container px-4 py-2" id="icon-grid">
                        <h2 className="pb-2 border-bottom">Features</h2>
                        {/* <!-- ""row-cols-lg-4"" class removed --> */}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-4 py-5">
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Manage Students</h3>
                                    <p>View Student Status , Information , Room with just a click</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Manage Students</h3>
                                    <p>View Employee Status , Information , Room with just a click</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Application Manager</h3>
                                    <p>View , Approve , Decline Student and Employee at one place . </p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Room Management</h3>
                                    <p>Create , View and manage rooms for better Management .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-4 " id="icon-grid">
                        <h2 className="pb-2 border-bottom">Quick View</h2>
                        {/* <!-- ""row-cols-lg-4"" class removed --> */}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-4 py-5">
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Total Admin : 2</h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Students : {initial.StudentTotal}</h3>
                                    <p>Student In : {initial.StudentIn} <br /> Student out : {initial.StudentOut} <br /> Student On Leave : {initial.StudentLeave}</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Employees : {initial.totalEmployees}</h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Rooms :  {initial.Rooms}</h3>
                                    <p>Fully Ocupied :  {initial.RoomFull} <br /> Space Available :  {initial.RoomSpace} <br /> Empty :  {initial.roomEmpty} </p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-4">Total Applications : 5</h3>
                                    <p>Student Applications : 2 <br /> Employee Applications : 2 <br />Approved : 0 <span className="px-2"></span> Declined : 1 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>




        </body>
    )
}

export default Home;