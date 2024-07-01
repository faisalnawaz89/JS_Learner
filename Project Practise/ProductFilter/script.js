

const filtersContainer = document.querySelector('.filters-container')
const productsContainer = document.querySelector('.products-container')
let filteredProducts = [...products]

//Product display code... 
const displayProducts = () => {
    if(filteredProducts.length < 1){
        productsContainer.innerHTML = `<h3>There is no matching products</h3>`
    }
    productsContainer.innerHTML = filteredProducts
    .map((product)=>{
      const{id, title, image, price} = product
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt="${title}"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`
    }).join('')

}
displayProducts()

//Filter Button initialize
const companies = document.querySelector('.companies')
const button = ['all',
  ...new Set(products.map((product)=> product.company))
]

companies.innerHTML = button.map((company)=>{
    return `<button class="company-btn" data-id="${company}">${company}</button>`
}).join('')

//Product search based on user search
const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input')
const userSearchInput = () => {
    const userInput = searchInput.value
    filteredProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(userInput)
    })
    displayProducts()
}
form.addEventListener('keyup', userSearchInput)

const displayfilterButton = (e) => {
  const el = e.target
  if(el.classList.contains('company-btn')){
    document.querySelectorAll('.company-btn').forEach((btn)=>{
        btn.classList.remove('active')
    })
    el.classList.add('active')
    if(el.dataset.id === 'all'){
         filteredProducts = [...products]
    }else{
          filteredProducts = products.filter((product)=>{
          console.log(filteredProducts);
          return product.company === el.dataset.id
        })
    }
    searchInput.value = ''
    displayProducts()
  }
}
companies.addEventListener('click', displayfilterButton)