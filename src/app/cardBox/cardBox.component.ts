import { Component, HostBinding, HostListener, Input } from "@angular/core";
import { faEdit, faFlag, faTasks, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'my-app-cardBox',
    templateUrl: './cardBox.component.html',
    styleUrls: ['./cardBox.component.scss']

})

export class CardBoxComponent {
    @Input() taskInfo: any;

    @HostBinding('class.my-app-cardbox-class') myClass: boolean = true;
    

    faTasks = faTasks;
    faTimesCircle = faTimesCircle;
    faFlag = faFlag;
    faEdit = faEdit;
    // buttonDisabled : boolean = true;
    showEditButton: boolean = false;
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

    @HostListener('mouseenter')
    mouseOver(){
        console.log(' I am oon cardbox')
        this.showEditButton = true;
    }

    @HostListener('mouseleave')
    mouseOut(){
        console.log(' I am oon cardbox on out')
        this.showEditButton = false;
    }

}