import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../global/slices/categorySlice";
import {setMasterCategory} from "../global/slices/masterCategorySlice";
import "./homePage.css";
export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const customerData = useSelector((state) => state.user.userDetail);
  const customerName = customerData?.name?.split(" ")[0];

  
  const handleCategoryClick = (subCategory, masterCategory) => {
    if (subCategory) {
      dispatch(setCategory(subCategory));
    }

    if (masterCategory) {
      dispatch(setMasterCategory(masterCategory));
    }

    navigate("/allProductsPage");
  };

  const homePageFirstDiv = [
    {
      divName: "Top Wear",
      image:
        "https://assets.myntassets.com/v1/images/style/properties/Puma-Men-Grey-T-shirt_32668f8a61454d0cc028a808cf21b383_images.jpg",
      subCategory:"topwear",masterCategory:"apparel"
    },
    {
      divName: "Bottom Wear",
      image:
        "https://assets.myntassets.com/v1/images/style/properties/4850873d0c417e6480a26059f83aac29_images.jpg",
      subCategory: "bottomwear",masterCategory:"apparel"
    },
    {
      divName: "Accessories",
      image:
        "https://assets.myntassets.com/v1/images/style/properties/Titan-Women-Silver-Watch_b4ef04538840c0020e4829ecc042ead1_images.jpg",
      masterCategory: "accessories", 
    },
    {
      divName: "Foot Wear",
      image:
        "https://assets.myntassets.com/v1/images/style/properties/051d64772f1b38ff476fbf0a807f365a_images.jpg",
      subCategory: "footwear", masterCategory:"apparel"
    },
  ];

  const trendingProducts = [
        {
            name: "Casual Shirt",
            image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Women's Dress",
            image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Smart Watch",
            image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Sneakers",
            image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        },
    ];

  return (
    <div className="home_page">
      <header className="home_header">
      <div className="home_header__left">
        <span className="home_header__greeting">
          👋 Hello, {token ? customerName : "Shopper"}!
        </span>
        <span className="home_header__tagline">Great deals are waiting for you today</span>
      </div>

      <div className="home_header__promo">
        <span className="home_header__badge">🔥 SALE</span>
        <span className="home_header__offer">Up to 70% OFF — Limited time only</span>
      </div>

      <div className="home_header__right">
        <span className="home_header__free">🚚 Free delivery on orders above ₹499</span>
      </div>
    </header>

      <main>
        <section className="hero_section">
          <h1>Fashion Sale Live</h1>
          <p>Up to 70% OFF on trending styles</p>
          <button onClick={() => navigate("/allProductsPage")}>Shop Now</button>
        </section>

        <div className="type_apparel">
          {homePageFirstDiv.map((data) => (
            <div
              key={data.divName}
              onClick={() => handleCategoryClick(data.subCategory, data.masterCategory)}
              className="category_card"
            >
              <img src={data.image} className="images" alt={data.divName} />
              <p>{data.divName}</p>
            </div>
          ))}
        </div>

        <section className="trending_section">
          <h3>Trending Now</h3>
          <div className="trending_products">
            {trendingProducts.map((item, index) => (
              <div key={index} className="product_card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fashion_text">
          <h3>Style That Speaks</h3>
          <p>
            Discover fashion that fits every mood. From daily essentials to
            statement pieces, find styles that express your personality.
          </p>
        </section>
      </main>

      <footer className="home_footer">
        <div>
          <h4>About FashionHub</h4>
          <p>
            Bringing modern fashion closer to you with premium quality and
            affordable style.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p onClick={()=> navigate("./menDashboard")}>Men</p>
          <p onClick={()=> navigate("./womenDashboard")}>Women</p>
          <p>Accessories</p>
          <p>Footwear</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}