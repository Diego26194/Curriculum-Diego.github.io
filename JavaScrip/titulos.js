class HideOnHeaderClick {
  constructor(headerSelector, paragraphSelector) {
    // Guardar los selectores de los elementos como propiedades de la instancia de la clase
    this.header = document.querySelector(headerSelector);
    this.paragraph = document.querySelector(paragraphSelector);

    // Agregar un event listener al elemento "header" para detectar cuando se hace clic en él

    this.header.addEventListener("click", () => {
      if (this.paragraph.style.display == "none"){
        this.paragraph.style.display = "inline";
        this.paragraph.style.display = "table";

        
      }
      else{
        this.paragraph.style.display = "none"
      }
    });
  }
}

// Crear una instancia de la clase "HideOnHeaderClick"
const n1 = new HideOnHeaderClick("#ccc", "#ppp");
const n2 = new HideOnHeaderClick("#Nggg", "#Dggg");