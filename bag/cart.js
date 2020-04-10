'use strict';

const cartTable = document.querySelector('tbody');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let product = {
            id: elem.dataset.id,
            name: elem.dataset.name,
            price: elem.dataset.price,
        };
        cart.addToCart(product);
    })
});

let cart = {
    products: {},

    addToCart(product) {
        this.addProductToObject(product);
        this.addToTbody(product);
        document.querySelector('.total').textContent = this.SumTotal();
    },

    addProductToObject(product) {
        if (this.products[product.id] === undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1,
            }
        } else {
            this.products[product.id].count++;
        }
    },

    addToTbody(product) {
        let isProductInCart = document.querySelector(`.count[data-id="${product.id}"]`);
        if (!isProductInCart) {
            let productInCart = `
            <tr>
                <td>${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="count" data-id="${product.id}">1</td>
            </tr>
        `;
            cartTable.insertAdjacentHTML('beforeend',productInCart);
        } else {
            isProductInCart.textContent++
        }
    },

    /**
     * @return {number}
     */
    SumTotal() {
        let sum = 0;
        for (let i in this.products) {
            sum += this.products[i].price * this.products[i].count;
        }
        return sum;
    }
};
