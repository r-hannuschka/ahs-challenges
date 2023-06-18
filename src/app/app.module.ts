import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundModule } from '@app/lib/not-found';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PageNotFoundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Qhg67nk#23!1107
