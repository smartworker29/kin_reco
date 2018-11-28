import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  eventForm: FormGroup;
  submitted: boolean = false;
  serverResponse: string;
  showServerResponse: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
    this.submitted = true;
    
    if (this.eventForm.invalid) {
        return;
    }
    
    let url = "https://kin-api.kinparenting.com/events/";
    const headers = new HttpHeaders()
        .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk')
        .set('Content-Type',  'application/json');
    this.http.post(url, JSON.stringify(this.eventForm.value), { headers: headers, responseType: 'text' }).subscribe(response => {
        this.serverResponse = response;
        this.showServerResponse = true;
    })
  }

  onReset() {
    this.createForm();
    this.showServerResponse = false;
    this.submitted = false;
  }

  checkUnicode(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value.indexOf("\\") !== -1 ) {
        return { 'unicode': true };
    }
    return null;
  }

  checkIsNumber(control: AbstractControl): { [key: string]: boolean } | null {
    if (isNaN(control.value)) {
        return { 'number': true };
    }
    return null;
  }

  checkDate(control: AbstractControl): { [key: string]: boolean } | null {
    var date = control.value.split('-');
    if (date.length !== 3 || date[0].length !==4 || date[1].length !==2 || date[2].length !==2) {
        return { 'date': true };
    }
    return null;
  }

  checkTime(control: AbstractControl): { [key: string]: boolean } | null {
    var time = control.value.split(':');
    if (time.length !==3 || time[0].length !==2 || time[1].length !==2 || time[2].length !==2) {
        return { 'time': true };
    }
    return null;
  }

  get f() { return this.eventForm.controls; }

  createForm() {
    this.eventForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        this.checkUnicode
      ]),
      'url': new FormControl('', [
        Validators.required
      ]),
      'image_url': new FormControl('', [
        Validators.required
      ]),
      'zip_code': new FormControl('', [
        Validators.required,
        this.checkIsNumber
      ]),
      'city': new FormControl('', [
        Validators.required
      ]),
      'venue': new FormControl('', [
        Validators.required
      ]),
      'street': new FormControl('', []),
      'price': new FormControl(0, []),
      'start_date': new FormControl('', [
        Validators.required,
        this.checkDate
      ]),
      'end_date': new FormControl('', [
        Validators.required,
        this.checkDate
      ]),
      'start_time': new FormControl('', [
        Validators.required,
        this.checkTime
      ]),
      'end_time': new FormControl('', [
        Validators.required,
        this.checkTime
      ]),
      'description': new FormControl('', [
        Validators.required,
        this.checkUnicode
      ]),
      'min_age': new FormControl(0, []),
      'max_age': new FormControl(99, []),
      'misc': new FormControl('', []),
      'email': new FormControl('', []),
      'contact_number': new FormControl('', [
        this.checkIsNumber
      ]),
      'state': new FormControl('CA', []),
      'host': new FormControl('', []),
      'country': new FormControl('USA', []),
      'gender_affinity': new FormControl(0, [
        Validators.required
      ])
    });
  }
}
