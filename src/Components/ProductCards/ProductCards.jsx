import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const navigate = useNavigate()
    const products = useLoaderData();
    const { category } = useParams();


    const [Filteredproducts, setFilteredproducts] = useState([]);
    useEffect(() => {

        if (category) {
            const filteredProducts = [...products].filter(fProduct => fProduct.category === category)
            setFilteredproducts(filteredProducts)
        } else {
            setFilteredproducts(products.slice(0, 6))
        }

    }, [products, category])

    return (
        <>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {
                    Filteredproducts.map(product => <Card key={product.product_id} product={product} ></Card>)
                }
            </div>
            {
                (!category)&&<button onClick={()=> navigate('/AllProducts')} className="btn px-9 bg-green-400  text-xl font-medium">View All</button>
            }
            {/* {
                (!category)&&<button onClick={()=> setFilteredproducts(products)} className="btn px-9 bg-green-400  text-xl font-medium">View All</button>
            } */}
            
        </>
    );
};

export default ProductCards;