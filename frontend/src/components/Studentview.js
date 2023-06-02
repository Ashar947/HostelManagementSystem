import React , { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

function Studentview() {
    const navigate = useNavigate();
    let url = window.location.pathname;
    const parts = url.split("/");
    const id = parts.at(-1);
    const [initial, setfinal] = useState({data:[]});
    const callStudent = async () => {
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
                console.log(data)
                console.log(`${res.status} STATUS`);
                setfinal(data);
            } else {
                window.alert("New Error");
            }
        } catch (error) {
            window.alert("Catch error");
            console.log("Shoot at error");
            console.log(error);
        }
    };
    useEffect(() => {
        callStudent();
    }, []);
    return (
        <>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div className="divtwo black-bg" style={{ color: "white" }}>
                    <div className="container-xl px-4 mt-4">
                        <hr className="mt-0 mb-4" />
                        <div className="row">
                            <div className="col-xl-4">

                                <div className="card mb-4 mb-xl-0 black-bg text-white" style={{ border: "2px solid white" }}>
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">
                                        <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                        {/* <div className="small font-italic mb-4 text-white">JPG or PNG no larger than 5 MB</div>
                    <button className="btn btn-primary" type="button">Upload new image</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 black-bg text-white">
                                <div className="card mb-4 black-bg text-white">
                                    <div className="card-header">Account Details</div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row gx-3 mb-3">

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputFirstName">First name</label>
                                                    <input className="form-control" id="inputFirstName" type="text" disbaled value={initial.data.firstName}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputLastName">Last name</label>
                                                    <input className="form-control" id="inputLastName" type="text" disbaled value={initial.data.lastName} />
                                                </div>
                                            </div>

                                            <div className="row gx-3 mb-3">

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputOrgName">Email</label>
                                                    <input className="form-control" id="inputOrgName" type="text" disbaled value={initial.data.email} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputLocation">Password</label>
                                                    <input className="form-control" id="inputLocation" type="text" disbaled value={initial.data.password} />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="small mb-1" for="inputEmailAddress">Address</label>
                                                <input className="form-control" id="inputEmailAddress" type="text" disbaled value={initial.data.address} />
                                            </div>

                                            <div className="row gx-3 mb-3">

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputPhone">Phone number</label>
                                                    <input className="form-control" id="inputPhone" type="text" disbaled value={initial.data.contactNumber} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputBirthday">City</label>
                                                    <input className="form-control" id="inputBirthday" type="text" disbaled value={initial.data.city} name="birthday" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputPhone">Guardian Name</label>
                                                    <input className="form-control" id="inputPhone" type="text" disbaled value={initial.data.guardianName} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputBirthday">Guardian Contact</label>
                                                    <input className="form-control" id="inputBirthday" type="text" name="birthday" disbaled value={initial.data.guardianContact} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputPhone">Date Joined</label>
                                                    <input className="form-control" id="inputPhone" type="text" disbaled value={initial.data.dateJoined} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputBirthday">Status</label>
                                                    <input className="form-control" id="inputBirthday" type="text" disbaled value={initial.data.status} name="birthday" />
                                                </div>
                                            </div>
                                            {/* <button className="btn btn-primary" type="button">Save changes</button> */}
                                        </form>
                                    </div>
                                </div>
                                <div className="card mb-4 black-bg text-white">
                                    <div className="card-header">Room Details</div>
                                    <div className="card-body">
                                        <div className="row gx-3 mb-3">

                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputFirstName">Room No</label>
                                                <input className="form-control" id="inputFirstName" type="text" />
                                            </div>
                                        </div>

                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputOrgName">Member 1</label>
                                                <input className="form-control" id="inputOrgName" type="text" />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputLocation">Memeber 2</label>
                                                <input className="form-control" id="inputLocation" type="text" />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputOrgName">Memeber 3</label>
                                                <input className="form-control" id="inputOrgName" type="text" />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputLocation">Member 4</label>
                                                <input className="form-control" id="inputLocation" type="text" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Studentview