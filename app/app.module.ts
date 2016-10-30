import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreComponent }  from './store/store.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ StoreComponent ],
  bootstrap:    [ StoreComponent ]
})
export class AppModule { }
