var requestURL = 'https://api.abalin.net/get/today?country=cz'; // locates where data about current name holiday are stored

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function () {
    var svatky = request.response;
    console.log(data.name_cz);
}