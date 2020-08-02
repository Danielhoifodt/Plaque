class Plaque {
    constructor(mm, url) {
      this.mm = mm;
      this.url = url;
    }
    calculateMm() {
      const millimeter = this.mm;
  
      // Standardverdi hvis ingen av verdiene er true:
      this.url = "assets/artery_clean.jpg";
  
      millimeter >= 3 &&
        millimeter < 6 &&
        (this.url = "assets/artery_plaque1.jpg");
  
      millimeter >= 6 && (this.url = "assets/artery_plaque2.jpg");
  
      document.getElementById("image").setAttribute("src", this.url);
  
      // Vis bilde når vi har noe å vise
      // Fjern hidden klasse
      document.getElementById("image").classList.remove("hidden");
    }
  }
  function myImages() {
    let value = document.getElementById("plaque").value;
    console.log(value);
    let plaque = new Plaque(value, "#");
    plaque.calculateMm();
  }
  