let display = document.getElementById("display")
// let b1 = document.getElementByID("b1")
// let b2 = document.getElementByID("b2")
// let b3 = document.getElementByID("b3")
// let b4 = document.getElementByID("b4")
// let b5 = document.getElementByID("b5")
// let b6 = document.getElementByID("b6")
// let b7 = document.getElementByID("b7")
// let b8 = document.getElementByID("b8")
// let b9 = document.getElementByID("b9")
// let b0 = document.getElementByID("b0")
// let divide = document.getElementByID("bdivide")
// let add = document.getElementByID("badd")
// let subtract = document.getElementByID("bsubtract")
// let decimal = document.getElementByID("bdecimal")

// b1.addEventListener("click", () => {
//     display.innerText += b1.innerText
// })


let buttons = document.querySelectorAll(".buttons")

for (let button of buttons) {
    button.addEventListener ("click", () => {
        display.innerText += button.innerText
    })
}

let equals = document.getElementById("equals")

equals.addEventListener ("click", () => {
    display.innerText = eval(display.innerText)
})

let clear = document.getElementById("bclear")

clear.addEventListener ("click", () => {
    display.innerText = (display.innerText = "")
})




// display.addEventListener ("input", () => {
// })

// let multiply = document.getElementByID("bmultiply")
// multiply.operation = "*"

// multiply.addEventListener ("click", () => {
// display.replace("x", "*")
// })

// let multiply = document.getElementByID("bmultiply")
// let multiply.operation = *




// Notes from Class:
// let elementToRemove = document.querySelectorAll("li")[2]
// elementToRemove.remove()

// newElement.remove()
// // a method (function) that's build into js, so it requires parens
// // useful for calculator!!!

// let element = document.getElementById(product-title):
// element.innerHTML = "<h2>Boomerang</h2>"
// newDiv.innerHTML = '<p>Hello World!</p>'
// newElement.innerText = 'Hello World!'

// using .innerText is how we can make the number and symbols show on the calc screen
// Template literals: You HAVE to use "" instead of quotes
// let name = "Mom"
// let content = "<h2>Hello $(name)</h2>";


// newElement.innerText = "${personName}"
// root.appendChild(newElement)

// // Instead of 

// let object = {
//     name: 'Jeanette',
//     location: "Raleigh"
//     age: 33,
//     hobbies: []
// }
// let personName = object.name
// newElement.innerText = 

// let buttons = document.querySelectorAll(".buttons")
// This brings all values in as an array!
// console.log (buttons)