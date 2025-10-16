const imagem = document.getElementById('imagem');

function slide1() {
    imagem.src = 'imagens/img1.jpg';
    setTimeout(slide2, 1500);
}
function slide2() {
    imagem.src = 'imagens/img2.webp';
    setTimeout(slide3, 1500);
}
function slide3() {
    imagem.src = 'imagens/img3.webp';
    setTimeout(slide1, 1500);
}

slide1();