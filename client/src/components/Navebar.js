import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navebar() {
   
    let auth = localStorage.getItem("user")
    const navigate = useNavigate()


    let HandleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/' className="navbar-brand" > Dashboard</Link >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" >Home</NavLink >
                            </li>
                            {
                                !auth ? (<>
                                    <li className="nav-item">
                                        <NavLink to='/register' className="nav-link" >Register</NavLink >
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/login' className="nav-link">Login</NavLink >
                                    </li>
                                </>) : (<>
                                    <li><NavLink onClick={HandleLogout} to='/login' className="nav-link">Logout</NavLink> </li>
                                    {/* <li className="nav-item dropdown">
                                        <NavLink className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth.data}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li> <NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink></li>
                                            <li><NavLink onClick={HandleLogout} to='/login' className="dropdown-item">Logout</NavLink> </li>

                                        </ul>
                                    </li> */}
                                </>)
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navebar