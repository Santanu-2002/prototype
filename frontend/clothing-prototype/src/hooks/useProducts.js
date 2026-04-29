import { useState, useEffect } from "react";
import axios from "axios";

export default function useProducts(
  subCategory,
  masterCategory,
  usage,
  articleType,
  gender
) {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          "http://prototype-production-dfef.up.railway.app/api/products/allProducts",
          {
            params: {
              subCategory,
              masterCategory,
              usage,
              articleType,
              gender
            }
          }
        );

        setAllProducts(Array.isArray(response.data) ? response.data : []);
        console.log(response.data)
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [subCategory, masterCategory, usage, articleType, gender]);

  return { isLoading, err, allProducts };
}