import { jovoevcelok }  from "./adat.js";
import jovoevcelokMegjelenit from "./megjelenit.js";

$(function() {
    const jovo = $(".tartalom"); 
    new jovoevcelokMegjelenit(jovoevcelok,jovo)
  });



