document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu');
    var list = document.querySelector('.list');

    menuIcon.addEventListener('click', function() {
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    });

    var button = document.getElementById('loginbtn');
    button.addEventListener('click' , function(e){
        window.location.href = 'Login.html';
})

    var explore = document.getElementById('explore-everywhere');
    var aboutus = document.getElementById('about-us');
    var contactus = document.getElementById('contact-us');

    explore.addEventListener('click' , function(e){
        window.location.href = 'flightGallery.html' ;
    })

    aboutus.addEventListener('click' , function(e){
        window.location.href = 'about.html' ;
    })

    contactus.addEventListener('click' , function(e){
        window.location.href = 'Contact.html' ;
    })

    var button = document.getElementById('searchflights');
    button.addEventListener('click' , function(){
        window.location.href = 'flights.html';
    })
});