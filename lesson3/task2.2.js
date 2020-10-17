const basket = [1, 22, 31, 43, 55]

let price = basket.reduce(function(sum, current) {
    return sum + current
})

console.log(price)