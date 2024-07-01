



function openSidebar(open){
    return function(){
        document.querySelector('.sidebar').classList.add(`${open}`)
    }
}
function closeSidebar(close){
    return function(){
        document.querySelector('.sidebar').classList.remove(`${close}`)
    }
}
document.querySelector('.sidebar-toggle').onclick = openSidebar('show-sidebar')
document.querySelector('.close-btn').onclick = closeSidebar('show-sidebar')