// let box1=document.querySelector(".search_input_part");
// box1.addEventListener("click", function(){
//     box1.style.backgroundColor = "blue";
// })

document.querySelector(".search_input_part").addEventListener("click", () => {
    document.querySelector(".search_input_part").style.border = "1px solid white";
})
document.querySelector(".search_input_part").addEventListener("mouseenter", () => {
    document.querySelector(".search_input_part").style.backgroundColor = "#2A2A2A";
    document.querySelector("#inp").style.backgroundColor = "#2A2A2A";
    document.getElementById("searchIcon").src = "Images/search-hover.svg"
})
document.querySelector(".search_input_part").addEventListener("mouseleave", () => {
    document.querySelector(".search_input_part").style.border = "none";
    document.querySelector(".search_input_part").style.backgroundColor = "var(--leftScroll)";
    document.querySelector("#inp").style.backgroundColor = "var(--leftScroll)";
    document.getElementById("searchIcon").src = "Images/search.svg"
})


function createArtist(image, Name, artist) {
    let html = `<div class="artist" id="${artist}">
    <img style="width: 140px; border-radius: 50%;" src="${image}" alt="">
    <div style="padding: 5px 0px 20px 0px;" class="artist_name">
      <span><p>${Name}</p></span>
    <span style="color: var(--color1); font-size: 15px;"><p">Artist</p></span>
    </div>
  </div>`
  document.querySelector(".artist_box").innerHTML = document.querySelector(".artist_box").innerHTML + html;
}

createArtist("Images/pritam.jpeg", "Pritam", "artist1")
createArtist("Images/sachin.jpeg", "Sachin-Jigar", "artist2")
createArtist("Images/rehman.jpeg", "AR Rehman", "artist3")
createArtist("Images/Arjit.jpeg", "Arjit Singh", "artist4")
createArtist("Images/Atif.jpeg", "Atif Aslam", "artist5")