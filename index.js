// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded")
    const text = document.querySelector("#text")
    console.log(text)
    text.textContent = "This is really cool!";
    text.parentNode.append();

})

