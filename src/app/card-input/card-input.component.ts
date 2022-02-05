import { Component } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  hideCardInputForm: boolean = true;
  addForm() { }
  cancelForm() {
    console.log('i am cancel button clicked')
    this.hideCardInputForm = true;

  }
  hideCardInput() {
    this.hideCardInputForm = false;
  }





}
