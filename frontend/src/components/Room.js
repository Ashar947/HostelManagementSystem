import React from 'react'
import Sidebar from './Sidebar'

function Room() {
    const registerData = async (event) => {
        event.preventDefault() ;
        const res = await fetch('/roomCreation', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({roomLimit:4})
        }).then((response)=>{
          console.log(response.status);
          if(response.status===201){
            window.alert("Room Created");
            console.log("Room Created");
          } else{
            window.alert("new error");
            console.log("new erro");
          }
        });
      };
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
                                <p><a className="btn btn-primary" href="#">View Status »</a></p>
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
                                    <th scope="col">Memembers</th>
                                    <th scope="col">Limit</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>Available for 2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>Available for 1</td>
                                </tr>
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
                                    <th scope="col">Memembers</th>
                                    <th scope="col">Limit</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>Empty</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>Empty</td>
                                </tr>
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
                                    <input type="submit" className="btn btn-primary" value="Create Room" onClick={registerData}/>
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