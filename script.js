// let box1=document.querySelector(".search_input_part");
// box1.addEventListener("click", function(){
//     box1.style.backgroundColor = "blue";
// })

document.querySelector(".search-bar").addEventListener("click", () => {
  document.querySelector(".search-bar").style.border = "1px solid white";
})
document.querySelector(".search-bar").addEventListener("mouseenter", () => {
  document.querySelector(".search-bar").style.backgroundColor = "#2A2A2A";
  document.querySelector("#inp").style.backgroundColor = "#2A2A2A";
  document.getElementById("searchIcon").src = "Images/search-hover.svg"
})
document.querySelector(".search-bar").addEventListener("mouseleave", () => {
  document.querySelector(".search-bar").style.border = "none";
  document.querySelector(".search-bar").style.backgroundColor = "var(--leftScroll)";
  // document.querySelector(".search-bar").style.overflow = "hidden";
  document.querySelector("#inp").style.backgroundColor = "var(--leftScroll)";
  document.getElementById("searchIcon").src = "Images/search.svg"
})


function createArtist(image, Name, artist) {
  let html = `
  <div class="artist" id="${artist}">
  <div class="artImage">
  <img id="playSVG" src="Images/play.svg" alt=""></img>
  <img class="artist_Image" style="width: 140px; border-radius: 50%;" src="${image}" alt=""></div>
  <div class="artist_name">
    <span><p>${Name}</p></span>
  <span style="color: var(--color1); font-size: 15px;"><p">Artist</p></span>
  </div>
</div>`
  document.querySelector(`.artist_box`).innerHTML = document.querySelector(`.artist_box`).innerHTML + html;
}
function createAlbums(image, Title, Name) {
  let html = `<div class="artist">
    <div class="artImage">
    <img id="playSVG" src="Images/play.svg" alt=""></img>
    <img class="artist_Image" style="width: 140px; border-radius: 10px;" src="${image}" alt=""></div>
    <div class="artist_name">
      <span><p>${Title}</p></span>
    <span style="color: var(--color1); font-size: 15px;"><p">${Name}</p></span>
    </div>
  </div>`
  document.querySelector(".artist_box2").innerHTML = document.querySelector(".artist_box2").innerHTML + html;
}
function createRadio(image, Name) {
  let html = `<div class="artist">
  <div class="artImage">
  <img id="playSVG" src="Images/play.svg" alt=""></img>
  <img class="artist_Image" style="width: 140px; border-radius: 10px;" src="${image}" alt=""></div>
  <div class="artist_name">
    <div class="artist_name">
    <span style="color: var(--color1); font-size: 15px;"><p">Artist</p></span>
    </div>
  </div>`
  document.querySelector(".artist_box3").innerHTML = document.querySelector(".artist_box3").innerHTML + html;
}
function createFeature(image, Name) {
  let html = `<div class="artist">
  <div class="artImage">
  <img id="playSVG" src="Images/play.svg" alt=""></img>
  <img class="artist_Image" style="width: 140px; border-radius: 10px;" src="${image}" alt=""></div>
  <div class="artist_name">
    <div class="artist_name">
    <span style="color: var(--color1); font-size: 15px;"><p">Artist</p></span>
    </div>
  </div>`
  document.querySelector(".artist_box4").innerHTML = document.querySelector(".artist_box4").innerHTML + html;
}
function createPlaylist(image, Name) {
  let html = `<div class="artist">
  <div class="artImage">
  <img id="playSVG" src="Images/play.svg" alt=""></img>
  <img class="artist_Image" style="width: 140px; border-radius: 10px;" src="${image}" alt=""></div>
  <div class="artist_name">
    <div class="artist_name">
    <span style="color: var(--color1); font-size: 15px;"><p">Artist</p></span>
    </div>
  </div>`
  document.querySelector(".artist_box5").innerHTML = document.querySelector(".artist_box5").innerHTML + html;
}

// createArtist("Images/pritam.jpeg", "Pritam", "artist1")
// createArtist("Images/sachin.jpeg", "Sachin-Jigar", "artist2")
// createArtist("Images/rehman.jpeg", "AR Rehman", "artist3")
// createArtist("Images/Arjit.jpeg", "Arjit Singh", "artist4")
// createArtist("Images/Atif.jpeg", "Atif Aslam", "artist5")

function rightContent() {
  let right = document.querySelector(".first_content_box");
  // Artist Part
  document.querySelector(".first_content_box").innerHTML = `<div class="right_content_box" id="right1">
              <div class="first_line">
              <h2>Popular artists</h2>
                <span>Show all</span>
              </div>
              <div class="artist_box artist_box1">
              </div>
            </div>`
  createArtist("Images/pritam.jpeg", "Pritam", "artist1")
  createArtist("Images/sachin.jpeg", "Sachin-Jigar", "artist2")
  createArtist("Images/rehman.jpeg", "AR Rehman", "artist3")
  createArtist("Images/Arjit.jpeg", "Arjit Singh", "artist4")
  createArtist("Images/Atif.jpeg", "Atif Aslam", "artist5")
  // Albums part
  right.innerHTML = right.innerHTML + `<div class="right_content_box" id="right2">
              <div class="first_line">
                <h2>Popular albums</h2>
                <span>Show all</span>
              </div>
              <div class="artist_box artist_box2">
              </div>
            </div>`
  createAlbums("Images/Albums/pritam.jpeg", "Yeh Jawani Hai Dewani", "Pritam")
  createAlbums("Images/Albums/glory.jpeg", "Glory", "Honey Singh")
  createAlbums("Images/Albums/Anuv.jpeg", "Jo Tum Mere Ho", "Anuv Jain")
  createAlbums("Images/Albums/Making.jpeg", "Making Memories", "Karan Aujla")
  createAlbums("Images/Albums/Aashiqui2.jpeg", "Aashiqui2", "Mithon, Ankit Tiwari")
  // Radio part
  right.innerHTML = right.innerHTML + `<div class="right_content_box" id="right3">
              <div class="first_line">
                <h2>Popular Radio</h2>
                <span>Show all</span>
              </div>
              <div class="artist_box artist_box3">
              </div>
            </div>`
  createRadio("Images/Radio/radio1.jpeg", "Pritam")
  createRadio("Images/Radio/radio2.jpeg", "Sachin-Jigar")
  createRadio("Images/Radio/radio3.jpeg", "AR Rehman")
  createRadio("Images/Radio/radio4.jpeg", "Arjit Singh")
  createRadio("Images/Radio/radio5.jpeg", "Atif Aslam")
  // Feature chart
  right.innerHTML = right.innerHTML + `<div class="right_content_box" id="right3">
              <div class="first_line">
                <h2>Feature Charts</h2>
                <span>Show all</span>
              </div>
              <div class="artist_box artist_box4">
              </div>
            </div>`
  createFeature("Images/Charts/chart1.jpg", "Pritam")
  createFeature("Images/Charts/chart2.jpg", "Sachin-Jigar")
  createFeature("Images/Charts/chart3.jpg", "AR Rehman")
  createFeature("Images/Charts/chart4.jpg", "Arjit Singh")
  createFeature("Images/Charts/chart5.jpg", "Atif Aslam")
  // Playlist
  right.innerHTML = right.innerHTML + `<div class="right_content_box" id="right3">
              <div class="first_line">
                <h2>Playlist from our Editors</h2>
                <span>Show all</span>
              </div>
              <div class="artist_box artist_box5">
              </div>
            </div>`
  createPlaylist("Images/pritam.jpeg", "Pritam")
  createPlaylist("Images/sachin.jpeg", "Sachin-Jigar")
  createPlaylist("Images/rehman.jpeg", "AR Rehman")
  createPlaylist("Images/Arjit.jpeg", "Arjit Singh")
  createPlaylist("Images/Atif.jpeg", "Atif Aslam")

  // right.innerHTML = right.innerHTML + `<div class="right_content_box second_right_content_box">
  //                                       <h1 style="color: white;">Hello</h1>
  //                                     </div>`
}
rightContent()


// document.querySelector(".artImage").innerHTML = document.querySelector(".artImage").innerHTML+`<img id="playSVG" src="Images/play.svg" alt=""></img>`

let a = document.querySelector(".first_part")
function company_part(clas, arr) {
  // a.innerHTML = `<div class="${clas}"><h4>Company</h4></div>`
  let b = document.querySelector(`.${clas}`);
  for (const ele of arr) {
    b.innerHTML = b.innerHTML + `
                                <div><p>${ele}</p></div>`
  }
}

function callCompany() {
  a.innerHTML = `<div class="last last1"><h4>Company</h4></div>`
  let arr1 = ["About", "Jobs", "For the Record"]
  company_part("last1", arr1)
  a.innerHTML = a.innerHTML+`<div class="last last2"><h4>Communities</h4></div>`
  let arr2 = ["For Artists", "Developers", "Advertising", "Investors", "Vendors"]
  company_part("last2",arr2)
  a.innerHTML = a.innerHTML+`<div class="last last3"><h4>Communities</h4></div>`
  let arr3 = ["Support", "Free Mobile App"]
  company_part("last3",arr3)
  a.innerHTML = a.innerHTML+`<div class="last last4"><h4>Communities</h4></div>`
  let arr4 = ["Premium Individual", "Premium Duo", "Premium Family", "Premium Student", "Spotify Free"]
  company_part("last4",arr4)
}

callCompany()
