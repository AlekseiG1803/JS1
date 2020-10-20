// task 1

let a=0
const arr=[]

while (a<100) {
    
    if (a > 1) {

        let i = 2
 
        while (a%i !== 0) {
            i+=1
        }

        if (i==a) {
            arr.push(i)
        }
    }

    a+=1
    
}

console.log(`Целые числа: ${arr}`)

