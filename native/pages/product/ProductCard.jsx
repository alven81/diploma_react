import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "../../components/Separator";
import colors from "../../res/colors";
import fonts from "../../res/fonts";
import { Consist } from "./Consist";
import { Features } from "./Features";
import { ImageBox } from "./ImageBox";
import axios from "axios";
import loadCart from "../../store/actions/loadCartAction";

const ProductCard = ({ route, navigation }) => {
	const [product, setProduct] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const whatInTheCart = useSelector((state) => state.loadCart.inCart);

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

	const handleAddtoCart = async () => {
		whatInTheCart.push(Number(route.params.id));
		await axios
			.patch(`http://localhost:3004/users/0`, {
				cart: whatInTheCart,
			})
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.status);
				}
			});
		dispatch(loadCart(0)); //user.id - 0 - default user
	};

	useEffect(() => {
		getProduct(route.params.id);
	}, [route.params.id]);

	return (
		<ScrollView nestedScrollEnabled={true}>
			<ImageBox
				images={product.icons}
				newProduct={product.new}
				age={product.features}
			/>
			<View
				style={{
					//flex: 1,
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<Text style={styles.title}>{product.title}</Text>
				<View style={styles.priceContainer}>
					<Text
						style={{
							textDecorationLine:
								product.discount === true ? "line-through" : "",
							fontFamily: fonts.main,
							textAlign: "left",
						}}
					>
						{`${product.price} руб.`}
					</Text>
					<Text
						style={{
							display: product.discount === true ? "" : "none",
							color: colors.mainPinc,
							fontFamily: fonts.main,
							textAlign: "left",
							fontSize: 25,
							fontWeight: 700,
						}}
					>
						{`${product.discount_price} руб.`}
					</Text>
					<Separator />
					<Text>Артикул: {product.art}</Text>
					<Separator />
					<Text style={styles.chars}>Описание:</Text>
					<Text style={styles.description}>
						{product.description}
					</Text>
					<Separator />
					<Features
						features={product.features}
						chars={styles.chars}
					/>
					<Separator />
					<Consist consist={product.consist} chars={styles.chars} />
					<Separator />
				</View>
			</View>
			<Button
				onPress={() => handleAddtoCart()}
				color={colors.mainPinc}
				title="В КОРЗИНУ"
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
	title: {
		padding: 5,
		fontFamily: fonts.main,
		fontSize: 16,
		fontWeight: 700,
		textAlign: "center",
	},
	chars: {
		padding: 5,
		fontFamily: fonts.main,
		textTransform: "uppercase",
		fontSize: 16,
		fontWeight: 700,
		textAlign: "left",
	},
	priceContainer: {
		flex: 1,
		//flexDirection: "row",
		//justifyContent: "space-between",
		width: "100%",
		padding: 10,
	},
	description: {
		padding: 10,
		textAlign: "justify",
	},
});

export { ProductCard };

{
	/* 
<section className="product_main container">
            {catalogList && (
                <>

                    <div className="product_main-item">
                        <div className="product_main-item-pictures">

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
