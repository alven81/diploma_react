import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBox } from "./ImageBox";

const ProductCard = ({ route, navigation }) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getProduct = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3004/products/${id}`
            );
            const json = await response.json();
            setProduct(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct(route.params.id);
    }, [route.params.id]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <Text>{product.title}</Text>

            <ImageBox images={product.icons} />
        </View>
    );
};

export { ProductCard };

{
    /* 
<section className="product_main container">
            {catalogList && (
                <>

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
    */
}
