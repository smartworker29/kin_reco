import { Component, OnInit } from '@angular/core';
import { UserSearch } from '../venue.model';
import { EditVenueService } from './edit-venue.service';
import { Router, ActivatedRoute } from '@angular/router';

import { VenueConstants, VenueErrorMessage } from '../../shared/constants/VenueConstants';
import { ValidationRules } from '../../shared/utils/ValidationRules';
import { AuthService } from '@shared/service/auth.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {
  public venueConstatnts = new VenueConstants();
  public venueErrorMessage = new VenueErrorMessage();
  public userSearch: any;
  public validationRules = new ValidationRules();
  public jsonMiscData: String;
  public miscData: any;
  public isUpdateShow = false;
  public primary_cat = this.venueConstatnts.PRIMARY_CATEGORY_DATA_ENTRY;
  public secondary_cat;
  public errorMessage: String;
  public isErrorVisible: Boolean;
  public parking: String;
  public rating: number;
  public tips_for_parent: string;
  public edit_page_venue_id: any;
  // public campConstants :any;
  public isAuthenticated$: Observable<boolean>;
  isLogedin = false;



  constructor(private editVenue_service: EditVenueService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.userSearch = new UserSearch();
    this.parking = '';
    this.rating = 0;
    this.tips_for_parent = '';
  }

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isAuthenticated$.subscribe(data => {
      this.isLogedin = data;
      this.authService.setAuth(this.isLogedin);
    });
    this.route.params.subscribe(params => {
      const venue_id = params['venueId'];
      this.edit_page_venue_id = venue_id;
      this.get_venue_data(venue_id);
    });
  }

  get_venue_data(venue_id: number) {
    if (venue_id !== undefined) {
      this.editVenue_service.get_venue_by_id(venue_id).subscribe(data => {
        if (data['venue'] !== undefined) {
          this.userSearch = data['venue'];
          const temp_cat = this.userSearch.category;
          this.userSearch.category = this.get_cat_by_key(temp_cat[0]);
          if (this.userSearch.category === 50000) {
            this.secondary_cat = this.venueConstatnts.CLASSES_CATEGORIES;
          } else {
            this.secondary_cat = this.venueConstatnts.SECONDARY_CATEGORY;
          }
          this.userSearch.perm_close = this.userSearch.perm_closed == true ? '1' : '0';
          this.userSearch.category_sec = this.userSearch.category_sec ?
            this.get_cat_by_key(this.userSearch.category_sec[0]) : '';
          this.parking = this.userSearch.misc.parking === '' ? '' : this.userSearch.misc.parking;
          this.tips_for_parent = this.userSearch.misc.tips_for_parent === '' ? '' : this.userSearch.misc.tips_for_parent;
          this.rating = this.userSearch.misc.rating;
          this.jsonMiscData = JSON.stringify(this.userSearch.misc);
          this.miscData = this.userSearch.misc;
        }
      }, error => {
        this.isErrorVisible = true;
        this.errorMessage = error.error.error;
        // alert(this.venueErrorMessage.GET_DATA_ERROR);
      });
    }
  }

  update_venue(this) {
    this.userSearch.misc.parking = this.parking;
    this.userSearch.misc.rating = this.rating;
    this.userSearch.misc.tips_for_parent = this.tips_for_parent;
    const validation_response = this.validate_update_venue_fields(this);

    if (validation_response === true) {

      const api_input = {
        input: this.userSearch
      };
      this.userSearch.perm_close = this.userSearch.perm_close === true;
      this.editVenue_service.update_venue(api_input)
        .subscribe(data => {
          if (data !== undefined && data.status === true) {
            this.userSearch.perm_close = this.userSearch.perm_close === true ? '1' : '0';
            this.isErrorVisible = true;
            this.errorMessage = 'Data has updated successfully!!!';

          } else {
            alert(JSON.stringify(data.msg));
          }
        }, error => {
          this.isErrorVisible = true;
          this.errorMessage = 'Something went wrong';
        });
    } else {
      this.isErrorVisible = true;
      this.errorMessage = validation_response;
    }
  }

  validate_update_venue_fields(this) {
    const user_search = this.userSearch;
    const basic_fields_validation = this.validationRules.validate_basic_venue_fields(user_search);

    if (basic_fields_validation !== true) {
      return basic_fields_validation;
    } else if (user_search.image_url === undefined || user_search.image_url.trim().length === 0) {
      return 'image_url  ' + this.venueErrorMessage.NOT_EMPTY;
    } else if (user_search.street === undefined || user_search.street.trim().length === 0) {
      return 'street  ' + this.venueErrorMessage.NOT_EMPTY;
    } else if (user_search.zip_code === undefined || user_search.zip_code.trim().length === 0) {
      return 'zip_code  ' + this.venueErrorMessage.NOT_EMPTY;
    } else if (user_search.street === undefined || user_search.street.trim().length === 0) {
      return 'street  ' + this.venueErrorMessage.NOT_EMPTY;
    } else if (this.validationRules.validate_url(user_search.image_url) === false) {
      return 'image_URL:  ' + this.venueErrorMessage.VALID_URL;
    } else if (this.validationRules.validate_url(user_search.url) === false) {
      return 'URL:  ' + this.venueErrorMessage.VALID_URL;
    } else if (user_search.email.length > 0 && this.validationRules.validate_email(user_search.email) === false) {
      return 'email:  ' + this.venueErrorMessage.VALID_EMAIL;
    } else if (this.validationRules.validate_us_zip_code(user_search.zip_code) === false) {
      return 'zip_code :  ' + this.venueErrorMessage.VALID_ZIP_CODE;
    } else if ((user_search.misc.rating !== undefined && (user_search.misc.rating > 0)) &&
      this.validationRules.validate_float_value(user_search.misc.rating) === false) {
      return 'rating :  ' + this.venueErrorMessage.VALIDATE_RATING;
    } else if ((user_search.contact_number !== undefined && (user_search.contact_number.length > 0)) &&
      this.validationRules.validate_contact_no(user_search.contact_number) === false) {
      return 'contact no :  ' + this.venueErrorMessage.VALIDATE_CONTACT_NO;
    } else if ((user_search.misc.parking !== undefined && (user_search.misc.parking.length > 0)) &&
      this.validationRules.validate_text_length(user_search.misc.parking) === false) {
      return 'parking: ' + this.venueErrorMessage.LENGTH_IN_BETWEEN + ' ' + this.venueConstatnts.TEXT_MIN_LENGTH + ' & ' +
        this.venueConstatnts.TEXT_MAX_LENGTH;
    } else if ((user_search.perm_close !== undefined && user_search.perm_close in this.venueConstatnts.PERM_CLOSE === false)) {
      return 'Permanently Close: ' + this.venueErrorMessage.VALIDATE_PERM_CLOSE;
    } else if ((user_search.price !== undefined && this.validationRules.validate_price(user_search.price) === false)) {
      return 'Price : ' + this.venueErrorMessage.VALIDATE_PRICE;
    } else {
      return true;
    }
  }

  get_cat_by_key(cat_string: string) {
    const primary_cat_length = this.primary_cat.length;
    for (let count = 0; count < primary_cat_length; count++) {
      if (this.primary_cat[count]['name'] === cat_string) {
        return this.primary_cat[count]['id'];
      }
    }
    const secondary_cat_length = this.secondary_cat.length;
    for (let count = 0; count < secondary_cat_length; count++) {
      if (this.secondary_cat[count]['name'] === cat_string) {
        return this.secondary_cat[count]['id'];
      }
    }
  }

  refreshSecondaryCategory() {
    if (this.userSearch.category === 50000) {
      this.secondary_cat = this.venueConstatnts.CLASSES_CATEGORIES;
    } else {
      this.secondary_cat = this.venueConstatnts.SECONDARY_CATEGORY;
    }
  }

  closeErrorBox() {
    this.isErrorVisible = false;
  }

  reset_venue(this) {
    const resetUserSearch = new UserSearch();
    this.jsonMiscData = JSON.stringify(this.userSearch.misc);
    resetUserSearch.name = this.userSearch.name;
    resetUserSearch.city = this.userSearch.city;
    resetUserSearch.state = this.userSearch.state;
    this.rating = 0;
    this.parking = '';
    this.tips_for_parent = '';
    this.userSearch = resetUserSearch;
  }

  previous_venue() {
    this.edit_page_venue_id = parseInt(this.edit_page_venue_id) - 1;
    if (this.edit_page_venue_id !== undefined && this.edit_page_venue_id > 0) {
      this.router.navigate(['/edit-venue/' + this.edit_page_venue_id]);
    } else {
      this.isErrorVisible = true;
      this.errorMessage = this.venueErrorMessage.VENUE_ID_SHOULD_GREATER_ZERO;
    }
  }

  next_venue() {
    this.edit_page_venue_id = parseInt(this.edit_page_venue_id) + 1;

    if (this.edit_page_venue_id !== undefined && this.edit_page_venue_id > 0) {
      this.router.navigate(['/edit-venue/' + this.edit_page_venue_id]);
    } else {
      this.isErrorVisible = true;
      this.errorMessage = this.venueErrorMessage.VENUE_ID_SHOULD_GREATER_ZERO;
    }
  }
}
