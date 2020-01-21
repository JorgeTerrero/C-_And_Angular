import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './Value/Value.component';
import {HttpClientModule} from '@angular/common/http';
import { ValueService } from './Service/value.service';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [ValueService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
