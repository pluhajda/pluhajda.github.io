var requestURL = 'https://api.abalin.net/get/today'; // locates where data about current name holiday are stored

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();



console.log(data.name_cz);