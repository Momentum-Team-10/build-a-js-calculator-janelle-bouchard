// Event Listeners: on hover & on click. Events take 2 arguments
// button.addEventListener("click", function () {
//     alert("Are you sure you want to cancel?");
// })

let button = document.getElementByID (`button`)
button.addEventListener(`click`, () => {
    newDiv.style.border = `5px solid yellow`
})

let button = document.getElementByID (`button`)
button.addEventListener(`click`, (event) => {
    console.log(event)
})