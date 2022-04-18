import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { Features } from "../components/Features";
import { ImageBox } from "../components/ImageBox";
import { Review } from "../components/Review";
import { addCatalogData } from "../store/actions/catalogAction";
//import IProducts from "../types/products";

const Product = () => {

    const { id } = useParams(); // hook
    //const catalog = useSelector((state) => state.catalogData.catalogList)
    //const dispatch = useDispatch()
    const [catalogList, setcatalogList] = useState([]);
    const [raiting, setRaiting] = useState([]);
    const [averageRating, setAverageRating] = useState();
  
console.log(`http://localhost:3004/products/`);

    useEffect(() => {
        axios.get(`http://localhost:3004/products/${id}`)
        .then(res => setcatalogList(res.data))
        }, []
    )
   //console.log("id: ", id, ",", "catalog: ", catalogList)
    
    //const catalogList = catalog[id-1]

    useEffect(() => {
        axios.get(`http://localhost:3004/products/${catalogList}.${id}`)
        .then(res => setRaiting(res.data.raiting))
        }, []
    )

    // useEffect(() => {
    //     setAverageRating((raiting.reduce((x, y) => x + y, 0))/raiting.length)
    //     }, [raiting]
    // )

   console.log("id: ", id, ",", "catalog: ", catalogList, "raiting: ", raiting);

    const handleRate = (e) => {
        if (e.target.value) {
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
                        <button onClick="">Отправить</button>
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
                            {/* <h3>Характеристики</h3> 
                            <p>Вид товара с упаковкой (г)<span>{catalogList.features.weight}</span></p>
                            <p>Вид творчества<span>{catalogList.features.creation}</span></p>
                            <p>Возрастные ограничения<span>{catalogList.features.age}</span></p>
                            <p>Высота упаковки<span>{catalogList.features.height_gross}</span></p>
                            <p>Глубина упаковки<span>{catalogList.features.deep}</span></p>
                            <p>Ширина упаковки<span>{catalogList.features.width}</span></p>
                            <p>Высота изделия<span>{catalogList.features.height}</span></p>
                            <p>Страна производства<span>{catalogList.features.origin}</span></p> */}
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