import React from 'react'

function Sidebar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/home" className="nav-link active text-white" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16">

                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/student" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">

                            </svg>
                            Student Management
                        </a>
                    </li>
                    <li>
                        <a href="/employee" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">

                            </svg>
                            Employee Management
                        </a>
                    </li>
                    <li>
                        <a href="/room" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">

                            </svg>
                            Manage Rooms

                        </a>
                    </li>
                    <li>
                        <a href="/application" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">

                            </svg>
                            Applications
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" className="rounded-circle me-2" width="32" height="32" />
                        <strong>UserName</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" style={{ cursor: "progress" }}>Signed In as Admin</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"></a></li>
                        <li><a className="dropdown-item" href="#">Update Password</a></li>
                        <li><a className="dropdown-item" href="#">Update Information</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
            <div className="seperator"></div>

        </>
    )
}

export default Sidebar