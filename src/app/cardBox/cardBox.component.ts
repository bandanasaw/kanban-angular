import { Component, Input } from "@angular/core";
import { faEdit, faFlag, faTasks, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'my-app-cardBox',
    templateUrl: './cardBox.component.html',
    styleUrls: ['./cardBox.component.scss']

})

export class CardBoxComponent {
    @Input() taskInfo: any;
    faTasks = faTasks;
    faTimesCircle = faTimesCircle;
    faFlag = faFlag;
    faEdit = faEdit;
    showCardOptions: boolean = false;
    onclick(e: any): void {

        this.showCardOptions = true;
        e.stopPropagation();
        const event = () => {
            this.showCardOptions = false;
            document.body.removeEventListener('click', event);
        }
        document.body.addEventListener('click', event);

        console.log(e, 'i am clicked');

    }

}