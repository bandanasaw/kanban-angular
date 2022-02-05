import { Component } from "@angular/core";
import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector:'my-app-cardOptions',
    templateUrl:'./cardOptions.component.html',
    styleUrls:['./cardOptions.component.scss']
})
export class CardOptionsComponent{
    faPenAlt= faPenAlt;
    faTrash = faTrash;
    remove(){
        console.log('i am remove buttom clicked');

    }

}