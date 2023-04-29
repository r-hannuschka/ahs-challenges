import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundModule } from '@app/lib/not-found';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
