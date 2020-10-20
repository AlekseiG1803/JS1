class product {
    name = ''
    price = 0

    constructor (name, price) {
        this.name = name
        this.price = price
    }
}

const product1 = new product ('Продукт 1', 10)
const product2 = new product ('Продукт 2', 20)
const product3 = new product ('Продукт 3', 30)

const basket = []

basket.push(product1, product2, product3)

function countBasketPrice(basket) {
    
    let BasketPrice = 0

    for (let i = basket.length-1; i>=0; i--) {
        BasketPrice += basket[i].price
    }
    return BasketPrice
}

console.log(countBasketPrice(basket))