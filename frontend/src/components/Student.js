import React , {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Student() {
    const navigate = useNavigate();
    const [student,setStudent] = useState({
        firstName:"",lastName:"",email:"" ,password:"" ,address:"",city:"",contactNumber:"",guardianName:"",guardianContact:""
    })
    let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setStudent({ ...student, [name]: value })
    console.log("input")
    // console.log(student)
  }
  const registerData = async (event) => {
    event.preventDefault() ;
    const { firstName,lastName,email ,password ,address,city,contactNumber,guardianName,guardianContact } = student;
    const res = await fetch('/studentregister', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({firstName:student.firstName , lastName:student.lastName , email:student.email , password:student.password , address:student.address , city:student.city , contactNumber:student.contactNumber , guardianName:student.guardianName , guardianContact:student.guardianContact})
    }).then((response)=>{
      console.log(response.status);
      if(response.status===422){
        window.alert("User already Registered with this email please use a new one");
        console.log("Invalid Registration");
      } else if(response.status===201){
        window.alert("User Registered");
        console.log("User Registered");
        // navigate('/signin');
      } else if(response.status === 204){
        window.alert("Fields Cannot be left empty");
        console.log("Fields Cannot be left empty");
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
                    <div className="divtwo black-bg" style={{color: 'white'}}>
                        <div className="container marketing">
                            <div className="row">
                                <div className="col-lg-4 text-c">
                                    <img className="stu-img"
                                        src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                        alt="" srcset="" />
                                    <h2 className="fw-normal">Register New Student</h2>
                                    <br />
                                    <p><button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Register »
                                    </button>
                                    </p>
                                </div>
                                <div className="col-lg-4 text-c">
                                    <img className="stu-img"
                                        src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                        alt="" srcset="" />
                                    <h2 className="fw-normal">View Students</h2>
                                    <br />
                                    <p><a className="btn btn-primary" href="/studentsView">View »</a></p>
                                </div>
                                <div className="col-lg-4 text-c">
                                    <img className="stu-img"
                                        src="https://simg.nicepng.com/png/small/335-3355400_registration-icon-png-student-registration-icon.png"
                                        alt="" srcset="" />
                                    <h2 className="fw-normal">Status</h2>
                                    <br />
                                    <p><a className="btn btn-primary" href="#">View Status »</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="tab-div">
                            <h2>Students Out</h2>
                            <hr className="featurette-divider" />
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Room No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content black-bg text-white" style={{marginTop: "8rem"}}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Register Student</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label for="inputEmail4" className="form-label">First Name</label>
                                        <input type="text" className="form-control" name='firstName' autoComplete='off' onChange={handleChange} value={student.firstName} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputPassword4" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" name='lastName' autoComplete='off' onChange={handleChange} value={student.lastName} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} value={student.email} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' autoComplete='off' onChange={handleChange} value={student.password} />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" name='address' autoComplete='off' onChange={handleChange} value={student.address} placeholder='Enter Address Here' />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" name='city' autoComplete='off' onChange={handleChange} value={student.city} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputAddress2" className="form-label">Contact Number</label>
                                        <input type="text" className="form-control" name='contactNumber' autoComplete='off' onChange={handleChange} value={student.contactNumber} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputAddress2" className="form-label">Guardian Name</label>
                                        <input type="text" className="form-control" name='guardianName' autoComplete='off' onChange={handleChange} value={student.guardianName} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputAddress2" className="form-label">Guardian Contact</label>
                                        <input type="text" className="form-control" name='guardianContact' autoComplete='off' onChange={handleChange} value={student.guardianContact} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputAddress2" className="form-label">For</label>
                                        <input type="text" className="form-control" id="inputAddress2" value="Student" disabled />
                                    </div>
                                    <br />
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <input type="submit" className="btn btn-primary" value="Register" onClick={registerData}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Student