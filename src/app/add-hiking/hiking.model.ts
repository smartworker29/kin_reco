export class HikingTrailModel {

    constructor() {
        this.name = '';
        this.description = '';
        this.url = '';
        this.image_urls = {
		'first': 'https://image.shutterstock.com/z/stock-photo-happy-little-boy-and-girl-travel-in-norway-719982943.jpg',
		'second': '',
		'third': '',
		'default': ''
		};
	this.street = '';
	this.city = '';
	this.state = "CA";
	this.zipcode = '';
	this.country = "USA";
	this.length = 0.0;
	this.tags = '';
	this.ratings = {
		'google': 0.0,
		'yelp': 0.0
	};
	this.stroller_friendly = {
		'yes' : false,
		'more_info': ''
	};
	this.bathrooms = {
		'available': false,
		'more_info': ''
	};
	this.parking = {
		'available': false,
		'more_info': ''
	};
	this.entrance_fee = {
		'yes': false,
		'min': 0.0,
		'max': 0.0,
		'more_info': ''
	};
	this.difficulty = {
		'level': '',
		'more_info': ''
	};
	this.carrier = {
		'needed': false,
		'more_info': ''
	};
	this.ada_accessible = {
		'yes': false,
		'more_info': ''
	};
	this.picnicing = {
		'yes': false,
		'more_info': ''
	};
	this.in_park_food = {
		'available': false,
		'more_info': ''
	};
	this.emergency_support = {
		'available': false,
		'more_info': ''
	};
	this.pet_friendly = {
		'yes': false,
		'more_info': ''
	};
	this.nearby_camps = {
		'yes': false,
		'more_info': ''
	};
	this.trail_surface = '';
	this.shade = '';
	this.attractions = '';
	this.tips = '';
	this.water_feature = '';
	this.type = '';
	this.elevation = '';
	this.best_season = '';
	this.trail_image_url = '';
        this.venue_id = this.venue_id <= 0 ? null : this.venue_id;
    }

    id: number;
    name: string;
    description: string;
    url: String;
    venue_id: number;
    image_urls: {
    	first: string,
    	second: string,
    	third: string,
	default: string
    };
    street: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    length: number;
    tags: string;
    ratings: {
    	google: number,
    	yelp: number
    };
    stroller_friendly: {
    	yes: boolean,
    	more_info: string
    };
    bathrooms: {
    	available: boolean,
    	more_info: string
    };
    parking: {
    	available: boolean,
    	more_info: string
    };
    entrance_fee: {
		yes: boolean,
		min: number,
		max: number,
    	more_info: string
    };
    difficulty: {
    	level: string,
    	more_info: string
    };
    carrier: {
    	needed: boolean,
    	more_info: string
    };
    ada_accessible: {
    	yes: boolean,
    	more_info: string
    };
    picnicing: {
    	yes: boolean,
    	more_info: string
    };
    in_park_food: {
    	available: boolean,
    	more_info: string
    };
    emergency_support: {
    	available: boolean,
    	more_info: string
    };
    pet_friendly: {
    	yes: boolean,
    	more_info: string
    };
    nearby_camps: {
    	yes: boolean,
    	more_info: string
    };
    trail_surface: string;
    elevation: string;
    attractions: string;
    tips: string;
    water_feature: string;
    type: string;
    shade: string;
	trail_image_url: string;
	best_season: string
}
