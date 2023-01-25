const generate = document.getElementById('generate')
const display1 = document.getElementById('dis1')
const display2 = document.getElementById('dis2')
const digits = document.getElementsByClassName('digit')


let d1 = ''



generate.addEventListener('click', function () {
    const randomNum = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
    display1.innerText = randomNum
})

for (let index = 0; index < digits.length; index++) {
    const digit = digits[index];

    digit.addEventListener('click', function (event) {
        if (event.target.innerText === 'C') {
            d1 = ''
        } else {
            d1 = d1 + event.target.innerText
        }
        display2.innerText = d1
    })
}