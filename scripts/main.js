let heading = document.querySelector('h1');
heading.onclick = function(){
    alert('Stop poking me hooman!')
};

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/wtf.jpeg") {
        myImage.setAttribute ('src', 'images/whatchalookingat.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/wtf.jpeg');
    }
};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the kingdom of The Mighty Beast, ' + myName;}
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the kingdom of The Mighty Beast, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}