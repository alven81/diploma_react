import { ReactNode } from "react";

export default interface IInCart {
	forEach(arg0: (value: any) => void): unknown;
	reduce(arg0: (acum: any, cur: any) => any, arg1: {}): unknown;
    length: ReactNode;
    loadCart: any;
    inCart: Array<number>;
}