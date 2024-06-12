// Ejercicio 1
const imagen = document.querySelector("#img1")

imagen.addEventListener ("click", ()=> {
    imagen.classList.toggle("addborder")
})

// Ejercicio 2
const stkr1 = document.querySelector("#sticker1")
const stkr2 = document.querySelector("#sticker2")
const stkr3 = document.querySelector("#sticker3")
const btn2 = document.querySelector("#btn2")
const response2 = document.querySelector("#message2")

btn2.addEventListener("click", () => {
    const cant1 = parseInt(stkr1.value) || 0
    const cant2 = parseInt(stkr2.value) || 0
    const cant3 = parseInt(stkr3.value) || 0
    const total = cant1 + cant2 + cant3;

    if (total <= 10) {
        response2.innerHTML = `Llevas ${total} Stickers`
    } else {
        response2.innerHTML = "¡Llevas Demasiados Stickers!"
    }
})

// Ejercicio 3

const digit1 = document.querySelector("#digit1")
const digit2 = document.querySelector("#digit2")
const digit3 = document.querySelector("#digit3")
const btn3 = document.querySelector("#btn3")
const response3 = document.querySelector("#message3")

btn3.addEventListener("click", () => {
    const value1 = parseInt(digit1.value)
    const value2 = parseInt(digit2.value) 
    const value3 = parseInt(digit3.value) 

    if (value1===9&&value2===1&&value3===1) {
        response3.innerHTML = "Password 1 Correcto"
    } else if (value1===7&&value2===1&&value3===4) {
        response3.innerHTML = "Password 2 Correcto"
    } else { 
        response3.innerHTML = "Password Incorrecto"
    }
})