import IFeatures from "./features";
export default interface IProducts {
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
    review: [],
    raiting: []
}