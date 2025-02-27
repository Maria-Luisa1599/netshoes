// let index = 0; // Índice da imagem atual
// const items = document.querySelectorAll('.carrossel-container'); // Seleciona todos os itens do carrossel
// const totalItems = items.length; // Total de imagens no carrossel

// let index2 = 0;
// const items2 = document.querySelectorAll('.carrossel2-container');
// const totalItems2 = items2.length; 

// let index3 = 0;
// const items3 = document.querySelectorAll('.carrossel3-container');
// const totalItems3 = items3.length; 

// // Função para mudar a imagem
// function mudarImagem(direcao) {
//   // Atualiza o índice com base na direção
//   index = (index + direcao + totalItems) % totalItems; // Garante que o índice não saia do intervalo

//   // Move o carrossel para a posição da imagem desejada
//   const container = document.querySelector('.carrossel');
//   container.style.transform = `translateX(-${index * 30}%)`;
// }

// function mudarImagem2(direcao) {

//   index2 = (index2 + direcao + totalItems2) % totalItems2;

//   const container = document.querySelector('.carrossel2');
//   container.style.transform = `translateX(-${index2 * 10}%)`;
// }

// function mudarImagem3(direcao) {

//   index3 = (index3 + direcao + totalItems3) % totalItems3;

//   const container = document.querySelector('.carrossel3');
//   container.style.transform = `translateX(-${index3 * 10}%)`;
// }

let index = 0;
const carrosselContainer = document.querySelector('.carrossel'); 
const totalItems = document.querySelectorAll('.carrossel-container').length;
const itemWidth = 100;

function atualizarCarrossel() {
  const translateValue = -(index * itemWidth);

  carrosselContainer.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -410) {

    index = 0;
    carrosselContainer.style.transition = 'none';
    carrosselContainer.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrosselContainer.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem(direcao) {
  index = (index + direcao + totalItems) % totalItems;
  atualizarCarrossel();
}



let index2 = 0;
const carrossel2Container = document.querySelector('.carrossel2'); 
const totalItems2 = document.querySelectorAll('.carrossel2-container').length;
const itemWidth2 = 10;

function atualizarCarrossel2() {
  const translateValue = -(index2 * itemWidth2);

  carrossel2Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -15) {

    index2 = 0;
    carrossel2Container.style.transition = 'none';
    carrossel2Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel2Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem2(direcao) {
  index2 = (index2 + direcao + totalItems2) % totalItems2;
  atualizarCarrossel2();
}


let index3 = 0;
const carrossel3Container = document.querySelector('.carrossel3'); 
const totalItems3 = document.querySelectorAll('.carrossel3-container').length;
const itemWidth3 = 10;

function atualizarCarrossel3() {
  const translateValue = -(index3 * itemWidth3);

  carrossel3Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -50) {

    index3 = 0;
    carrossel3Container.style.transition = 'none';
    carrossel3Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel3Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem3(direcao) {
  index3 = (index3 + direcao + totalItems3) % totalItems3;
  atualizarCarrossel3();
}