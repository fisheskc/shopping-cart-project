import {PurchaseItem} from "./purchaseItem.js";
import {Eventhandler} from "./eventhandler.js";
import {Product} from "./product.js";

// ul itemsStore
const itemsStoreList = document.getElementById('itemsStore');
// const yourOrder = document.getElementById('order');
let container = document.querySelector(".container");
let orderList = document.querySelector(".order-list");

const totalPrice = document.getElementById('total-price');
let mice = 'mice'
let letter = 's';

export class PurchaseItemView {

    // static showProductView(productId, _name) { 
    static showProductView(id) {
        console.log(id) 
     
        const myProduct = Product.getProductById(id);
        console.log(myProduct)
        let divItemPrice = document.createElement("div");
        console.log("Line 31")
        console.log(PurchaseItem.getTotalPurchasePrice()) 
        // productId look up here
        
        console.log(PurchaseItem.quantityOfPurchaseItem._quantity)

        // let itemDiv = document.createElement("div");
        let divOrder = document.createElement("li");
        divOrder.classList.add("order-id");

        // Total price of the basket purchase is output here using the ID totalPrice.
        totalPrice.innerHTML = `This is the total price is: <b>£${PurchaseItem.getTotalPurchasePrice()}</b>`;
            
        totalPrice.appendChild(divItemPrice);

        divOrder.innerHTML = `This is the price <b>£${id._costPrice}</b> for your selected <b>${id._quantity}</b> products: <b></b> ${id._name}</b>`
        console.log(totalPrice)
        // divOrder.appendChild(itemDiv);
        orderList.appendChild(divOrder);
        container.appendChild(divItemPrice);
        console.log(PurchaseItem.getTotalPurchasePrice()) 
        // console.log(PurchaseItemView.showItemsStore(myProduct._name));
        return myProduct
    }
}



