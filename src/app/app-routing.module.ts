import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventGroupComponent } from './event-group/event-group.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'event/:id', component: EventComponent },
  { path: 'events/:query', component: EventGroupComponent },
  { path: 'events', component: EventListingComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
