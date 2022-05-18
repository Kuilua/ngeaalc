function myFunction100() {

    var btn1 = document.querySelector('#show-or-hide');
    var btn2 = document.querySelector('#show-or-hide');
    var btn3 = document.querySelector('#show-or-hide');

    var container1 = document.querySelector('.container1');
    var container2 = document.querySelector('.container2');
    var container3 = document.querySelector('.container3');

    btn1.addEventListener('click', function() {

        if (container1.style.display === 'block') {
            container1.style.display = 'none';
            container2.style.display = 'none';
            container3.style.display = 'none';

        } else {
            container1.style.display === 'block';
            container2.style.display = 'none';
            container3.style.display = 'none';
        }

    });

    btn2.addEventListener('click', function() {

        if (container2.style.display === 'block') {
            container2.style.display = 'block';
            container1.style.display = 'none';
            container3.style.display = 'none';

        } else {
            container1.style.display === 'block';
            container2.style.display = 'none';
            container3.style.display = 'none';
        }

    });

    btn3.addEventListener('click', function() {

        if (container3.style.display === 'block') {
            container3.style.display = 'block';
            container2.style.display = 'none';
            container1.style.display = 'none';

        } else {
            container3.style.display === 'block';
            container2.style.display = 'none';
            container1.style.display = 'none';
        }

    });
}