let search= document.getElementById("search")

function debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(function(){
            func(...args)
        },500)
    }
}
const searchbar=(querry)=>{
    console.log("searching")
}
const debouncefun=debounce(searchbar,2000)
search.addEventListener("input",()=>{
    debouncefun(search.value)
})
