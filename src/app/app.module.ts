import { NgModule } from "@angular/core";
import { MyAppRootComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MyAppRootComponent, HeaderComponent, CardComponent],
    bootstrap: [MyAppRootComponent],
    imports: [BrowserModule, CommonModule]
})
export class MyAppRootModule { }