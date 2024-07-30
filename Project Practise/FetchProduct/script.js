

const productCenter = document.querySelector('.products-center')
const filter = document.querySelector('.filter > .list')
const FETCH_API = 'https://www.course-api.com/javascript-store-products'

//fetch product using asynchronous method from API
const fetchData = async () => {
    productCenter.innerHTML = `<div class="loading"></div>`
    const response = await fetch (FETCH_API)
    const data = await response.json()
    return data
}

//display product on div using map method
const setProduct = (list) => {
    const displayProduct = list.map((product)=>{
        const {id} = product
        const {name: title, price} = product.fields
        const {url: img} = product.fields.image[0]

        return `<a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${price / 100}</span>
            </footer>
        </a>`
    }).join('')

    productCenter.innerHTML = `<div class="product-container">${displayProduct}</div>`
}

//Create Filter menu using map and addeventListner method
const setFilter = (filterData) => {
    const button = ['all',
        ...new Set(filterData.map(product => product.fields.company))
    ]

    filter.innerHTML = button.map(filterItem => {
        return `<button class="btn company-btn" data-id="${filterItem}">${filterItem}</button>`
    }).join('')

    //setFilter button when user are click one of particular category
    const setClickEvent = (e) => {
        const id = e.target.dataset.id
        if(id){
            let filteredData
            if(id === 'all') {
                filteredData = filterData
            }else{
                filteredData = filterData.filter(product => {
                    return product.fields.company === id
                })
            }
            setProduct(filteredData)
        }
    }
    filter.addEventListener('click', setClickEvent)

    //setProduct search function using filter method
    const form = document.querySelector('.form-submit')
    const inputValue = document.getElementById('input-search')
    const setSearch = () => {
        const searchInput = inputValue.value.toLowerCase()
        // console.log(searchInput);
        const searchResult = filterData.filter(product => {
           return product.fields.name.includes(searchInput)
        })
        // console.log(searchResult)
        setProduct(searchResult)
    }
    form.addEventListener('keyup', setSearch)
}
const start = async () => {
    const data = await fetchData()
    setProduct(data)
    setFilter(data)
}
start()