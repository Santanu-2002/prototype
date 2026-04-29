import { useReducer } from "react";
import Forms from "./Forms";
import axios from "axios";
const signUpData = {
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",

    error:{
      name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
    }
};

const handleSignup = (state, action) =>{
    switch(action.type){
        case "HANDLE_CHANGE":{
            const {field, value} = action.payload;

            return{
                ...state,
                [field]:value
            };
        }
        case "HANDLE_SUBMIT":{
            const {field, value}= action.payload;
            let err = "";
            if(field === "name"){
                if(!value){
                    err = "Name Required";
                }
            }
            if(field ==="email"){
                const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!value){
                    err = "Email Id required";
                }else if(!emailRegex.test(value)){
                    err = "Please Enter Valid Email";
                }
            }
            if(field === "phone"){
                // const checkNum = /^\d{10}$/;
                if(!value){
                    err = "Contact detail required";
                }else if(!/^\d{10}$/.test(value)){
                    err = "Please enter valid Number";
                }
            }
            if(field === "password"){
                const passRegex = /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,}$/;
                if(!value){
                    err = "password needed";
                }else if(!passRegex.test(value)){
                    err = "Password should contain:\n1. One uppercase letter\n2. One number\n3. One special character"
                }
            }
            if(field === "confirmPassword"){
                if(!value){
                    err = "Please enter the password again";
                }
                if(value !== state.password){
                    err = "Please enter the correct password";
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
        case "RESET_FORM":{
            return signUpData;
        }
        default:
            return state;
    }

};

export default function SignUpPage(){
    const [ state, dispatch] = useReducer(handleSignup, signUpData);

    const formData = [
        {name:"Name", type:"text", 
            value:state.name, 
            onChange:(value)=> dispatch({type: "HANDLE_CHANGE", payload:{field:"name", value}}),
            placeHolder:"Enter Name",
            error: state.error.name
        },

        {name:"Email", type:"text", 
            value:state.email, 
            onChange:(value)=> dispatch({type: "HANDLE_CHANGE", payload:{field:"email", value}}),
            placeHolder:"Enter Email",
            error: state.error.email
        },

        {name:"Phone", type:"text", 
            value:state.phone, 
            onChange:(value)=> dispatch({type: "HANDLE_CHANGE", payload:{field:"phone", value}}),
            placeHolder:"Enter Contact number",
            error: state.error.phone
        },

        {name:"Password", type:"text", 
            value:state.password, 
            onChange:(value)=> dispatch({type: "HANDLE_CHANGE", payload:{field:"password", value}}),
            placeHolder:"Enter Password",
            error: state.error.password
        },

        {name:"Confirm Password", type:"text", 
            value:state.confirmPassword, 
            onChange:(value)=> dispatch({type: "HANDLE_CHANGE", payload:{field:"confirmPassword", value}}),
            placeHolder:"Re-Enter Password",
            error: state.error.confirmPassword
        }
    ]

    const handleSubmit = async()=>{
        dispatch({type:"HANDLE_SUBMIT", payload:{field:"name", value:state.name}});
        dispatch({type:"HANDLE_SUBMIT", payload:{field:"email", value:state.email}});
        dispatch({type:"HANDLE_SUBMIT", payload:{field:"phone", value:state.phone}});
        dispatch({type:"HANDLE_SUBMIT", payload:{field:"password", value:state.password}});
        dispatch({type:"HANDLE_SUBMIT", payload:{field:"changePassword", value:state.changePassword}});

        const signUpData = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            password: state.password
        }

        try{
            
            const response = await axios.post("http://prototype-production-dfef.up.railway.app/api/newuser/signup", signUpData);

            console.log(response, "SignUp Successful");
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("token", response.data.token)
            
            dispatch({type: "RESET_FORM"});
        }catch(error){
            console.log(error);
        }

    };

    return(
        <div>
            <Forms props={formData} onSubmit={handleSubmit} /> 
        </div>
    )
}