import React , {useState , useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
function Viewemployee() {
  const navigate = useNavigate();
  const [initial, setfinal] = useState({ Employee: [] });
  const callStudents = async () => {
      try {
          console.log("in try");
          const res = await fetch("/viewEmployees", {
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
                      <h2>All Employee</h2>
                      <hr class="featurette-divider" />
                      <table class="table table-dark table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Contact</th>
                                  <th scope="col">More...</th>
                              </tr>
                          </thead>
                          <tbody>
                              {initial.Employee.map((employee,index) => {
                                  return <tr>
                                      <th scope="row">{employee.firstName}</th>
                                      <td>{employee.lastName}</td>
                                      <td>{employee.email}</td>
                                      <td>{employee.contactNumber}</td>
                                      <td><a href={`/employeeView/${employee._id}`} class="btn btn-primary">View</a></td>
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

export default Viewemployee