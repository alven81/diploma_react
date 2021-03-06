import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CommentsModal from "./CommentsModal";
import { Features } from "./Features";
import { ImageBox } from "./ImageBox";
import { Review } from "./Review";
import { Consist } from "./Consist";
import { New } from "./New";
import loadCart from "../../store/actions/loadCartAction";
import { showAlertMessage } from "../../store/actions/AlertAction";
import loadLikes from "../../store/actions/loadLikesAction";

const Product = () => {
    const dispatch = useDispatch();
    const itemIndex = useParams().id;
    const catalog = useSelector((state) => state.loadData.loadCatalog);
    const catalogList = catalog[itemIndex - 1];
    const [raiting, setRaiting] = useState([]);
    const [averageRating, setAverageRating] = useState();
    const [showComment, setShowComment] = useState(false);
    const [review, setReview] = useState(false);
    const [cartItem, setCartItem] = useState();
    const [consistBlockText, setConsistBlockText] = useState(
        "Развернуть описание"
    );
    const [keyConsistSwitch, setKeyConsistSwitch] = useState(false);
    const [featureBlockText, setFeatureBlockText] = useState(
        "Развернуть описание"
    );
    const [keyFeatureSwitch, setKeyFeatureSwitch] = useState(false);
    const [descriptionBlockText, setDescriptionBlockText] = useState(
        "Развернуть описание"
    );
    const [keyDescriptionSwitch, setKeyDescriptionSwitch] = useState(false);

    const descriptionBlock = useRef();
    const featureBlock = useRef();
    const consistBlock = useRef();

    const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo);
    const whatInTheCart = useSelector((state) => state.loadCart.inCart);
    const checkExistingLikes = useSelector((state) => state.loadLikes.inLikes);

    useEffect(() => {
        if (!catalogList) return;
        axios
            .get(`http://localhost:3004/products/${catalogList.id}`)
            .then((res) => setRaiting(res.data.raiting));
    }, [catalogList]);

    useEffect(() => {
        setCartItem(itemIndex);
    }, [itemIndex]);

    useEffect(() => {
        setAverageRating(raiting.reduce((x, y) => x + y, 0) / raiting.length);
    }, [raiting]);

    const updateRaiting = () => {
        setAverageRating(raiting.reduce((x, y) => x + y, 0) / raiting.length);
    };

    const handleRate = (e) => {
        if (e.target.value) {
            raiting.push(Number(e.target.value));
            axios
                .patch(`http://localhost:3004/products/${catalogList.id}`, {
                    raiting: raiting,
                })
                .then(updateRaiting(raiting))
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleShowComments = () => {
        if (!user.id)
            return dispatch(
                showAlertMessage({
                    status: true,
                    message:
                        "Только зарегистрированные пользователи могут оставлять комментарии!",
                })
            );
        setShowComment(!showComment);
    };

    const handleShowReview = () => {
        setReview(!review);
    };

    const handleAddtoCart = async () => {
        if (!user.id)
            return dispatch(
                showAlertMessage({
                    status: true,
                    message:
                        "Пожалуйста зарегистрируйтесь, чтобы добавлять товары в корзину!",
                })
            );
        whatInTheCart.push(Number(cartItem));
        await axios
            .patch(`http://localhost:3004/users/${user.id}`, {
                cart: whatInTheCart,
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                }
            });
        dispatch(loadCart(user.id));
    };

    const handleAddLike = async () => {
        if (!user.id)
            return dispatch(
                showAlertMessage({
                    status: true,
                    message:
                        "Пожалуйста зарегистрируйтесь, чтобы поставить лайк!",
                })
            );
        if (!checkExistingLikes.includes(Number(cartItem))) checkExistingLikes.push(Number(cartItem));
        await axios
            .patch(`http://localhost:3004/users/${user.id}`, {
                likes: checkExistingLikes,
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                }
            });
        dispatch(loadLikes(user.id));
    };


    const handleOpenDescription = (incomingBlock) => {
        if (!keyDescriptionSwitch) {
            incomingBlock.current.style.height = "auto";
            setDescriptionBlockText("Свернуть описание");
        }
        if (keyDescriptionSwitch) {
            incomingBlock.current.style.height = "90px";
            setDescriptionBlockText("Развернуть описание");
        }
        setKeyDescriptionSwitch(!keyDescriptionSwitch);
    };

    const handleOpenFeature = (incomingBlock) => {
        if (!keyFeatureSwitch) {
            incomingBlock.current.style.height = "auto";
            setFeatureBlockText("Свернуть описание");
        }
        if (keyFeatureSwitch) {
            incomingBlock.current.style.height = "90px";
            setFeatureBlockText("Развернуть описание");
        }
        setKeyFeatureSwitch(!keyFeatureSwitch);
    };

    const handleOpenConsist = (incomingBlock) => {
        if (!keyConsistSwitch) {
            incomingBlock.current.style.height = "auto";
            setConsistBlockText("Свернуть описание");
        }
        if (keyConsistSwitch) {
            incomingBlock.current.style.height = "90px";
            setConsistBlockText("Развернуть описание");
        }
        setKeyConsistSwitch(!keyConsistSwitch);
    };

    return (
        <section className="product_main container">
            {catalogList && (
                <>
                    <div className="product_main-name">
                        <p>{catalogList.title}</p>
                    </div>

                    <div className="product_main-item">
                        <div className="product_main-item-pictures">
                            <ImageBox
                                imageList={catalogList.icons}
                                imageMain={catalogList.image}
                                newProduct={catalogList.new}
                                age={catalogList.features.age}
                            />
                            <div className="product_main-item-raiting">
                                <div className="product_main-item-raiting-block">
                                    <Rating
                                        name="half-rating"
                                        defaultValue={null}
                                        precision={0.5}
                                        value={Number(averageRating)}
                                        readOnly
                                    />
                                    <button
                                        className="product_main-item-raiting-block-button"
                                        onClick={(e) => handleShowReview()}
                                    >
                                        Отзывы
                                    </button>
                                </div>
                                <div className="button_container">
                                    <button
                                        onClick={(e) => handleShowComments()}
                                    >
                                        Написать отзыв
                                    </button>
                                </div>
                            </div>

                            <div className={showComment ? "" : "hide"}>
                                <CommentsModal
                                    onClick={(e) => handleRate(e)}
                                    handleShowComments={() =>
                                        handleShowComments()
                                    }
                                    id={itemIndex}
                                    showComment={showComment}
                                />
                            </div>

                            <div
                                className={
                                    review ? "product_main-item-review" : "hide"
                                }
                            >
                                {catalogList.review.length ? (
                                    <Review reviews={catalogList.review} />
                                ) : (
                                    <p>По данному товару еще нет отзывов</p>
                                )}
                            </div>
                        </div>

                        <div className="product_main-item-info">
                            <div className="product_main-item-info-price">
                                <p
                                    className={
                                        catalogList.discount === true
                                            ? "overline"
                                            : ""
                                    }
                                >
                                    Цена:{" "}
                                    <span>{`${catalogList.price} руб.`}</span>
                                </p>
                                <p
                                    className={
                                        catalogList.discount === true
                                            ? "discount"
                                            : "hide"
                                    }
                                >
                                    Цена со скидкой:{" "}
                                    <span>{`${catalogList.discount_price} руб.`}</span>
                                </p>
                                <p
                                    className={
                                        catalogList.color === 0 ? "hide" : ""
                                    }
                                >
                                    Цвет: <span>{catalogList.color}</span>
                                </p>
                                <div className="product_main-item-info-like">
                                    <div className="button_container button_cart">
                                        <button
                                            onClick={() => handleAddtoCart()}
                                        >
                                            Добавить в корзину
                                        </button>
                                    </div>
                                    <img
                                        onClick={() => handleAddLike()}
                                        src={checkExistingLikes.includes(Number(cartItem)) ? "/assets/img/cart_heart_filled.svg" : "/assets/img/cart_heart.svg"}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div
                                ref={descriptionBlock}
                                className={
                                    !catalogList.description
                                        ? "hide"
                                        : "product_main-item-description"
                                }
                            >
                                <h3>Описание</h3>
                                <p>{catalogList.description}</p>
                            </div>
                            <button
                                className="product_main-item-rollbtn"
                                onClick={() =>
                                    handleOpenDescription(descriptionBlock)
                                }
                            >
                                {descriptionBlockText}
                            </button>
                            <div
                                ref={featureBlock}
                                className="product_main-item-about"
                            >
                                <Features features={catalogList.features} />
                            </div>
                            <button
                                className="product_main-item-rollbtn"
                                onClick={() => handleOpenFeature(featureBlock)}
                            >
                                {featureBlockText}
                            </button>

                            <div
                                ref={consistBlock}
                                className="product_main-item-consist"
                            >
                                <h3>Состав:</h3>
                                <Consist consist={catalogList.consist} />
                            </div>
                            <button
                                className="product_main-item-rollbtn"
                                onClick={() => handleOpenConsist(consistBlock)}
                            >
                                {consistBlockText}
                            </button>
                        </div>
                    </div>

                    <section className="container">
                        <New />
                    </section>
                </>
            )}

            <div className={catalogList ? "hide" : "no_data"}>
                <p>Упс, похоже не запущен JSON-server...</p>
            </div>
        </section>
    );
};

export default Product;
