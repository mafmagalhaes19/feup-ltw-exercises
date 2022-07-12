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
        button.addEventListener('click', function(e) {
            console.log("BUY!") 
            console.log(e.currentTarget)
        } )
    }
}
  
//attachBuyEvents1()


// Exercise 4 

function attachBuyEvents2() {
    const buttons = document.querySelectorAll('button')
    for(const button of buttons){
        button.addEventListener('click', function(e) { 
            const article = e.currentTarget.parentElement
            article.classList.toggle('sale')

            const id = article.getAttribute('data-id')
            console.log(id)

            const name = article.querySelector('h2').textContent
            const price = article.querySelector('.price').textContent
            const quantity = article.querySelector('.quantity').value

            console.log(name, price, quantity)
        })
    } 
}
  
//attachBuyEvents2()


// Exercise 5

function attachBuyEvents() {
    for (const button of document.querySelectorAll('#products button'))
      button.addEventListener('click', function(e) {
        const article = this.parentElement
  
        const id = article.getAttribute('data-id')
        const row = document.querySelector(`#cart table tr[data-id="${id}"]`)
  
        const name = article.querySelector('h2').textContent
        const price = article.querySelector('.price').textContent
        const quantity = article.querySelector('.quantity').value
  
        if (row) updateRow(row, price, quantity)
        else addRow(id, name, price, quantity)
  
        updateTotal()
      })
  }
  
  function addRow(id, name, price, quantity) {
    const table = document.querySelector('#cart table')
    const row = document.createElement('tr')
    row.setAttribute('data-id', id)
  
    const idCell = document.createElement('td')
    idCell.textContent = id
  
    const nameCell = document.createElement('td')
    nameCell.textContent = name
  
    const quantityCell = document.createElement('td')
    quantityCell.textContent = quantity
  
    const priceCell = document.createElement('td')
    priceCell.textContent = price
  
    const totalCell = document.createElement('td')
    totalCell.textContent = price * quantity
  
    const deleteCell = document.createElement('td')
    deleteCell.classList.add('delete')
    deleteCell.innerHTML = '<a href="">X</a>'
    deleteCell.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault()
      e.currentTarget.parentElement.parentElement.remove()
      updateTotal()
    })
  
    row.appendChild(idCell)
    row.appendChild(nameCell)
    row.appendChild(quantityCell)
    row.appendChild(priceCell)
    row.appendChild(totalCell)
    row.appendChild(deleteCell)
  
    table.appendChild(row)
  }
  
  function updateRow(row, price, quantity) {
    const quantityCell = row.querySelector('td:nth-child(3)')
    const totalCell = row.querySelector('td:nth-child(5)')
    
    quantityCell.textContent = parseInt(quantityCell.textContent, 10) + parseInt(quantity, 10)
    totalCell.textContent = parseInt(quantityCell.textContent, 10) * parseInt(price, 10)
  }
  
  function updateTotal() {
    const rows = document.querySelectorAll('#cart table > tr')
    const values = [...rows].map(r => parseInt(r.querySelector('td:nth-child(5)').textContent, 10)) 
    const total = values.reduce((t, v) => t + v, 0)
    document.querySelector('#cart table tfoot th:last-child').textContent = total
  }
  
  attachBuyEvents()