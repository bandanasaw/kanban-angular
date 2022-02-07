import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  hideCardInputForm: boolean = true;

  @Output() addedCardbox : EventEmitter<any> = new EventEmitter();
  taskDataForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      dueDate: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required)
    });

  addForm() {
   // console.log(this.taskDataForm.value, this.taskDataForm);
    const name = this.taskDataForm.get('name');
    console.log(name, name?.dirty, name?.valid, name?.touched);
    this.addedCardbox.emit(this.taskDataForm.value);
    console.log()

    // console.log(this.taskForm, this.taskForm.value);
    // console.log(this.taskForm.get('name'))
  }
  cancelForm() {
    console.log('i am cancel button clicked')
    this.hideCardInputForm = true;
    this.taskDataForm.reset();

  }
  hideCardInput() {
    this.hideCardInputForm = false;
  }





}
