import { Component, Input } from "@angular/core";

@Component({
    selector:'my-app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.scss']
})
export class CardComponent{
    @Input() name: any;
}