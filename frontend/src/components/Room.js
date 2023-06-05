import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

function Room() {
    const [initial, setfinal] = useState({
        RoomAvailable: [], RoomEmpty: []
    });
    const callRoom = async () => {
        try {
            console.log("in try");
            const res = await fetch("/room", {
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
                console.log(data);
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
    const registerData = async (event) => {
        event.preventDefault();
        const res = await fetch('/roomCreation', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ roomLimit: 4 })
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201) {
                window.alert("Room Created");
                console.log("Room Created");
            } else {
                window.alert("new error");
                console.log("new erro");
            }
        });

    };
    useEffect(() => {
        callRoom();
    }, []);
    return (
        <>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div className="divtwo black-bg" style={{ color: "white" }}>
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4 text-c">
                                <img className="stu-img"
                                    src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                    alt="" srcset="" />
                                <h2 className="fw-normal">New Room</h2>
                                <br />
                                <p><button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Register »
                                </button></p>
                            </div>
                            <div className="col-lg-4 text-c">
                                <img className="stu-img"
                                    src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                    alt="" srcset="" />
                                <h2 className="fw-normal">Manage Rooms</h2>
                                <br />
                                <p><a className="btn btn-primary" href="/viewRooms">View »</a></p>
                            </div>
                            <div className="col-lg-4 text-c">
                                <img className="stu-img"
                                    src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                    alt="" srcset="" />
                                <h2 className="fw-normal">Update / Remove </h2>
                                <br />
                                <p><a className="btn btn-primary" href="/viewRooms">View Status »</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="tab-div">
                        <h2>Rooms Available</h2>
                        <hr className="featurette-divider" />
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Room No</th>
                                    {/* <th scope="col">Memembers</th> */}
                                    <th scope="col">Limit</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initial.RoomAvailable.map((room, index) => {
                                    return <tr>
                                        <th scope="row">{room.roomNo}</th>
                                        <td>{room.roomLimit}</td>
                                        {/* <td>{(() => {
                                            let member = 0 ;
                                            if ((room.member__1) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__2) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__3) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__4) != "none") {
                                                member = member + 1 ;
                                            }
                                            console.log(member)
                                            return {member};
                                        })()}</td> */}
                                        <td>{(() => {
                                            if ((room.status) === "Empty") {
                                                return (<a href={`/roomView/${room._id}`}  class="btn btn-danger">{room.status}</a>)
                                            } else if ((room.status) === "Full") {
                                                return (<a href={`/roomView/${room._id}`}  class="btn btn-success">{room.status}</a>)
                                            } else if ((room.status) === "Available") {
                                                return (<a href={`/roomView/${room._id}`} class="btn btn-warning">{room.status}</a>)
                                            }
                                        })()}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-div">
                        <h2>Rooms Empty</h2>
                        <hr className="featurette-divider" />
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Room No</th>
                                    {/* <th scope="col">Memembers</th> */}
                                    <th scope="col">Limit</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initial.RoomEmpty.map((room, index) => {
                                    return <tr>
                                        <th scope="row">{room.roomNo}</th>
                                        <td>{room.roomLimit}</td>
                                        {/* <td>{(() => {
                                            let member = 0 ;
                                            if ((room.member__1) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__2) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__3) != "none") {
                                                member = member + 1 ;
                                            } if ((room.member__4) != "none") {
                                                member = member + 1 ;
                                            }
                                            console.log(member)
                                            return {member};
                                        })()}</td> */}
                                        <td>{(() => {
                                            if ((room.status) === "Empty") {
                                                return (<a href={`/roomView/${room._id}`}  class="btn btn-danger">{room.status}</a>)
                                            } else if ((room.status) === "Full") {
                                                return (<a href={`/roomView/${room._id}`}  class="btn btn-success">{room.status}</a>)
                                            } else if ((room.status) === "Available") {
                                                return (<a href={`/roomView/${room._id}`}  class="btn btn-warning">{room.status}</a>)
                                            }
                                        })()}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content black-bg text-white" style={{ marginTop: "8rem" }}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Room</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                {/* <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Room Limit</label>
                                    <input type="number" name="roomLimit" className="form-control" />
                                </div> */}
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <input type="submit" className="btn btn-primary" value="Create Room" onClick={registerData} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Room