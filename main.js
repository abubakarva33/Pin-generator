const generate = document.getElementById("generate")
const display1 = document.getElementById('dis1')
const display2 = document.getElementById('dis2')
const digits = document.getElementsByClassName('digit')
const submit = document.getElementById('submit')


let pass
let checkPass = ''

generate.addEventListener('click', function () {
    const randomNum =  Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    display1.innerText = randomNum
    pass = randomNum
})


for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    digit.addEventListener('click', (event)=>{
        checkPass = checkPass + event.target.innerText
        display2.innerText = checkPass
    })
}

submit.addEventListener('click', ()=>{
    if(pass == checkPass){
        alert('matched')
    }else{
        alert('didnot matched')
    }
})
