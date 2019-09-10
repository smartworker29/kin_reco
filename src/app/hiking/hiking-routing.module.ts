import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HikingTrailComponent } from './hiking.component';
import { EditHikingTrailComponent } from './edit-hiking/edit-hiking.component';
import { HikingTrailsListingComponent } from './hiking-listing/hiking-listing.component';
import { AddHikingTrailComponent } from './add-hiking/add-hiking.component';

const routes: Routes = [
  { path: 'hiking-trails/:id', component: HikingTrailComponent },
  { path: 'edit-hiking/:hikingTrailId', component: EditHikingTrailComponent },
  { path: 'family-friendly-hikes-near-me', component: HikingTrailsListingComponent },
  { path: 'add-hiking', component: AddHikingTrailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikingRoutingModule { }
