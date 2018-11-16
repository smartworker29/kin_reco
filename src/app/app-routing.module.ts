import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventGroupComponent } from './event-group/event-group.component';
import { EventListingComponent } from './event-listing/event-listing.component';

const routes: Routes = [
  { path: 'event/:id', component: EventComponent },
  { path: 'events/:query', component: EventGroupComponent },
  { path: 'events', component: EventListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
