import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-group',
  templateUrl: './event-group.component.html',
  styleUrls: ['./event-group.component.css']
})
export class EventGroupComponent implements OnInit {
  event_query: string;
  events;
  isLoaded: boolean = false;
  imagesLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.event_query = this.route.snapshot.params['query'];
    this.get_event_details();
  }

  kin_redirect() {
    window.location.href='http://m.me/kinparenting';
  }

  event_redirect(id) {
    this.router.navigate(['/event', id]);
  }

  onNgMasonryInit() {
    window.setTimeout(() => { this.imagesLoaded = true; }, 1500);
  }

  get_event_details() {
    let url = "https://97ebwdbycd.execute-api.us-west-1.amazonaws.com/v1/events?q=" + this.event_query;
    const headers = new HttpHeaders()
        .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
    this.http.get(url, { headers: headers, responseType: 'text' }).subscribe(data => {
        data = data.replace(/\n/g, "");
        data = JSON.parse(data);
        this.events = data["events"];
        this.isLoaded = true;
    })
  }
}

