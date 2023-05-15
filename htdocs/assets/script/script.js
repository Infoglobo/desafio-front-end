'use strict'

// Requisição para o data.json
const request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'data.json', true);
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
    }
};
request.send();