import "./customDashboard.css";
export default function CustomDashboard({firstSec , secondSec, image1, onClick}){
    
return(
    <div className="dasboard-div">
        <section className="first-section" style={{backgroundImage:`url(${image1})`}}>
            <h3>Shop by Category</h3>
            <div className="category-grid">
            {firstSec.map((data, index)=>(
                <div key={index} className="first-cards" 
                onClick={()=>onClick(data.masterCategory, data.subCategory, data.articleType, null)} 
                style={{backgroundImage:`url(${data.image})`}}>
                    {/* <img src={data.image} alt={data.name}/> */}
                    <h5>{data.name}</h5>
                </div>
            ))}
            </div>
        </section>

        <section className="second-section">
            {secondSec.map((data, index)=>(
                <div key={index} className="second-cards"
                style={{backgroundImage:`url(${data.image})`}} 
                onClick={()=>onClick(data.masterCategory, data.subCategory, data.articleType, null)}>
                    {data.name}</div>
            ))}
        </section>
    </div>
)
}