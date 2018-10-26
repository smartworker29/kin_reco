import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventGroupComponent } from './event-group/event-group.component';

const routes: Routes = [
  { path: 'event/:id', component: EventComponent },
  { path: 'event-group/:query', component: EventGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
