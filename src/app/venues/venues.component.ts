import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
  venue_id: string;
  venue: any;
  isLoaded: boolean = true;
  constructor(private route: ActivatedRoute, 
              private http: HttpClient,
              private titleService: Title) { }

  ngOnInit() {
    this.venue_id = this.route.snapshot.params['id'];
    this.get_venue_details();
  }

  get_venue_details() {
    // let url = "https://kin-api.kinparenting.com/venues/" + this.venue_id;
    // const headers = new HttpHeaders()
    //     .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
    // this.http.get(url, { headers: headers, responseType: 'text' }).subscribe(data => {
    //   data = data.replace(/\n/g, "");
    //   data = JSON.parse(data);
    //   this.venue = data["venue"];
    //   this.isLoaded = true;
    //   ga('send', 'venue', {
    //     venueCategory: 'Views',
    //     venueLabel: 'Venue Details',
    //     venueAction: 'View a specific venue page',
    //     venueValue: this.venue_id
    //   });
    // this.titleService.setTitle(this.venue.name);
    // })
    this.venue = {
      "id": 442,
      "name": "The Little Gym of Morgan Hill",
      "url": "http://www.thelittlegym.com/morganhillca",
      "image_url": "https://www.thelittlegym.com/globalassets/corporate-marquee/marquee-become-an-owner.png",
      "price": "",
      "city": "Morgan Hill",
      "state": "CA",
      "personalized": "false",
      "distance": 0
    }
  }

  format_price() {
    if(this.venue.price == "Free" || this.venue.price == "free" || this.venue.price == "") {
      return "Free"
    }
    else {
      return "From $" + this.venue.price;
    }
  }

  maps_redirect() {
    var search_query = this.venue.name + "," + this.venue.city;
    window.open('https://www.google.com/maps?q=' + search_query, '_blank');
  }

  website_redirect() {
    window.open(this.venue.url, '_blank');
  }
}