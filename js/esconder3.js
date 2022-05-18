var btn3 = document.querySelector('#show-or-hide');

var container3 = document.querySelector('.container3');

btn3.addEventListener('click', function() {

    if (container3.style.display === 'block') {
        container3.style.display = 'none';
    } else {
        container3.style.display === 'block';
    }
});