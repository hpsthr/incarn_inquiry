import 'regenerator-runtime/runtime';
import {delForm} from "./delForm.js"

const del = document.querySelectorAll(".delete")

if(del){
    
    del.forEach(el => {
        el.addEventListener("click", (el) => {
            const {formId} = el.target.dataset
            console.log(formId);
            delForm(formId)
        })
    }) 
}

