
const openModal = document.querySelector('.modal-overlay')

const btn = document.querySelector('.btn').onclick = () => {
    openModal.classList.add('open-modal')
}
const closeBtn = document.querySelector('.close-btn').onclick = () => {
    openModal.classList.remove('open-modal')
}