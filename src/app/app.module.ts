import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myRoutings } from './app-routing.module';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays";


@NgModule({
  declarations: [
    AppComponent,
    myRoutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjpYNz_AmjMM1dIg5BA0y9mLJt71GMuPo',
      libraries: ['places', 'drawing', 'geometry']
    }),
    AgmOverlays

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
