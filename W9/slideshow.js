window.onload = function () {
    document.querySelector('h1').innerHTML = "page loaded";
    var image = 0;
    var images = ["images/ryan.webp", "images/actor2.jpeg", "images/actor3.webp", "images/actor5.webp"];
    var btn = document.querySelector(`#slideshow`);


    function changeImage() {
        btn.removeEventListener('click', changeImage);
        image++;
        document.querySelector('#site-image').src = `images/${images[images]}`;

        if (image >= images.length) {
            image = 0;
            document.querySelector('#site-image').src = `images/${images[image]}`
        }
        setTimeout(changeImage, 2000);  
    }
    
        btn.addEventListener(`click`, 
            changeImage);
}


