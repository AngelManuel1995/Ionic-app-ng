import { Component } from "@angular/core";
import { ReviewService } from "../../app/services/review.service";

@Component({
    selector:"app-review",
    templateUrl:"./review.component.html"
})

export class ReviewComponent{
    
    constructor(private _reviewService:ReviewService){

    }

}