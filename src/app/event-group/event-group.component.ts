import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-group',
  templateUrl: './event-group.component.html',
  styleUrls: ['./event-group.component.css']
})
export class EventGroupComponent implements OnInit {
  event_query: string;
  events;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.event_query = this.route.snapshot.params['query'];
    this.get_event_details();
  }

  kin_redirect() {
    window.location.href='https://www.google.com';
  }

  get_event_details() {
    // let url = "https://97ebwdbycd.execute-api.us-west-1.amazonaws.com/v1/events/" + this.event_id;
    // const headers = new HttpHeaders()
    //     .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
    // this.http.get(url, { headers: headers }).subscribe((data) => {
    //   console.log("Test the data", data);
    // })

    this.events = [
      {
          "id": 712,
          "name": "Family Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Sat, Oct 20",
          "day_abbr": "Sat",
          "day": 20,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=712&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 713,
          "name": "Little Ones Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Mon, Oct 22",
          "day_abbr": "Mon",
          "day": 22,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=713&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 714,
          "name": "Baby Lapsit Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Tue, Oct 23",
          "day_abbr": "Tue",
          "day": 23,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=714&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 715,
          "name": "Stories for Ones",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Tue, Oct 23",
          "day_abbr": "Tue",
          "day": 23,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=715&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 716,
          "name": "Terrific 2's and 3's Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Wed, Oct 24",
          "day_abbr": "Wed",
          "day": 24,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=716&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 717,
          "name": "Fantastic 4's and 5's Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Thu, Oct 25",
          "day_abbr": "Thu",
          "day": 25,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=717&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 718,
          "name": "Night Owl Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Thu, Oct 25",
          "day_abbr": "Thu",
          "day": 25,
          "month_abbr": "Oct",
          "start_time": "7:00PM",
          "end_time": "7:25PM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=718&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 719,
          "name": "Family Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Sat, Oct 27",
          "day_abbr": "Sat",
          "day": 27,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=719&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 869,
          "name": "Halloween Face Painting, Games, & Crafts!",
          "url": "https://www.facebook.com/events/1966227370336999/",
          "image_url": "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/41755137_2183968985011115_4313573180225617920_n.jpg?_nc_cat=106&oh=929ad5dabd5fa4266e4e8667bf8e4a8e&oe=5C468FE2",
          "price": "Free",
          "venue": "Bookasaurus",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Sun, Oct 28",
          "day_abbr": "Sun",
          "day": 28,
          "month_abbr": "Oct",
          "start_time": "12:00AM",
          "end_time": "12:00AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=869&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 720,
          "name": "Little Ones Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Mon, Oct 29",
          "day_abbr": "Mon",
          "day": 29,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=720&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 721,
          "name": "Baby Lapsit Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Tue, Oct 30",
          "day_abbr": "Tue",
          "day": 30,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=721&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 722,
          "name": "Stories for Ones",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Tue, Oct 30",
          "day_abbr": "Tue",
          "day": 30,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=722&parent_id=1",
          "personalized": "false",
          "distance": 1
      },
      {
          "id": 723,
          "name": "Terrific 2's and 3's Storytime",
          "url": "https://sunnyvale.ca.gov/cals/",
          "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
          "price": "Free",
          "venue": "Sunnyvale Library",
          "city": "Sunnyvale",
          "state": "CA",
          "dates": "Wed, Oct 31",
          "day_abbr": "Wed",
          "day": 31,
          "month_abbr": "Oct",
          "start_time": "11:00AM",
          "end_time": "11:25AM",
          "calendar_url": "http://ec2-18-144-9-114.us-west-1.compute.amazonaws.com/cal_redirect/?event_id=723&parent_id=1",
          "personalized": "false",
          "distance": 1
      }
    ]
  }

}

