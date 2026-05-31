import {useNavigate} from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {setGender} from "../global/slices/categorySlice"

export default function Navbar(){

    const token = localStorage.getItem("token");
    const user = useSelector(state => state.user.userDetail);
    const firstName = user?.name?.split(" ")[0];
    const navigate = useNavigate();
    
    console.log("Token :", token);
    const dispatch = useDispatch();
    const isLoggedIn =
        !!token &&
        token !== "null" &&
        token !== "undefined";
return(
    <nav className="navbar-layout">
        {isLoggedIn ?
        (
            <>
            <div className="home-button" onClick={()=> navigate("./")}>
                🏠
            </div>
            <input type="text" placeholder="Search" className="search-input" /> 
            <p onClick={()=> {dispatch(setGender("Men")); navigate("/menDashboard");}} >MEN</p>
            <p onClick={()=> {dispatch(setGender("Women")); navigate("/womenDashboard");}} >WOMEN</p>
            <p onClick={()=> {dispatch(setGender("Boys")); navigate("/boysDashboard")}} >BOYS</p>
            <p onClick={()=> {dispatch(setGender("Girls")); navigate("/girlsDashboard")}} >GIRLS</p>
            <button onClick={()=> navigate('/wishlistPage')}> <FaHeart size={24}/> </button>
            <button onClick={()=> navigate('/cartPage')}><FaShoppingCart size={24}/></button>

            <div className="navbar-user">
                <h4>Hello, {firstName}</h4>
                <div className="profile_detail" onClick={()=>navigate("./customerDetail")}>
                    profile
                </div>
            </div>

            </>
        ):
        (
           <>
            <div className="home-button" onClick={()=> navigate("./")}>
                🏠
            </div>
            <input type="text" placeholder="Search" className="search-input" /> 
            <div className="navbar-links">
            <p onClick={()=> {dispatch(setGender("Men")); navigate("/menDashboard");}} >MEN</p>
            <p onClick={()=> {dispatch(setGender("Women")); navigate("/womenDashboard");}} >WOMEN</p>
            <p onClick={()=> {dispatch(setGender("Boys")); navigate("/boysDashboard")}} >BOYS</p>
            <p onClick={()=> {dispatch(setGender("Girls")); navigate("/girlsDashboard")}} >GIRLS</p>
            </div>
            <button onClick={()=> navigate('/wishlistPage')}> <FaHeart size={24}/> </button>
            <button onClick={()=> navigate('/cartPage')}><FaShoppingCart size={24}/></button>
            <div className="navbar-auth">
                <span onClick={()=> navigate("/loginPage")}>LOGIN</span> <span className="separator">/</span> <span onClick={()=> navigate("/signUpPage")}>SIGNUP</span>
            </div>
            </>
        )}
    </nav>
)
}


