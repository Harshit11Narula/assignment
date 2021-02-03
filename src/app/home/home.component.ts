import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  eventHandler(p:Number){
    this.router.navigateByUrl("/home/"+p);
  }
  

}