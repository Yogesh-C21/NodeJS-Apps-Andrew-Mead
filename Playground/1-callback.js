/* function geoCode(callback) {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        }; 
        callback(data)
    }, 2000)
}

geoCode((data) => {
    console.log(data);
}); */


/******* Challenge ******/

function add(num1, num2, callback) {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 2000);
}

add(1,5, (resp)=> {
    console.log(resp);
});

