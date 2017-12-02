import { Injectable } from "@angular/core";
import { Review }     from "../../app/classes/review";


@Injectable(

)

export class ReviewService{
    
    reviewList:Review[] = [];

    constructor(){

        let review1 = new Review("Tabs", "We can put inside the tabs folder...");
        let review2 = new Review("Service", "We can put inside the tabs folder...");
        let review3 = new Review("app.module", "We can put inside the tabs folder...");
        
        this.reviewList.push(review1);
        this.reviewList.push(review2);
        this.reviewList.push(review3);
    }

}
