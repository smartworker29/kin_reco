import { EventConstants } from "@shared/constants/EventConstants";

export class Kid {
    dob: string;
    gender: string;
    id: string;
    age: number;
    interests: string[];
    interest_categories: string[];
    interestsText?: string[];
    interestsChip?: string;
    kid_id: string;
    nick_name: string;
    parent_id: string;
    constructor() {
        this.interests = [];
        this.interest_categories = []

    }

    initInterests() {
        const interests = new EventConstants().PRIMARY_CATEGORY.map((item) => item.name);
        if (this.interests) {
            this.interests.filter((interest) => interests.includes(interest));
        }
    }
}
