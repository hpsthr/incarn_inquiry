
import axios from "axios";
import { showAlert } from "./alert";


export const delForm =  async (id) => {
    console.log(id);
        const res = await axios({
            method:"DELETE",
            url:`/delete/${id}`,
            data:id
        })
        
        if(res.data.status === "success") {
           showAlert("success", " Deleted ")
           window.setTimeout(
            window.location.reload(true), 7000
           )
           
        }
        
    
}