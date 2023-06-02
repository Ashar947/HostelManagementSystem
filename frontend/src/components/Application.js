import React from 'react'
import Sidebar from './Sidebar'

function Application() {
    return (
        <>
            <main className="flex" style={{ borderTop: "1px solid white" }}>
                <Sidebar />
                <div class="divtwo black-bg" style={{color:"white"}}>

                    <div class="tab-div">
                        <h2>All Applications</h2>
                        <hr class="featurette-divider" />
                        <table class="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">From</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Student</th>
                                    <td>Room Change</td>
                                    <td>18 May 2023</td>
                                    <td><button type="button" class="btn btn-warning">Pending</button></td>
                                    <td><a href="" class="btn btn-primary">View</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Student</th>
                                    <td>Leave Application</td>
                                    <td>20 May 2023</td>
                                    <td><button type="button" class="btn btn-danger">Declined</button>
                                    </td>
                                    <td><a href="" class="btn btn-primary">View</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Student</th>
                                    <td>Other</td>
                                    <td>20 May 2023</td>
                                    <td><button type="button" class="btn btn-success">Approved</button>
                                    </td>
                                    <td><a href="" class="btn btn-primary">View</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Employee</th>
                                    <td>Other</td>
                                    <td>20 May 2023</td>
                                    <td><button type="button" class="btn btn-warning">Pending</button></td>
                                    <td><a href="" class="btn btn-primary">View</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Application;