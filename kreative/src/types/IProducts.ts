import IFeatures from "./IFeatures";
import IReview from "./IReview";

export default interface IProducts {
    art: string;
    categoryId: string,
    id: number,
    price: number,
    discount: boolean,
    new: boolean,
    discount_price: number,
    title: string,
    color: string,
    description: string,
    features: IFeatures,
    image: string,
    icons: [],
    consist: [],
    review: IReview,
    raiting: []
}