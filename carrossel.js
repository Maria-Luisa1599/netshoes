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

  if (translateValue <= -80) {

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

let index4 = 0;
const carrossel4Container = document.querySelector('.carrossel4'); 
const totalItems4 = document.querySelectorAll('.carrossel4-container').length;
const itemWidth4 = 10;

function atualizarCarrossel4() {
  const translateValue = -(index4 * itemWidth4);

  carrossel4Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -70) {

    index4 = 0;
    carrossel4Container.style.transition = 'none';
    carrossel4Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel4Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem4(direcao) {
  index4 = (index4 + direcao + totalItems4) % totalItems4;
  atualizarCarrossel4();
}

let index5 = 0;
const carrossel5Container = document.querySelector('.carrossel5'); 
const totalItems5 = document.querySelectorAll('.carrossel5-container').length;
const itemWidth5 = 30;

function atualizarCarrossel5() {
  const translateValue = -(index5 * itemWidth5);

  carrossel5Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -50) {

    index5 = 0;
    carrossel5Container.style.transition = 'none';
    carrossel5Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel5Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem5(direcao) {
  index5 = (index5 + direcao + totalItems5) % totalItems5;
  atualizarCarrossel5();
}


let index6 = 0;
const carrossel6Container = document.querySelector('.carrossel6'); 
const totalItems6 = document.querySelectorAll('.carrossel6-container').length;
const itemWidth6 = 50;

function atualizarCarrossel6() {
  const translateValue = -(index6 * itemWidth6);

  carrossel6Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -300) {

    index6 = 0;
    carrossel6Container.style.transition = 'none';
    carrossel6Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel6Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem6(direcao) {
  index6 = (index6 + direcao + totalItems6) % totalItems6;
  atualizarCarrossel6();
}

let index7 = 0;
const carrossel7Container = document.querySelector('.carrossel7'); 
const totalItems7 = document.querySelectorAll('.carrossel7-container').length;
const itemWidth7 = 10;

function atualizarCarrossel7() {
  const translateValue = -(index7 * itemWidth7);

  carrossel7Container.style.transform = `translateX(${translateValue}%)`;

  if (translateValue <= -50) {

    index7 = 0;
    carrossel7Container.style.transition = 'none';
    carrossel7Container.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carrossel7Container.style.transition = 'transform 0.5s ease';
    }, 100);
  }
}

function mudarImagem7(direcao) {
  index7 = (index7 + direcao + totalItems7) % totalItems7;
  atualizarCarrossel7();
}