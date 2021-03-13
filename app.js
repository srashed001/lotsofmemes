
let topLine = document.getElementById("top-text"); 
let bottomLine = document.getElementById("bottom-text");
let imgLink = document.getElementById("image-link");
let submissionForm = document.getElementById("form");
console.log(submissionForm)




submissionForm.addEventListener("submit", function(event){
    event.preventDefault(); 

    console.log('hello')

    let newMeme = document.createElement("div");
    newMeme.className = "memes";
    let newTopText = document.createElement("p");
    newTopText.className = "top-text"
    let newBtmText = document.createElement("p");
    newBtmText.className = "bottom-text"
    newTopText.textContent = topLine.value; 
    newBtmText.textContent = bottomLine.value; 

    newMeme.append(newTopText);
    newMeme.append(newBtmText);

    let memeCollection = document.querySelector(".meme-collection");
    memeCollection.append(newMeme);

    newMeme.style.backgroundImage = `url(${imgLink.value})`;



})






