// let box1=document.querySelector(".search_input_part");
// box1.addEventListener("click", function(){
//     box1.style.backgroundColor = "blue";
// })

document.querySelector(".search_input_part").addEventListener("click", ()=>{
    document.querySelector(".search_input_part").style.border = "1px solid white";
})
document.querySelector(".search_input_part").addEventListener("mouseenter", ()=>{
    document.querySelector(".search_input_part").style.backgroundColor="#2A2A2A";
    document.querySelector("#inp").style.backgroundColor = "#2A2A2A";
    document.getElementById("searchIcon").src = "Images/search-hover.svg"
})
document.querySelector(".search_input_part").addEventListener("mouseleave", ()=>{
    document.querySelector(".search_input_part").style.border = "none";
    document.querySelector(".search_input_part").style.backgroundColor="var(--leftScroll)";
    document.querySelector("#inp").style.backgroundColor = "var(--leftScroll)";
    document.getElementById("searchIcon").src = "Images/search.svg"
})
