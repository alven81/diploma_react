import { ReactNode } from "react";

export default interface IInCart {
    length: ReactNode;
    loadCart: any;
    inCart: Array<number>;
}