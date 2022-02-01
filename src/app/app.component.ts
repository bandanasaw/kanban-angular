import { Component } from "@angular/core";

@Component({
    selector: 'my-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class MyAppRootComponent {
    cards: Array<string> = ['New Task', 'On Hold', 'In Progress', 'Done'];
}