
import { Component } from "@angular/core";
import { faPenAlt, faPencilRuler, faTractor, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector:'my-app-addcard',
    templateUrl:'./addCard.component.html',
    styleUrls:['./addCard.component.scss']
})
export class AddCardComponent{
    faPenAlt= faPenAlt;
    faTrash = faTrash;

}