import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { LoaderComponent } from './components/loader/loader.component';

const components = [HeaderComponent, CardsComponent, LoaderComponent];
const modules = [ReactiveFormsModule, FormsModule, RouterModule, CommonModule];
@NgModule({
  declarations: [],
  imports: [...components, ...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
