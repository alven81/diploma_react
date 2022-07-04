import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image,
    View,
} from "react-native";

const ImageBox = ({ images }) => {
    return !images ? (
        <ActivityIndicator />
    ) : (
        <View style={styles.imageBlock}>
            <FlatList
                data={images}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Image
                    key={item}
                        source={{
                            uri: `http://localhost:3000${item}`,
                        }}
                        style={styles.image}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageBlock: {
        flex: 1,
        flexDirection: "row",
        //justifyContent: "space-between",
        width: "100%",
        minHeight: 200,
        maxHeight: 200,
    },
    image: {
        borderRadius: 5,
        height: 80,
        width: 50,
        margin: 5,
    },
});

export { ImageBox };

// import React, { FC, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { showZoomImage } from "../../store/actions/zoomAction";

// interface ImageBoxProps {
// 	imageList: [];
// 	newProduct: boolean;
// 	imageMain: string;
// 	age: string;
// }

// const ImageBox: FC<ImageBoxProps> = ({
// 	imageList,
// 	newProduct,
// 	imageMain,
// 	age,
// }) => {

//     const dispatch = useDispatch();

// 	useEffect(() => {
// 		setImageLink(imageMain);
// 	}, [imageMain]);

// 	const handlerImage = (item: string) => {
// 		setImageLink(item);
// 	};

//     const handlerZoomImage = () => {
//         dispatch(showZoomImage([true, `http://localhost:3000${imageLink}`]));
//     }

// 	const [imageLink, setImageLink] = useState<string>();

// 	useState(() => {
// 		setImageLink(imageMain);
// 	});

// 	return (
// 		<div className="image_box">
// 			<div className="image_box-combo">
// 				{newProduct}
// 				{imageList.map((item) => (
// 					<div key={Math.random()}>
// 						<img
// 							className=""
// 							src={`http://localhost:3000${item}`}
// 							alt=""
// 							onMouseOver={() => handlerImage(item)}
// 						/>
// 					</div>
// 				))}
// 			</div>
// 			<div className="image_box-mono">
// 				<img
// 					className="image_box-mono-pic"
// 					src={`http://localhost:3000${imageLink}`}
// 					alt=""
//                     onClick={() => handlerZoomImage()}
// 				/>
// 				<div className={age.length ? "" : "hide"}>
// 					<span>{age}</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export { ImageBox };
