// task 2
const basket = [10, 20, 30, 50]


function countBasketPrice(basket) {
    let BasketPrice = 0
    for (let i of basket){
        BasketPrice += i
    }
    return BasketPrice
}

console.log(`В Вашей корзине товаров на ${countBasketPrice(basket)} $`)