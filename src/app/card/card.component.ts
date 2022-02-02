import { Component, Input } from "@angular/core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


@Component({
    selector: 'my-app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() name: any;
    @Input() tasks: any[] = [];

    faEllipsisH = faEllipsisH;
    showAddCard: boolean = false;
    onClick(e: any): void {
        this.showAddCard = true;
        e.stopPropagation();
        const event = () => {
            this.showAddCard = false;
            document.body.removeEventListener('click', event);
        }
        document.body.addEventListener('click', event);
    }
}