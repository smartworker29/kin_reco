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
  event;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.event_id = this.route.snapshot.params['id'];
    this.get_event_details();
  }

  get_event_details() {
    // let url = "https://97ebwdbycd.execute-api.us-west-1.amazonaws.com/v1/events/" + this.event_id;
    // const headers = new HttpHeaders()
    //     .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
    // this.http.get(url, { headers: headers }).subscribe((data) => {
    //   console.log("Test the data", data);
    // })

    this.event = {
      "event_id": "408",
      "name": "Museum Scavenger Hunt",
      "description": "Explore ancient Egypts fascinating view of the afterlife through our collection of human and animal mummies, canopic jars, and funerary boats and models. Discover colorful and precious jewelry, pre dynastic pottery, glass and alabaster vessels, bronze too",
      "url": "https://egyptianmuseum.org/workshops/scavenger-hunt",
      "image_url": "https://egyptianmuseum.org/assets/img/pageheaders/header-D3-pyramid.jpg",
      "venue_id": "1",
      "venue": "Rosicrucian Egyptian Museum",
      "host": "",
      "email": "",
      "price": 5,
      "contact_number": "408-947-3635",
      "street": "1664 Park Ave.",
      "city": "San Jose",
      "state": "CA",
      "zip_code": "95191",
      "country": "USA",
      "start_date": "2018-09-22",
      "end_date": "2018-09-22",
      "start_time": "12:30:00",
      "end_time": "14:30:00",
      "min_age": 0,
      "max_age": 99,
      "gender_affinity": 0,
      "classifications": [
          {
              "event_id": "408",
              "classifier": "sandhya",
              "classification1": "15",
              "classification2": "0",
              "timestamp": "2018-08-01 21:37:45"
          }
      ],
      "misc": "recurrence\tThis event occurs  monthly,  on the fourth \tSaturday of January, March, May, July, August, October and December.\tsource_url\thttp://www.bayareaparent.com/Events/index.php/name/Museum-Scavenger-Hunt/event/20907/\tformatted_address\t1660 Park Ave, San Jose, CA 95191, USA"
    }
  }

  format_time(timeString) {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }

  format_price(price) {
    if(price == "Free" || price == "free" || price == "") {
      return "Free"
    }
    else {
      return "From $" + price;
    }
  }

  maps_redirect() {
    var search_query = this.event.venue + "," + this.event.street + "," + this.event.city;
    window.location.href='https://www.google.com/maps?q=' + search_query;
  }

}
