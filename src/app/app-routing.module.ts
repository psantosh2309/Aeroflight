import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AeroComponent } from './aero/aero.component';
import { SignupComponent } from './signup/signup.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AeroFlotComponent } from './aero-flot/aero-flot.component';
import { OverviewComponent } from './overview/overview.component';
import { TailsComponent } from './tails/tails.component';
import { LiveComponent } from './live/live.component';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { TimelineComponent } from './timeline/timeline.component';
import { FlightsComponent } from './flights/flights.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path: "",component:SignupComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"aero", component:AeroComponent},
  {path:"aero-flot",component:AeroFlotComponent},
  {path:"overview", component:OverviewComponent},
  {path:"tails",component:TailsComponent},
  {path:"live", component:LiveComponent},
  {path:"timeline", component:TimelineComponent},
  {path:"flights", component:FlightsComponent},
  {path: "events", component:EventsComponent},
  {path:"**", component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings =[
  SignupComponent,
  LoginComponent,
  DashboardComponent,
  AeroComponent,
  AeroFlotComponent,
  OverviewComponent,
  TailsComponent,
  LiveComponent,
  TimelineComponent,
  FlightsComponent,
  EventsComponent,
  WildcardComponent
]
