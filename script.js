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

let currentsongs = new Audio();
// fetch songs from server:
async function getSongs(){
  let a = await fetch("http://127.0.0.1:5500/Project/Spotify_Clone/songs/")
  let response = await a.text()
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a")
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
      songs.push(element.href.split("/songs/")[1])
    }
    
  }
  return songs;
}

function convertSecondsToMinutes(seconds) {
  if(isNaN(seconds) || seconds <0){
    return `invalid input`
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (track, pause=false)=>{
  // let audio = new Audio("/Project/Spotify_Clone/songs/" + track)
  currentsongs.src = "/Project/Spotify_Clone/songs/" + track;
  if(!pause){
    currentsongs.play()
    play.src = "Images/pause.svg"
  }
  document.querySelector(".song-info").innerHTML = decodeURI(track);
  document.querySelector(".song-time").innerHTML = "00:12 / 00:55"
}

async function main(){
  // get the list of the songs
  let songs = await getSongs()
  playMusic(songs[0], true)
  // Show all the songs in playlist
  let songUL = document.querySelector("#create_playlist").getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + `<li>
    <div class="info">
      <div>${song.replaceAll("%20", " ")}</div>
    </div>
  </li>`
  }

  Array.from(document.querySelector("#create_playlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element=>{
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.split("/songs/")[0])
    })
  })
  // play the first songs
  // var audio = new Audio(songs[0]);
  // audio.play();

  play.addEventListener("click", ()=>{
    if(currentsongs.paused){
      currentsongs.play()
      play.src = "Images/pause.svg"
    }
    else{
      currentsongs.pause()
      play.src = "Images/playbutton.svg"
    }
  })

  // Timeupdate 
  currentsongs.addEventListener("timeupdate", ()=>{
    console.log(currentsongs.currentTime, currentsongs.duration);
    document.querySelector(".song-time").innerHTML = `${convertSecondsToMinutes(currentsongs.currentTime)}/${convertSecondsToMinutes(currentsongs.duration)}`
    document.querySelector(".circle").style.left = (currentsongs.currentTime/currentsongs.duration)*98 + "%";
  })

  document.querySelector(".seek-bar").addEventListener("click", e=>{
    let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentsongs.currentTime = ((currentsongs.duration)*percent)/100
  })
}

main()