class basket {
    _cart = []

    constructor (...items) {
        this._cart.push(...items)
    }

    addItem (item) {
        this._cart.push (item)
    }

    calcTotalPrice () {
        return this._cart.reduce((result, curtItem) => {
                return result + curtItem.price

        }, 0)
    }
}

class Item {
    _name = ''
    _price = 0

    get price () {
        return this._price
    }

    get name () {
        return this._name
    }

    constructor (name, price) {
        this._name = name
        this._price = price
    }
} 



const BasketInstance  = new basket(new Item('Продукт 1', 10), new Item('Продукт 2', 20))
let TotalPrice = BasketInstance.calcTotalPrice()

BasketInstance.addItem(new Item('Продукт 3', 55))
TotalPrice = BasketInstance.calcTotalPrice()


let basketRender = document.querySelector('#myBasket')

let i = BasketInstance._cart.length-1

BasketInstance._cart.forEach(element => {

    let newBasketElemName = document.createElement('h1')
    let newBasketElemPrice = document.createElement('h3')

    newBasketElemName.innerText = `Название : ${BasketInstance._cart[i]._name}`
    newBasketElemPrice.innerText = `Стоимость товара : ${BasketInstance._cart[i]._price}`

    basketRender.appendChild(newBasketElemName)
    basketRender.appendChild(newBasketElemPrice)

    i--
});

let basketPrice = document.querySelector('#totalPrice')
basketPrice.innerHTML = `Стоимость товаров в корзине : ${TotalPrice}`
myBasket.appendChild(basketPrice)