import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAddress, addAddress, removeAddress} from "../global/slices/addressSlice";

import "./customerDetails.css";
export default function CustomerDetailPage(){
    const [formData, setFormData] = useState({
        name:"",
        contact:"",
        addressLine1:"",
        addressLine2:"",
        state:"",
        city:"",
        pincode:""
    });
    
    const [fetchData , setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState({});
    const [apiError, setApiError] = useState("");
    const [add, setAdd]= useState(false);

    const dispatch = useDispatch();
    const savedAddress = useSelector(state => state.address.addresses);
    const userDetails = useSelector(state=> state.user.userDetails);
    const userId = userDetails.id;

    const handleChange =(e)=>{
        const {name , value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    useEffect(()=>{
        const handlePincodes = async()=>{
        const newState = {stateName :formData.state};
        try{
            setIsLoading(true);
            
            const fetchingData = await axios.post("http://prototype-production-dfef.up.railway.app/api/state/states", newState); 

            setFetchData(fetchingData.data.stateDetails);

        }catch(err){
            setApiError(err.message);
        }finally{
            setIsLoading(false);
            setApiError("");
        }
    };
    handlePincodes();
    }, [formData.state]);

    const handleValidation =(field, value)=>{
        let err = "";
        if(field === "name" ){
            if(!value){
                err = "Please Enter Name";
            }
        }
        if(field === "contact"){
            if(!value){
                err = "Please enter contact number";
            }else if(value.length !== 10){
                err ="please enter valid number";
            }            
        }
        if(field === "addressLine1"){
            if(!value){
                err = "Please add Address";
            }
        }

        if(field === "state"){
            if(!value){
                err = "Please Enter state";
            }
        }

        if(field === "city"){
            if(!value){
                err = "Please Enter city";
            }
        }
        if(field === "pincode"){
            const validPincode = fetchData.find(
                item=> item.pincode.toString() === value 
            );

            if(!validPincode) {
                err = "Please Enter valid Pincode";
            } 
        }

        setErr((prev)=>({
            ...prev,
            [field]:err
        }))
    };

    useEffect(()=>{
        if(!formData.pincode) return;

        const matchedData = fetchData.find(
            item => item.pincode.toString()=== formData.pincode
        );

        if(matchedData){
            setFormData((prev)=>({
                ...prev,
                city: matchedData.city
// city: matchedData.city?.split(" ")[0] not prefferable cause some of the data like New Delhi
            }))
        }
    }, [formData.pincode , fetchData]);


        const handleSubmit = async(e)=>{
            e.preventDefault();
            if(!formData.name || !formData.contact || !formData.addressLine1 || !formData.state || !formData.city || !formData.pincode) return;

            if(Object.values(err).some(msg=>msg)) return;

            const finalData = {
                id: userId,
                name: formData.name,
                contact: formData.contact,
                address: `${formData.addressLine1}, ${formData.addressLine2}, ${formData.city}, 
                ${formData.state}, ${formData.pincode}`,
            };

            try{
                const submitDetails = await axios.post("http://prototype-production-dfef.up.railway.app/api/address/addAddress", finalData);
                dispatch(addAddress(finalData));
            }catch(error){
                setApiError(error);
            }
        };

    useEffect(()=>{
        const handleAddressFetch =async()=>{
            try{
                const fetchedAddresses = await axios.post("http://prototype-production-dfef.up.railway.app/api/address/getAddress", {userId: userId});
                dispatch(setAddress(fetchedAddresses.data));
            }catch(error){
                setApiError(error);
            }
        };
        handleAddressFetch();
    },[]);

    const handDeleteAddress = async(id)=>{
            
        try{
            const removeResponse = await axios.delete("http://prototype-production-dfef.up.railway.app/api/address/removeAddress",{data:{adsId : id}});
            dispatch(removeAddress(id));
        }catch(error){
            setApiError(error);
        }
    };

    const stateOptions = [
        {label:"SELECT-STATE", value:""},
        { label: "Andhra Pradesh", value: "Andhra Pradesh" },
        { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
        { label: "Assam", value: "Assam" },
        { label: "Bihar", value: "Bihar" },
        { label: "Chhattisgarh", value: "Chhattisgarh" },
        { label: "Goa", value: "Goa" },
        { label: "Gujarat", value: "Gujarat" },
        { label: "Haryana", value: "Haryana" },
        { label: "Himachal Pradesh", value: "Himachal Pradesh" },
        { label: "Jharkhand", value: "Jharkhand" },
        { label: "Karnataka", value: "Karnataka" },
        { label: "Kerala", value: "Kerala" },
        { label: "Madhya Pradesh", value: "Madhya Pradesh" },
        { label: "Maharashtra", value: "Maharashtra" },
        { label: "Manipur", value: "Manipur" },
        { label: "Meghalaya", value: "Meghalaya" },
        { label: "Mizoram", value: "Mizoram" },
        { label: "Nagaland", value: "Nagaland" },
        { label: "Odisha", value: "Odisha" },
        { label: "Punjab", value: "Punjab" },
        { label: "Rajasthan", value: "Rajasthan" },
        { label: "Sikkim", value: "Sikkim" },
        { label: "Tamil Nadu", value: "Tamil Nadu" },
        { label: "Telangana", value: "Telangana" },
        { label: "Tripura", value: "Tripura" },
        { label: "Uttar Pradesh", value: "Uttar Pradesh" },
        { label: "Uttarakhand", value: "Uttarakhand" },
        { label: "West Bengal", value: "West Bengal" }
    ];


return (
  <>
    <div className="customer-page">
      <h2>My Addresses</h2>
      {savedAddress.map((data) => (
        <div key={data.id} className="address-card">
          <p><b>Name:</b><span>{data.name}</span></p>
          <p><b>Contact:</b><span>{data.contact}</span></p>
          <p><b>Address:</b><span>{data.address}</span></p>
          <button className="address-delete-btn" onClick={() => handDeleteAddress(data.id)}>DELETE</button>
        </div>
      ))}
      <button className="address-add-btn" onClick={() => setAdd(prev => !prev)}>+ ADD NEW ADDRESS</button>
    </div>

    {add && (
      <div className="address-form-overlay" onClick={() => setAdd(false)}>
        <div className="address-form-card" onClick={e => e.stopPropagation()}>
          <div className="address-form-header"><h3>Add New Address</h3></div>
          <form onSubmit={handleSubmit}>
            <div className="address-form-body">
              {/* your existing input fields — just add className="address-field" to each div and className="full" for full-width ones */}
            </div>
            <div className="address-form-footer">
              <button type="submit" className="address-save-btn">SAVE</button>
              <button type="button" className="address-close-btn" onClick={() => setAdd(false)}>CLOSE</button>
            </div>
          </form>
        </div>
      </div>
    )}
  </>
);
}

