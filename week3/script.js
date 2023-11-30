let increase= document.getElementById("test2")
let decrease= document.getElementById("test3")
let count= document.getElementById("test1")

increase.addEventListener("click", function(){
    count.innerHTML++
})

decrease.addEventListener("click" , function(){
    count.innerHTML--
})