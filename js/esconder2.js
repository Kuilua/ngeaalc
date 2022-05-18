var btn2 = document.querySelector('#show-or-hide');

var container2 = document.querySelector('.container2');

btn2.addEventListener('click', function() {

    if (container2.style.display === 'block') {
        container2.style.display = 'none';
    } else {
        container2.style.display === 'block';
    }
});