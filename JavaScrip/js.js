class pasarmouse {
  constructor(titulo, cuerpo) {
    var estado=1;
    this.titulo = document.querySelector(titulo);
    this.cuerpo = document.querySelector(cuerpo);
      this.titulo.addEventListener("mouseover", () => {
        if(estado==0){
          this.cuerpo.style.display = "inline";
          this.cuerpo.style.display = "table";
        }
      });
      this.cuerpo.addEventListener("mouseover", () => {
        if(estado==0){
          this.cuerpo.style.display = "inline";
          this.cuerpo.style.display = "table";
        }
      });
      this.titulo.addEventListener("mouseout",  () => {
        if(estado==0){
          this.cuerpo.style.display = "none";
        }
      });
      this.cuerpo.addEventListener("mouseout", () => {
        if(estado==0){
          this.cuerpo.style.display = "none";
        }
      });


    


    this.titulo.addEventListener("click", () => {
      if (this.cuerpo.style.display == "none" || estado==0){
        this.cuerpo.style.display = "inline";
        this.cuerpo.style.display = "table";
        estado=1;

        
      }
      else{
        this.cuerpo.style.display = "none"
        estado=0;
      }
    });
    
  }
}
const  ingm= new pasarmouse("#Ningm", "#Dingm");
const  ingi= new pasarmouse("#Ningi", "#Dingi");
const  Java= new pasarmouse("#NJava", "#DJava");
const  JavaScript= new pasarmouse("#NJavaScript", "#DJavaScript");
const  HTML= new pasarmouse("#NHTML", "#DHTML");
const  CSS= new pasarmouse("#NCSS", "#DCSS");
const  Ruby= new pasarmouse("#NRuby", "#DRuby");
const  C= new pasarmouse("#NC", "#DC");
const  Matlab= new pasarmouse("#NMatlab", "#DMatlab");
const  MySQL= new pasarmouse("#NMySQL", "#DMySQL");