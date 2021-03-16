const $randomNumber = document.getElementById('random-number');
const $creationDate = document.getElementById('creation-date');

function subscribeRandomNumber() {
    fetch('/api/Random')
        .then((response) => response.json())
        .then((data) => {
            $randomNumber.innerHTML = data.random;
            $creationDate.innerHTML = data.created;

            // After the response has bene handled a new request is sent,
            // and the server will delay the response until new data is available
            subscribeRandomNumber();
        });
}

subscribeRandomNumber();
