import { Component } from "@angular/core";
import { faCoffee, faFlag, faTasks, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector:'my-app-cardBox',
    templateUrl:'./cardBox.component.html',
    styleUrls:['./cardBox.component.scss']

})
export class CardBoxComponent {
    faTasks = faTasks;
    faTimesCircle = faTimesCircle;
    faFlag = faFlag;
    
}