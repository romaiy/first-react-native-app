import { action, makeAutoObservable } from "mobx";

export default class ProductStore {

    product = [];

    constructor() {
        makeAutoObservable(this);
        this.product = [
            {
                name: 'cola',
                price: '10'
            },
            {
                name: 'pepsi',
                price: '5'
            }
        ]
    }

    @action setProduct(product) {
        this.product = product;
    }
}