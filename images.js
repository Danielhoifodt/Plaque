class Plaque{
    constructor(mm, url){
        this.mm = mm;
        this.url = url;
    }
    calculateMm(){
        if(this.mm>=3 && this.mm<6)
        {
            this.url = "assets/artery_plaque1.jpg";
        }
        else if(this.mm>=6)
        {
            this.url = "assets/artery_plaque2.jpg";
        }
        else
        {
            this.url = "assets/artery_clean.jpg";
        }
        document.getElementById("image").setAttribute("src", this.url);
    }
}
function myImages(){
    let value = document.getElementById("plaque").value;
    console.log(value);
    let plaque = new Plaque(value, "#");
    plaque.calculateMm();
}