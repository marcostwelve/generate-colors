const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

function generateColors() {
  colorsDiv.innerHTML = "";
  for(let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement("p");
    const clipBoardIcon = document.createElement("i");
    clipBoardIcon.classList.add("bi-clipboard");
    colorName.textContent = color;
    colorName.style.color = color;

    //Evento para copiar os valores hexadecimal das cores
    clipBoardIcon.addEventListener("click", function() {
      copyColor(color);
    });
    
    colorName.appendChild(clipBoardIcon);
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
  
}


function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function copyColor(color) {
  const textTemp = document.createElement("input");
  textTemp.value = color;
  document.body.appendChild(textTemp);
  textTemp.style.display = "none";
  navigator.clipboard.writeText(textTemp.value).then(() => {
    alert(`Cor ${textTemp.value} copiada para area de transferência`);
    document.body.removeChild(textTemp);
  },

  (error) => {
    console.error(`Erro ao copiar a cor ${error}`);
  });
}

generateButton.addEventListener("click", generateColors);

