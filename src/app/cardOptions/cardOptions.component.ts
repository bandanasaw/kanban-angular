import { Component } from "@angular/core";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
    selector: 'my-app-cardOptions',
    templateUrl: './cardOptions.component.html',
    styleUrls: ['./cardOptions.component.scss']
})
export class CardOptionsComponent {
    faPenAlt = faPenAlt;
    faTrash = faTrashAlt;
    remove() {
        console.log('i am remove buttom clicked');

    }

}