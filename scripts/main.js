const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');
let myButton = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
}
else
{
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
        myImage.setAttribute('src','images/opera.png');
    }
    else
    {
        myImage.setAttribute('src','images/firefox.png');
    }
}

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }    
}  