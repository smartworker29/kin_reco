import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masonsry-view',
  templateUrl: './masonsry-view.component.html',
  styleUrls: ['./masonsry-view.component.css']
})
export class MasonsryViewComponent implements OnInit {
  @Input() events;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  event_redirect(id) {
    this.router.navigate(['/event', id]);
  }
}
