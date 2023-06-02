import React from 'react'

function Signin() {
  return (
    <body className="text-center black-bg">
    <main className="form-signin">
        <form style={{margin:"9rem 38rem 0rem 30rem"}}>
            {/* <!-- <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> --> */}
            <h1 className="text-white h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating" style={{margin:'1.5rem 0px'}}>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating" style={{margin:'1.5rem 0px'}}>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
    <footer className="footer py-3" style={{marginTop:'38vh',color:'white'}}>
        <div className="container">
            <span className="text-white" >Hostel Managemnet System © 2023</span>
        </div>
    </footer>
</body >
  )
}

export default Signin