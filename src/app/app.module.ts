import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTableComponent } from './list-table/list-table.component';
import { FirstComponent } from './lib/menu/first/first.component';
import { FooterComponent } from './lib/menu2/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTableComponent,
    FirstComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
