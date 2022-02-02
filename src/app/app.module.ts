import { NgModule } from "@angular/core";
import { MyAppRootComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { CardBoxComponent } from "./cardBox/cardBox.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [MyAppRootComponent, HeaderComponent, CardComponent,CardBoxComponent],
    bootstrap: [MyAppRootComponent],
    imports: [BrowserModule, CommonModule, FontAwesomeModule]
})
export class MyAppRootModule { }