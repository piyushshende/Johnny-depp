window.addEventListener('load', function() {
    let home = document.getElementById('Home');
    let about = document.getElementById('About');
    let gallery = document.getElementById('Gallery');
    let follow = document.getElementById('Follow');
    let iopacity = document.querySelector('img');
    let article = document.querySelector('article');
    let grid = document.querySelector('.grid');
    let span = document.querySelector('span');
    let social = document.querySelectorAll('a');

    about.addEventListener('click', function() {
        if (iopacity.classList.contains('img-opacity2')) {
            iopacity.classList.remove('img-opacity2');
        }
        grid.style.display = 'none';
        span.style.display = 'block';
        // if (span.classList.contains('trans')) {
        //     span.classList.remove('trans');
        // }
        socialRemove();
        iopacity.setAttribute('class', 'img-opacity1');
        article.style.display = 'block';
        span.setAttribute('class', 'trans');
    })
    home.addEventListener('click', function() {
        if (iopacity.classList.contains('img-opacity1')) {
            iopacity.classList.remove('img-opacity1');
        }
        if (iopacity.classList.contains('img-opacity2')) {
            iopacity.classList.remove('img-opacity2');
        }
        if (span.classList.contains('trans')) {
            span.classList.remove('trans');
        }
        span.style.display = 'block';
        iopacity.style.visibility = 'visible';
        grid.style.display = 'none'
        socialRemove();;
        article.style.display = 'none';
    })
    gallery.addEventListener('click', function() {

        iopacity.setAttribute('class', 'img-opacity2');
        span.style.display = 'none';
        article.style.display = 'none';
        socialRemove();
        grid.style.display = 'block';
    })
    follow.addEventListener('click', function() {
        article.style.display = 'none';
        grid.style.display = 'none';
        if (iopacity.classList.contains('img-opacity2')) {
            iopacity.classList.remove('img-opacity2');
        }
        if (!iopacity.classList.contains('img-opacity1')) {
            iopacity.classList.add('img-opacity1');
        }
        span.style.display = 'none';
        span.classList.remove('trans');
        social[0].style.display = 'block';
        social[1].style.display = 'block';
        social[2].style.display = 'block';
    })

    function socialRemove() {
        social[0].style.display = 'none';
        social[1].style.display = 'none';
        social[2].style.display = 'none';
    }
})
