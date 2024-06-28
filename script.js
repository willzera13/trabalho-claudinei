// seleciona os elementos e poe dentro de uma variavel.
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');
const contadorP = document.getElementById('contador');

// inicia o contador em 1.
let contador = 1;

// funcao para o botão de aumentar
function aumentarContador(){
    contador++;
    contadorP.textContent = contador;
};

// funcao para o botão de diminuir
function diminuirContador() {
  if (contador > 1) {
    contador--;
    contadorP.textContent = contador;
  }
}
//--------------------------------------------------------------------------------------




//------------------------carrossel------------------------------------------------------
function createCarousel(containerSelector, prevBtnId, nextBtnId, boxClass) {
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const boxes = document.querySelectorAll(containerSelector + ' .' + boxClass);
    let currentIndex = 0;

    function showBoxes(startIndex) {
  const totalBoxes = boxes.length;
  const boxesToShow = 4;
  boxes.forEach((box, i) => {
    if (i >= startIndex && i < startIndex + boxesToShow) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

function checkScreenSize() {
  if (window.innerWidth <= 768) {
    showBoxes(currentIndex);
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
  } else {
    showBoxes(currentIndex);
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
  }
}

function updateButtons() {
  prevBtn.style.visibility = (currentIndex > 0) ? "visible" : "hidden";
  nextBtn.style.visibility = (currentIndex + 4 < boxes.length) ? "visible" : "hidden";
}

    checkScreenSize();
    updateButtons();

    prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showBoxes(currentIndex);
    updateButtons();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex + 4 < boxes.length) {
    currentIndex++;
    showBoxes(currentIndex);
    updateButtons();
  }
});

    window.addEventListener("resize", checkScreenSize);
}

createCarousel('', 'prevBtn', 'nextBtn', 'destaqInd');

createCarousel('', 'prevBtn2', 'nextBtn2', 'destaqInd2');

createCarousel('', 'prevBtn3', 'nextBtn3', 'destaqInd3');
//--------------------------------------------------------------------------------------

//imprime o tamanho do tenis que escolher.
function imprimir(btnId){
const numero = document.getElementById(btnId).textContent;
const destino = document.getElementById('destino');
destino.textContent= numero;
}
//--------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------
function validarCEP() {

  const cep = document.getElementById("inputCep").value.trim();
  const numeroLimite = 8;
  const preco = document.getElementById('precoProduto');
  const frete = document.getElementById('frete');
  if (cep.length !== numeroLimite) {

    aviso.textContent = 'O CEP deve ter 8 dígitos!';
    aviso.style.color = 'red';
    preco.textContent = 'R$ 1.999.54'
    frete.style.visibility = 'hidden';

  } else {
aviso.textContent = 'Rua tal nao sei oque, n 67';
aviso.style.color = 'black'
aviso.style.opacity = '90%';
frete.style.visibility = 'visible';
frete.textContent = 'R$ -100,00'
frete.style.color = 'red'
preco.textContent = 'R$ 2.099.54';


  }


}


    // // Função botões proximo/anterior
    // const prevBtn = document.getElementById("prevBtn");
    // const nextBtn = document.getElementById("nextBtn");
    // const boxes = document.querySelectorAll(".destaqInd");
    // let currentIndex = 0;

    // function showBoxes(startIndex) {
    //   const totalBoxes = boxes.length;
    //   const boxesToShow = 4;

    //   boxes.forEach((box, i) => {
    //     if (i >= startIndex && i < startIndex + boxesToShow) {
    //       box.style.display = "block";
    //     } else {
    //       box.style.display = "none";
    //     }
    //   });
    // }

    // function checkScreenSize() {
    //   if (window.innerWidth <= 768) {
    //     showBoxes(currentIndex);
    //     prevBtn.style.visibility = "visible";
    //     nextBtn.style.visibility = "visible";
    //   } else {
    //     showBoxes(currentIndex);
    //     prevBtn.style.visibility = "visible";
    //     nextBtn.style.visibility = "visible";
    //   }
    // }

    // function updateButtons() {
    //   prevBtn.style.visibility = (currentIndex > 0) ? "visible" : "hidden";
    //   nextBtn.style.visibility = (currentIndex + 4 < boxes.length) ? "visible" : "hidden";
    // }

    // checkScreenSize();
    // updateButtons();

    // prevBtn.addEventListener("click", () => {
    //   if (currentIndex > 0) {
    //     currentIndex--;
    //     showBoxes(currentIndex);
    //     updateButtons();
    //   }
    // });

    // nextBtn.addEventListener("click", () => {
    //   if (currentIndex + 4 < boxes.length) {
    //     currentIndex++;
    //     showBoxes(currentIndex);
    //     updateButtons();
    //   }
    // });

    // window.addEventListener("resize", checkScreenSize);

     
