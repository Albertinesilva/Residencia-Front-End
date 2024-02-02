import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikipediaComponent } from './componentes/wikipedia/wikipedia.component';
import { UescComponent } from './componentes/uesc/uesc.component';
import { JreaderComponent } from './componentes/jreader/jreader.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaComponent,
    UescComponent,
    JreaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }