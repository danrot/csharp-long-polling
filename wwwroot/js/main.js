const $randomNumber = document.getElementById('random-number');
const $creationDate = document.getElementById('creation-date');

function subscribeRandomNumber() {
    fetch('/api/Random')
        .then((response) => response.json())
        .then((data) => {
            $randomNumber.innerHTML = data.random;
            $creationDate.innerHTML = data.created;

            subscribeRandomNumber();
        });
}

subscribeRandomNumber();
