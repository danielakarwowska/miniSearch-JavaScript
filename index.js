const input = document.querySelector('input')
const liLists = document.querySelectorAll('li')

const searchInput = (e) => {
    const li = e.target.value.toLowerCase()
    liLists.forEach(el=>{
        const task=el.textContent
        if(task.toLowerCase().indexOf(li)!==-1){
            el.style.display="block"
        }else{
            el.style.display="none"
        }
    })
}
input.addEventListener('keyup',searchInput)
