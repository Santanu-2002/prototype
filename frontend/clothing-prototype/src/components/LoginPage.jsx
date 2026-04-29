import { useReducer, useState } from "react";
import Forms from "./Forms";
import axios from "axios";
import {setUser} from "../global/slices/userSlice"
import { useSelector, useDispatch } from "react-redux";
const loginState = {
    email:"",
    password:"",
    error:{
        email:"",
        password:""
    }
};
const handleLoginValidation = (state, action) =>{
    switch(action.type){
        case "HANDLE_CHANGE":{
            const {field, value} = action.payload;
            return{
                ...state,
                [field]:value
            };
        }
        case "HANDLE_SUBMIT":{
            const {field, value} = action.payload;
            let err = "";

            if(field === "email"){
                const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!value){
                    err = "Please Enter Email";
                }else if(!emailChecker.test(value)){
                    err = "Please Enter Valid Email";
                }
            }
            if(field ==="password"){
                if(!value){
                    err = "Please Enter Password";
                }
            }
            return{
                ...state,
                [field]:value,
                error:{
                    ...state.error,
                    [field]:err
                }
            }
        
        }
        default:
            return state;  
    }
};
export default function LoginPage(){
    const [state, dispatch] = useReducer(handleLoginValidation, loginState);
    const [err, setErr] = useState("");

    const reduxDispatch = useDispatch();
    
    const handleSubmit = async() =>{

        dispatch({type:"HANDLE_SUBMIT", payload:{field:"email", value:state.email}});
        dispatch({type: "HANDLE_SUBMIT", payload:{field:"password", value:state.password}});

        const hasError = !state.email || !state.password || state.error.email || state.error.password;

        if(hasError) return;
        // apply this where it is needed.
        const loginData ={
            email: state.email,
            password: state.password
        }
        try{
            const response = await axios.post("http://prototype-production-dfef.up.railway.app/api/user/login", loginData);

            localStorage.setItem("token", response.data.token);
            reduxDispatch(setUser(response.data.userInfo))
            
            // we can also write this
            // localStorage.setItem(
                // "user",
                // JSON.stringify(response.data.userInfo)
                // );
            // but mine is more convinient for me i don't want everything in it
        }catch(error){
            if(error.response){
                setErr(error.response.data.message);
            }else{
                setErr("Server not Responding");
            }
        }
    };

    const LoginForm = [
        {name:"Email", value:state.email, 
            onChange:(value)=> dispatch({type:"HANDLE_CHANGE", payload:({field:"email", value})}),
            error: state.error.email,
            placeHolder:"Please Enter Email",
        },
        {name:"Password", value:state.password,
            onChange:(value)=> dispatch({type:"HANDLE_CHANGE", payload:{field:"password", value}}),
            error: state.error.password,
            placeHolder:"Please Enter Password",
        }
    ]
return(
    <div>
        <Forms props={LoginForm} onSubmit={handleSubmit} err={err} formName={"LOGIN FORM"} />
    </div>
)
}

// here need to upgrade one thing that is for backend error:
// instead of using useState use useReducer to store the error data or message.
// Response as in(catch statement) is not okay here