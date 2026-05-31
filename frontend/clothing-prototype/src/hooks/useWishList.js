import { useState,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setWishListProduct } from "../global/slices/productSlice";
export default function useWishList(){
    const [wishListData, setWishListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    
return
}