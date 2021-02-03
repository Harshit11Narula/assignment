import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { details } from '../detail';
import { MangePriceService } from "../mange-price.service";
import {MatDialog} from '@angular/material/dialog';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price: number=0;
  data: details[] = new Array();

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public manageData: MangePriceService,
    public dialog: MatDialog
  ) { 
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["price"]);
      this.price = parseInt(params["price"]);
      let i = (this.price / 100 - 1)*4;
      this.data.length = 0;
      this.data.push(this.manageData.getSelectedById(i++));
      this.data.push(this.manageData.getSelectedById(i++));
      this.data.push(this.manageData.getSelectedById(i++));
      this.data.push(this.manageData.getSelectedById(i++));
    });
  }
  eventHandler(p:Number){
    this.router.navigateByUrl("/home/"+p);
  }  
  openDialog(ele:any) {
    const dialogRef = this.dialog.open(DialogDetailsComponent,{width: '60%',height: '90%',data: {dataKey: ele}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
