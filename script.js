const content = document.querySelectorAll('.content');




for (i=0; i < content.length; i++) {

    content[0].addEventListener('click', () => {
        content[0].classList.toggle('active');
    }); 
    content[1].addEventListener('click', () => {
        content[1].classList.toggle('active');
    }); 
    content[2].addEventListener('click', () => {
        content[2].classList.toggle('active');
    }); 
    content[3].addEventListener('click', () => {
        content[3].classList.toggle('active');
    }); 
    content[4].addEventListener('click', () => {
        content[4].classList.toggle('active');
    }); 
}




