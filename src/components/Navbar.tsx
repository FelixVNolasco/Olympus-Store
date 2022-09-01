import { FaGripfire, FaUser, FaBars } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
// import { Favorites } from '../pages/Favorites';
import { logout } from '../redux/apiCall';
import { LogoutAction } from '../redux/actions/auth';
import { NavbarMobile } from './Shared/NavbarMobile';


export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);

    const handleLogout = () => {
        dispatch(LogoutAction());
        navigate("/");
    }

    const showMobileMenu = () => {
        const menu = document.getElementById("mobile-menu");
        console.log(menu);
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="left">
                        <Link to={"/"}>
                            <div className='iconContainer'>
                                <FaGripfire className='icon' />
                                <span>Olympus</span>
                            </div>
                        </Link>
                    </div>
                    <div className="right animate__animated animate__fadeIn animate__faster">
                        {/* <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div> */}
                        {/* <Link to={"/favorites"}>
                            < Favorites items={favoriteCount} />
                        </Link> */}
                        {
                            isAuthenticated
                                ?
                                (
                                    <>
                                        <Link to={"/cart"}>
                                            <ShoppingCart items={quantity} />
                                        </Link>
                                        <Link to={"/profile"}>
                                            <FaUser className='profileIcon'></FaUser>
                                        </Link>
                                        <button className='logoutBtn' onClick={handleLogout}>Cerrar Sesión</button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Link to={"/auth/login"}>
                                            <p className='btn'>Iniciar Sesión</p>
                                        </Link>
                                        <Link to={"/auth/signup"}>
                                            <p className='btn'>Registrarse</p>
                                        </Link>
                                    </>
                                )
                        }
                    </div>
                    {/* <FaBars className="mobileMenu" onClick={showMobileMenu} />
                    <NavbarMobile /> */}
                </div>
            </div>
        </>
    )
}