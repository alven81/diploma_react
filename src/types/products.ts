import IFeatures from "./features";
import IReview from "./review";

export default interface IProducts {
    [x: string]: any;
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