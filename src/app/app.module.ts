import { NgModule } from "@angular/core";
import { MyAppRootComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { CardBoxComponent } from "./cardBox/cardBox.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AddCardComponent } from "./Addcard/addCard.component";
import { CardOptionsComponent } from "./cardOptions/cardOptions.component";
import { AddCardFormComponent } from './add-card-form/add-card-form.component';
import { FormsModule } from "@angular/forms";
import { CardInputComponent } from './card-input/card-input.component';

@NgModule({
    declarations: [MyAppRootComponent, HeaderComponent, CardComponent,CardBoxComponent,AddCardComponent,CardOptionsComponent, AddCardFormComponent, CardInputComponent],
    bootstrap: [MyAppRootComponent],
    imports: [BrowserModule, CommonModule, FontAwesomeModule, FormsModule]
})
export class MyAppRootModule { }