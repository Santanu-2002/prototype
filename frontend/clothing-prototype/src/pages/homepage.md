import { useState, useEffect } from "react";
import ProductView from "./ProductView";

export default function Home() {
    const customerFullName = localStorage.getItem("name");
    const customerName = customerFullName?.split(" ")[0];

    const [category, setCategory] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

    // 🔥 Simulating your custom hook / API call
    useEffect(() => {
        // Replace this with your custom hook data
        const fetchData = async () => {
            try {
                const res = await fetch("YOUR_API_URL");
                const data = await res.json();
                setAllProducts(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleCategoryClick = (type) => {
        setCategory(type);
    };

    // 🔥 Filter logic
    const filteredData = category
        ? allProducts.filter(
              (item) =>
                  item.articleType?.toLowerCase() ===
                  category.toLowerCase()
          )
        : [];

    return (
        <div>
            {/* HEADER */}
            <header>
                <h2>
                    Hello, {customerName} great deals are waiting for you!
                </h2>
            </header>

            <main>
                {!category ? (
                    // 🔥 CATEGORY VIEW
                    <div className="type_apparel">
                        <div onClick={() => handleCategoryClick("Topwear")}>
                            <img
                                src="http://assets.myntassets.com/v1/images/style/properties/Puma-Men-Grey-T-shirt_32668f8a61454d0cc028a808cf21b383_images.jpg"
                                className="images"
                            />
                            <p>Top Wear</p>
                        </div>

                        <div onClick={() => handleCategoryClick("Bottomwear")}>
                            <img
                                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2024/JUNE/6/k1zqXyRZ_5b9e6c3bdf0c4c3a8c1c.jpg"
                                className="images"
                            />
                            <p>Bottom Wear</p>
                        </div>

                        <div onClick={() => handleCategoryClick("Accessories")}>
                            <img
                                src="http://assets.myntassets.com/v1/images/style/properties/Titan-Women-Silver-Watch_b4ef04538840c0020e4829ecc042ead1_images.jpg"
                                className="images"
                            />
                            <p>Accessories</p>
                        </div>

                        <div onClick={() => handleCategoryClick("Footwear")}>
                            <img
                                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2023/AUG/12/xyz.jpg"
                                className="images"
                            />
                            <p>Foot Wear</p>
                        </div>
                    </div>
                ) : (
                    // 🔥 PRODUCT VIEW
                    <div>
                        <button onClick={() => setCategory(null)}>
                            ⬅ Back to Categories
                        </button>

                        <ProductView data={filteredData} />
                    </div>
                )}
            </main>

            <footer></footer>
        </div>
    );
}