import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router";
import { Features } from "../components/Features";
import { ImageBox } from "../components/ImageBox";
import { Review } from "../components/Review";

const Product = () => {

    const itemIndex = useParams().id;
    const catalog = useSelector((state) => state.catalogData.catalogList)
    const catalogList = catalog[itemIndex - 1]
    const [raiting, setRaiting] = useState([]);
    const [averageRating, setAverageRating] = useState();


    useEffect(() => {
        if (!catalogList) return;

        axios.get(`http://localhost:3004/products/${catalogList.id}`)
        .then(res => setRaiting(res.data.raiting))
        }, [catalogList]
    )

    useEffect(() => {

        setAverageRating((raiting.reduce((x, y) => x + y, 0))/raiting.length)
        }, [raiting]
    )

console.log(raiting, averageRating)

    const handleRate = (e) => {
        if (e.target.value) {
            //e.stopPropagation();
        setRaiting(raiting.push(Number(e.target.value)))
        console.log(raiting);
         axios.patch(`http://localhost:3004/products/${catalogList.id}`, {
             raiting: raiting
         }).then(resp => {
            console.log(resp.data);
         }).catch(error => {
            console.log(error);
          });
        }
    }

    if (!catalogList) return null;

    return (
        <section className="product_main container">
            <div className="product_main-name">
                <p>{catalogList.title}</p>
            </div>
            <div className="product_main-item">
                <div className="product_main-item-pictures">
                    <ImageBox imageList={catalogList.icons} imageMain={catalogList.image} newProduct={catalogList.new} age={catalogList.features.age} />
                    <div className="product_main-item-raiting">
                        <div className="product_main-item-raiting-block">
                            <Rating 
                                name="half-rating" 
                                defaultValue={0} 
                                precision={0.5} 
                                value={+averageRating}
                                readOnly
                            />
                            <p>Отзывы</p>
                        </div>
                        <div className="product_main-item-raiting-btn">
                            <button>Написать отзыв</button>
                        </div>
                    </div>
                    <div className="">
                    <div>
                        <Rating 
                            name="half-rating" 
                            defaultValue={0} 
                            precision={0.5} 
                            onClick={(e) => (handleRate(e))}
                        />
                    </div>
                        блок для написания ревью
                    </div>
                    <div className="product_main-item-review">
                        <Review reviews={catalogList.review} />
                    </div>
                </div>
                <div className="product_main-item-price">
                    <p>
                        Цена: {catalogList.price}
                    </p>
                    <p>
                        "discount": {catalogList.discount}
                        "discount_price": {catalogList.discount_price}
                    </p>
                    <p>
                        Цвет: {catalogList.color}
                    </p>
                    <div>
                        <button />
                        {/* <image />
                        <image /> */}
                    </div>
                    <div className="product_main-item-description">       
                            <h3>Описание:</h3> 
                            <p>{catalogList.description}</p>             
                    </div>
                    <div className="product_main-item-about">
                        <Features features={catalogList.features} />
                    </div>
                    <div className="product_main-item-consist">
                            <h3>Состав:</h3>
                            <p>{catalogList.consist}</p>
                    </div>
                </div>
            </div>
            {/*"image": "/images/1_1.jpg",
            "icons": [
            ],
            "consist": [
            ],
            "review": [],
            "raiting": []
 */}



</section>
    )
}
export default Product