import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router";
import CommentsModal from "../components/product/CommentsModal";
import { Features } from "../components/product/Features";
import { ImageBox } from "../components/product/ImageBox";
import { Review } from "../components/product/Review";
import { Consist } from "../components/product/Consist";
import { New } from "../components/product/New";

const Product = () => {

    const itemIndex = useParams().id;
    const catalog = useSelector((state) => state.loadData.loadCatalog);
    const catalogList = catalog[itemIndex - 1];
    const [raiting, setRaiting] = useState([]);
    const [averageRating, setAverageRating] = useState();
    const [showComment, setShowComment] = useState(false);
    const [review, setReview] = useState(false);

    const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo)

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

const updateRaiting = () => {
    setAverageRating((raiting.reduce((x, y) => x + y, 0))/raiting.length)
}

const handleRate = (e) => {
    if (e.target.value) {
        raiting.push(Number(e.target.value));
        axios.patch(`http://localhost:3004/products/${catalogList.id}`, 
        {raiting: raiting})
        .then(updateRaiting(raiting))
        // .then(resp => {console.log(resp.data)})
        // .catch(error => {console.log(error)});
    }
}

const handleShowComments = () => {
    if (!user.id) return alert("Только зарегистрированные пользователи могут оставлять комментарии!")
    setShowComment(!showComment);
}

const handleShowReview = () => {
    setReview(!review)
}

    //if (!catalogList) return null;
    return (

        <section className="product_main container">
            
            { catalogList &&

            <>
            <div className="product_main-name">
                    <p>{catalogList.title}</p>
                </div>
                    <div className="product_main-item">
                        <div className="product_main-item-pictures">
                            <ImageBox imageList={catalogList.icons} imageMain={catalogList.image} newProduct={catalogList.new} age={catalogList.features.age} />
                            <div className="product_main-item-raiting">
                                <div className="product_main-item-raiting-block">
                                    <Rating name="half-rating" defaultValue={0} precision={0.5} value={Number(averageRating)} readOnly />
                                    <div className="button_container">
                                        <button onClick={(e) => handleShowReview()}>Отзывы</button>
                                    </div>
                                </div>
                                <div className="button_container">
                                    <button onClick={(e) => handleShowComments()}>Написать отзыв</button>
                                </div>
                            </div>

                            <div className={showComment ? "" : "hide"}>
                                <CommentsModal 
                                    onClick={(e) => (handleRate(e))} 
                                    handleShowComments={() => handleShowComments()}
                                    id={itemIndex}
                                    showComment={showComment}
                                />
                            </div>

                                <div className={review ? "product_main-item-review" : "hide"}>
                                    <Review reviews={catalogList.review} />
                                </div>
                        </div>


                        <div className="product_main-item-info">
                            <div className="product_main-item-info-price">
                                <p className={catalogList.discount === true ? "overline" : ""}>
                                    Цена: <span>{`${catalogList.price} руб.`}</span>
                                </p>
                                <p className={catalogList.discount === true ? "discount" : "hide"}>
                                    Цена со скидкой: <span>{`${catalogList.discount_price} руб.`}</span>
                                </p>
                                <p>
                                    Цвет: <span>{catalogList.color}</span>
                                </p>
                                <div className="button_container button_cart">
                                    <button>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>

                            <div className="product_main-item-description">
                                <h3>Описание</h3>
                                <p>{catalogList.description}</p>
                            </div>

                            <div className="product_main-item-about">
                                <Features features={catalogList.features} />
                            </div>

                            <div className="product_main-item-consist">
                                <h3>Состав:</h3>
                                <Consist consist={catalogList.consist}/>
                            </div>

                        </div>
                    </div>
                <div className="container">
                    <New />
                </div>
            
            </>

            } 

                <div className={catalogList ? "hide" : "no_data"}>
                    <p>Упс, похоже не запущен JSON-server...</p>
            </div>

        </section>
    )
}

export default Product