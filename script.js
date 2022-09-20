const content = document.querySelectorAll('.content');




for (let i in content) {

    content[i].addEventListener('click', () => {
        content[i].classList.toggle('active');
    }); 
}




