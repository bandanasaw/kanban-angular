import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.scss']
})
export class AddCardFormComponent implements OnInit {
  hideAddCardForm: boolean = true;

  @Output() added: EventEmitter<string> = new EventEmitter();
  cardName: any;
  constructor() { }
  addCard(inputRef: any){
    console.log(this.cardName,'i am clicked', inputRef);
    this.added.emit(this.cardName);
  }
  cancelCard(){
    // this.cardName = 'tinkey';
    console.log(this.cardName,'i am cancel button');
    this.hideAddCardForm = false;
  
  }
  hideAddCard(){
    this.hideAddCardForm = true;

  }
    
  

  ngOnInit(): void {
  }

}
