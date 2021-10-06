let display = document.getElementById(`display`)
let b1 = document.getElementByID(`1`)
let b2 = document.getElementByID(`2`)
let b3 = document.getElementByID(`3`)
let b4 = document.getElementByID(`4`)
let b5 = document.getElementByID(`5`)
let b6 = document.getElementByID(`6`)
let b7 = document.getElementByID(`7`)
let b8 = document.getElementByID(`8`)
let b9 = document.getElementByID(`9`)
let b0 = document.getElementByID(`0`)

// b1.addEventListener(`click`, () => {
//     display.innerText += b1.innerText
// })

let buttons = document.querySelectorAll(`.button`)
console.log(buttons)
// This brings all values in as an array!
for (let button of buttons) {
    button.addEventListener (`click`, () => {
        display.innerText += button.innerText
    })
}

let equals = document.getElementById(`equals`)

equals.addEventListener(`click`, () => {
    display.innerText = eval(display.innerText)
})







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
// Template literals: You HAVE to use `` instead of quotes
// let name = "Mom"
// let content = `<h2>Hello $(name)</h2>`;


// newElement.innerText = `${personName}`
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