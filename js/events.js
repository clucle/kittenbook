var greeting = document.getElementById('greeting');
alert("A");
greeting.addEventListener('click', function () {
    alert("A");
    if (greeting.innerHTML.match(/World/)) {
        greeting.innerHTML = 'Ola, mundo!';
    } else {
        greeting.innerHTML = 'Hello World!';
    }

});