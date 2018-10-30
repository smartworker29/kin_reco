import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event_id: string;
  event: any;
  isLoaded: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.event_id = this.route.snapshot.params['id'];
    this.get_event_details();
  }

  get_event_details() {
    let url = "https://97ebwdbycd.execute-api.us-west-1.amazonaws.com/v1/events/" + this.event_id;
    const headers = new HttpHeaders()
        .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
    this.http.get(url, { headers: headers, responseType: 'text' }).subscribe(data => {
      data = data.replace(/\n/g, "");
      data = JSON.parse(data);
      this.event = data["event"];
      this.isLoaded = true;
    })
  }

  format_time(timeString) {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }

  format_price() {
    if(this.event.price == "Free" || this.event.price == "free" || this.event.price == "") {
      return "Free"
    }
    else {
      return "From $" + this.event.price;
    }
  }

  format_age() {
    if(this.event.min_age == 0 && this.event.max_age == 99) {
      return "Good for all ages";
    }
    else {
      return "Good for " + this.event.min_age + " to " + this.event.max_age + "years";
    } 
  }

  maps_redirect() {
    var search_query = this.event.venue + "," + this.event.street + "," + this.event.city;
    window.location.href= 'https://www.google.com/maps?q=' + search_query;
  }

  event_redirect() {
    window.location.href= this.event.url;
  }
}