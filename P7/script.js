// Exercise 1

//console.log('Hello World')


// Exercise 2

function changeAllArticleColors(){
    const articles = document.querySelectorAll('#products article')
    for (const article of articles){
        article.classList.add('sale')
    }

}

//changeAllArticleColors()

//Call the function from a window load event, so that the browser keep loading, parsing, and rendering the HTML
/*
window.addEventListener('load', function() {
    changeAllArticleColors()
  })
*/


// Exercise 3

function attachBuyEvents1() {
    const buttons = document.querySelectorAll('button')
    for (const button of buttons){
        button.addEventListener('click', function(e) { console.log(e.currentTarget)
            console.log("BUY!") } )
    }
}
  
//attachBuyEvents1()


// Exercise 4 

function attachBuyEvents2() {
    const buttons = document.querySelectorAll('button')
    for(const button of buttons){
        button.addEventListener('click', function() { 
            console.log(button.parentElement.classList.toggle('sale'))
            console.log(button.parentElement.getAttribute('data-id'))
            console.log(button.parentElement.querySelector('h2').textContent)
            console.log(button.parentElement.querySelector('p.price').textContent)
            console.log(button.parentElement.querySelector('input.quantity').value) } )
    }
    
}
  
//attachBuyEvents2()


// Exercise 5

function attachBuyEvents() {
    const buttons = document.querySelectorAll('button')
    for(const button of buttons){
        button.addEventListener('click', function() { 
            console.log(button.parentElement.classList.toggle('sale'))

            const id = button.parentElement.getAttribute('data-id')
            const newId = document.createElement('td')
            newId.textContent = id

            const product = button.parentElement.querySelector('h2').textContent
            const newProduct = document.createElement('td')
            newProduct.textContent = product

            const price = button.parentElement.querySelector('p.price').textContent
            const newPrice = document.createElement('td')
            newPrice.textContent = price

            const quantity = button.parentElement.querySelector('input.quantity').value
            const newQuantity = document.createElement('td')
            newQuantity.textContent = quantity
            
            let total = quantity * price
            const newTotal = document.createElement('td')
            newTotal.textContent = total

            const newRow = document.createElement('tr')
            newRow.appendChild(newId)
            newRow.appendChild(newProduct)
            newRow.appendChild(newPrice)
            newRow.appendChild(newQuantity)
            newRow.appendChild(newTotal)

            const shoppingCart = document.querySelector('#cart table')
            shoppingCart.appendChild(newRow) } )
    }
    
}
  
attachBuyEvents()