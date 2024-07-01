
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
    },
    {
      id:2,
      name:'Alex Carrey',
      job: 'DevOps',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
    },
    {
      id:3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id:4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    }
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const buttons = document.querySelector('.button-container')
let counterNum = 0;

const loadDocument = () => {
    const item = reviews[counterNum]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

const showPerson = (person) => {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

buttons.addEventListener('click',(e) => {
    const next = e.target.classList
    if(next.contains('fa-chevron-right')){
      counterNum++
        if(counterNum == reviews.length - 1){
            counterNum = 0
        }
        showPerson(counterNum)
    }else{
      counterNum--
      if(counterNum < 0){
        counterNum = reviews.length -1 
      }
      showPerson(counterNum)
    }
})

window.addEventListener('DOMContentLoaded', loadDocument)