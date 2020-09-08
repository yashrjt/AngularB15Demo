import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const movieid= this.route.snapshot.params.movieid
    console.log("MoviedetailComponent -> ngOnInit -> movieid", movieid)
   // console.log("MoviedetailComponent -> ngOnInit -> this.route.snapshot", this.route.snapshot)
  }

}
