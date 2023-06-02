import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="container black-bg">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"></svg>
                            <span className="fs-4" style={{color: "white"}}>Hostel Management</span>
                        </a>
                    </div>
                    {/* <div className="col-md-3 text-end">
                        <a href="/login.html" type="button" className="btn btn-outline-primary me-2">Login</a>
                        <a href="/signup.html" type="button" className="btn btn-primary">Sign-up</a>
                    </div> */}
                </header>
            </nav>
            
        </>
    )
}
export default Navbar;