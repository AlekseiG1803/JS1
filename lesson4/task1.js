const arr = Array.from(prompt('Введите число не более 999 999'))

const text = {
    units: ['сотни', 'десятки', 'единицы']
}

let i=arr.length -1
let j=text.units.length -1
let value

if (i<3) {
    for (i; i>=0; i--) {
    console.log(value = (text.units[j]) +' : ' +arr[i])
    j=j-1
    }
} else if (i>2&&i<6) {
    text.thousands = 'тысяч'
    let counter = j
    for (i; i>=0; i--) {
        
        if (counter<0) { 
            switch (j) {
                case j=-1:
                console.log(value = (text.units[2])  + ' ' + text.thousands + ' '+' : ' +arr[i]),
                j=j-1
                break
                case j=-2:
                console.log(value = (text.units[1])  + ' ' + text.thousands + ' '+' : ' +arr[i]),
                j=j-1
                break
                default:
                console.log(value = (text.units[0])  + ' ' + text.thousands + ' '+' : ' +arr[i]),
                j=j-1
                break
            }
                            
            } else {            
            console.log(value = (text.units[j] + ' '+ ':' + ' ' + arr[i]))
            j=j-1
            counter = counter-1
            }
        
    }

} else {
    console.log(`Число ооочень большое... умею считать только до тысяч :)`)
}



