class Elem{

    constructor(szuloElem){
        this.szuloElem=szuloElem;
        this.#htmlOsszeallit()
        this.divElem=this.szuloElem.children("div:last-child") //ekkor csak egyet fogok meg
        this.pElem=this.divElem.children("p")
        console.log(this.divElem)
        console.log(this.pElem)
        this.divElem.on("click", ()=>{
           this.#esemenyTrigger("esemenyKivalaszt")
           //this.setErtek("X");
        });
    }
    setErtek(ertek){
        this.pElem.html(ertek)
    }
    #htmlOsszeallit(){
        let txt="<div class='elem'> <p></p></div>"
        this.szuloElem.append(txt)
    }
    /*Saját esemény- Az osztály tud elmondani magáról dolgokat, infokat ad át. Event!*/
    #esemenyTrigger(esemenyNev){
    const esemeny = new CustomEvent(esemenyNev,{detail:this})
    window.dispatchEvent(esemeny);
    }
}
export default Elem;