import { AddCampService } from './../add-camp/add-camp.service';
import { CampModel } from './../add-camp/camp.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UrlConstants} from '../constants/UrlConstants';
import {CampConstants} from '../constants/CampConstants';
import {ValidationRules} from '../utils/ValidationRules';


@Component({
  selector: 'app-edit-camp',
  templateUrl: './edit-camp.component.html',
  styleUrls: ['./edit-camp.component.css']
})
export class EditCampComponent implements OnInit {
  public edit_page_camp_id: any;
  public  camp_id: any;
  public URLConstatnts = new UrlConstants();
  public campModel: any;
  public categoryList: any;
  public campConstants: any;
  public cat_id: number;
  public cat_name: string;
  public showError: Boolean;
  public camp_error: any;
  public validationRules: any;

    constructor(private addCampService: AddCampService, private route: ActivatedRoute,
      private router: Router, private  http:  HttpClient) {
      this.campModel = new CampModel();
      this.campConstants = new CampConstants();
      this.validationRules = new ValidationRules();
      this.categoryList = this.campConstants.CAMP_CATEGORY;
      this.showError = false;
      this.cat_name = '';
      this.camp_error = [];
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.camp_id = params['campId'];
        this.edit_page_camp_id = this.camp_id;
        this.campModel = new CampModel();
        this.get_camp_details();
    });
}

get_camp_details() {
  const url = this.URLConstatnts.API_URL + 'camps/' + this.camp_id + '/';

  const headers = new HttpHeaders()
      .set('x-api-key', 'seDqmi1mqn25insmLa0NF404jcDUi79saFHylHVk');
      this.http.get(url, { headers: headers, responseType: 'text' }).subscribe(data => {
        data = data.replace(/\n/g, '');
        data = JSON.parse(data);
        if (data['status']) {
          this.campModel = data['data']['0'];
          this.campModel.category = this.campModel.category;

      } else {
        alert('No camp information available for now');
      }
    });

}

reset_camp(this) {
  const resetCampModel = new CampModel();

  this.campModel = resetCampModel;
}

previous_camp() {
  this.edit_page_camp_id = parseInt(this.camp_id) - 1;
  if (this.edit_page_camp_id !== undefined  && this.camp_id > 0) {
      this.router.navigate(['/edit-camp/' + this.edit_page_camp_id ]);
  } else {
    alert('camp_id should be greater than zero');
  }
}

next_camp() {
  this.edit_page_camp_id = parseInt(this.camp_id) + 1;

  if (this.edit_page_camp_id !== undefined && this.camp_id > 0 ) {
      this.router.navigate(['/edit-camp/' + this.edit_page_camp_id ]);
  } else {
     alert('camp_id should be greater than zero');
  }
}

set_cat_name(cat_obj){
  this.cat_name = cat_obj;
}
update_camp() {
  this.campModel.category = this.cat_name;
  this.campModel.max_age = this.campModel.max_age ? this.campModel.max_age : 0;
  this.campModel.min_age = this.campModel.min_age ? this.campModel.min_age : 0;
  let final_error = [];
    const api_input = {
      'camps_data' : this.campModel
    };
    this.addCampService.update_camp(api_input).subscribe(data => {
      if (data['status'] === true) {
        this.showError = false;
        alert(data['msg']);
      } else {
        this.showError = true;
        this.camp_error.push(data['msg']);
      }
    }, error => {
      this.camp_error = [];
      this.showError = true;
      const server_error  = error.error.error;
      for (const error_key in server_error) {
        const error_msg = server_error[error_key][0];
        this.camp_error.push(error_key + ' :' + error_msg);
      }
    });
  
}
}