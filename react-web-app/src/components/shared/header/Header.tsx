import { Link, NavLink } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks";
import { logout } from "../../../store/features/authentication-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import logo from '../../../assets/honeybutter-logo-color.png'
import './Header.css'

export default function Header() {

    const dispatch = useAppDispatch()
    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)

    function handleLogout()
    {
        localStorage.removeItem('user')
        dispatch(logout()) 
    }

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="me-3" src={logo} height="50" />HoneyButter</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipes">Recipe Search</NavLink>
                        </li>
                        {isAuthenticated && <li className="nav-item dropdown">
                            <NavLink to={`/user/${user!.id}/profile`} className="nav-link dropdown-toggle show" data-bs-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="true">User</NavLink>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={`/user/${user!.id}/profile`}>Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={`/user/${user!.id}/library`}>Library</Link>
                            </div>
                        </li>}
                    </ul>
                    <ul className="navbar-nav ms-auto" >

                        { 
                        !isAuthenticated && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        }

                        { 
                        isAuthenticated && <>
                        <li className="nav-item"><p className="nav-link">Welcome {user?.username}</p> </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={handleLogout} >Logout</button>
                        </li></>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}