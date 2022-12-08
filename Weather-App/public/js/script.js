console.log("This client side script is working properly");

const weatherForm = document.querySelector('form');
const userInput = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = userInput.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = '';

    const url=`http://localhost:3000/weather?address=${location}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.error) {
            messageOne.textContent = "Please Provide Valid Address";
        } else {
            const { latitude, longitude, name, country, region, weather} = data;
            messageOne.textContent = `${name} , ${region} , ${country}`;
            messageTwo.textContent = `Latitude ${latitude}, Longitude ${longitude}`;
            messageThree.textContent = `Weather is ${weather}`;
        }
    });
});
