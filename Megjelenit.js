class jovoevcelokMegjelenit{
    constructor(jovoevcelok, jovo){   /* MEgjeleníti az adattagokat */
         this.jovoevcelok = jovoevcelok;
         this.jovo = jovo;
         let text = this.htmlOsszeallit(jovoevcelok);
         this.jovo.html(text);
    }

htmlOsszeallit(){
    let text = "<ul>";
    for (let i = 0; i < this.jovoevcelok.length; i++) {
      const element = this.jovoevcelok[i];
      text +=  `<li> ${element} </li>`;
    }
    text += "</ul>";
    return text;
  }
};

export default jovoevcelokMegjelenit;