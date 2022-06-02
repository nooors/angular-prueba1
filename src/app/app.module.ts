import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolarSystemComponentComponent } from './solar-system-component/solar-system-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
