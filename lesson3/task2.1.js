const basket=[1, 2, 3, 5]
let price=0

function countBasketPrice() {
    basket.forEach(i => {
        price+=i
    })
    return price
}

countBasketPrice(basket)

console.log(price)