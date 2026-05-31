import "./forms.css";
import { useNavigate } from "react-router-dom";
export default function Forms({props , onSubmit, err, formName}){
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit();
    };
    const navigate = useNavigate();
return(
    <div className="form_page">
        <form onSubmit={handleSubmit} className="form_style">
            <h4 style={{color:"black"}}>{formName}</h4>
            <div >
            {props.map((data, index)=>(
                < div key={index} className="display-input" >
                <label>{data.name}</label>
                <input type={data.type} 
                value={data.value} 
                onChange={(e)=> data.onChange(e.target.value)}
                placeholder={data.placeHolder} 
                className="form_input"/>
                
                {data.error && ( <p style={{color:"red"}}>{data.error}</p>)}
                </div>
            ))}
            <button type="submit" onClick={()=> navigate("./")}>SUBMIT</button>
            <div className="finalError">
            {err && (<p style={{color:"red"}}>{err}</p> )}
            </div>
            </div>
        </form>
    </div>
)
}