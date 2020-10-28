// клас корзины
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

// класс продукта
class Item {
    _name = ''
    _price = 0
    _inBasket = false
    
    get price () {
        return this._price
    }

    get name () {
        return this._name
    }

    constructor (name, price) {
        this._name = name
        this._price = price
        this.render()
    }

    onBtnClicked () {
        this._inBasket = true
        this.render()
    }

    // создаем в продукте кнопку
    createButton () {
        const btn = document.createElement('a')
        btn.classList.add('btnBuy')
        btn.innerHTML = 'В корзину!'

        btn.addEventListener('click', this.onBtnClicked.bind(this))
  
        return btn
    }

    // рендерим товар
    render () {
        let newBasketElemName = document.createElement('h1')
        let newBasketElemPrice = document.createElement('h3')
        let newBasketElemBtn = document.createElement('div')
        

        newBasketElemName.innerText = `Название : ${this._name}`
        newBasketElemPrice.innerText = `Стоимость товара : ${this._price}`
        newBasketElemBtn = this.createButton()

        let place = null

        if (this._inBasket) {
            place = document.querySelector('#myBasket')
            place.appendChild(newBasketElemName)
            place.appendChild(newBasketElemPrice)
            
            // передаем товар в корзину
            const product = {name: this._name, price: this._price, inBasket: this._inBasket}
            BasketInstance.addItem(product)
            
            //считаем стоимость товаров в корзине
            let TotalPrice = BasketInstance.calcTotalPrice()

            // выводим стоимость корзины
            let basketPrice = document.querySelector('#myBasketPrice')
            basketPrice.innerHTML = `Стоимость товаров в корзине : ${TotalPrice}`
            basketPrice.appendChild(basketPrice)

        } else {
            place = document.querySelector('#marketPlace')
            place.appendChild(newBasketElemName)
            place.appendChild(newBasketElemPrice)
            place.appendChild(newBasketElemBtn)
        }
        
        
    }
} 

// создаем товары
const Item1 = new Item('Продукт 1', 10)
const Item2 = new Item('Продукт 2', 20)
const Item3 = new Item('Продукт 3', 55)

//создаем корзину
const BasketInstance  = new basket()
