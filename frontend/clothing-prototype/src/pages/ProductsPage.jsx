import {useSelector, useDispatch} from "react-redux";
import "./productDetail.css";
export default function ProductPage(){
    
    const productDetail = useSelector((state)=> state.product.productDetail);


    return(
        <div className="product-page">
            {productDetail.map((data)=>(
                <div key={data.id}>
                    <div>
                        <img src={data.image} alt="product" />
                    </div>
                    <h4>{data.productDisplayName}</h4>
                    
                </div>
            ))}
        </div>
    )
}