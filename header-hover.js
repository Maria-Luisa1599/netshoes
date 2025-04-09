let mudancaBg = document.getElementById("lupa-img");
let mudancaImg = document.getElementById("teste");

function mudarCorImg(cor, img) {
    mudancaBg.style.background = cor;  
    mudancaImg.src = img;              
}