import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventGroupComponent } from './event-group/event-group.component';
import { EventListingComponent } from './event-listing/event-listing.component';

const routes: Routes = [
  { path: 'event/:id', component: EventComponent },
  { path: 'event-group/:query', component: EventGroupComponent },
  { path: 'event-listing', component: EventListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
