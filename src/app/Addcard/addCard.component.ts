import { Component } from "@angular/core";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'my-app-addcard',
    templateUrl: './addCard.component.html',
    styleUrls: ['./addCard.component.scss']
})
export class AddCardComponent {
    faPenAlt = faPenAlt;
    faTrash =  faTrashAlt;

    remove() {
        console.log('i am remove card');
    }

}