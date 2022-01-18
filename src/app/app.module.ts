import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent
  ],
  imports: [ //TODO: Solo se importan otros modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})
export class AppModule { }
