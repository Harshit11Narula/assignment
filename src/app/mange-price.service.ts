import { Injectable } from '@angular/core';
import {details} from "./detail";
@Injectable({
  providedIn: 'root'
})
export class MangePriceService {
  all_data: details[] = new Array();
  constructor() { 
    this.all_data.push(
      new details(
        "20",
        "69",
        "299",
        "1,679",
        ""
      )
    );
    this.all_data.push(
      new details(
        "40",
        "67",
        "599",
        "3,279",
        "Most Popular"
      )
    );
    this.all_data.push(
      new details(
        "60",
        "65",
        "699",
        "4,599",
        ""
      )
    );
    this.all_data.push(
      new details(
        "80",
        "63",
        "799",
        "5,839",
        ""
      )
    );
    this.all_data.push(
      new details(
        "20",
        "79",
        "299",
        "1,879",
        ""
      )
    );
    this.all_data.push(
      new details(
        "40",
        "77",
        "599",
        "3,679",
        ""
      )
    );
    this.all_data.push(
      new details(
        "60",
        "74",
        "699",
        "5,139",
        "Most Popular"
      )
    );
    this.all_data.push(
      new details(
        "80",
        "72",
        "799",
        "6,559",
        ""
      )
    );
    this.all_data.push(
      new details(
        "20",
        "99",
        "299",
        "2,279",
        "Most Popular"
      )
    );
    this.all_data.push(
      new details(
        "40",
        "96",
        "599",
        "4,439",
        ""
      )
    );
    this.all_data.push(
      new details(
        "60",
        "93",
        "699",
        "6,279",
        ""
      )
    );
    this.all_data.push(
      new details(
        "80",
        "90",
        "799",
        "7,999",
        ""
      )
    );
    this.all_data.push(
      new details(
        "20",
        "109",
        "299",
        "2,479",
        "Most Popular"
      )
    );
    this.all_data.push(
      new details(
        "40",
        "106",
        "599",
        "4,839",
        ""
      )
    );
    this.all_data.push(
      new details(
        "60",
        "102",
        "699",
        "6,819",
        ""
      )
    );
    this.all_data.push(
      new details(
        "80",
        "99",
        "799",
        "8,719",
        ""
      )
    );
    this.all_data.push(
      new details(
        "20",
        "129",
        "299",
        "2,879",
        ""
      )
    );
    this.all_data.push(
      new details(
        "40",
        "125",
        "599",
        "5,599",
        "Most Popular"
      )
    );
    this.all_data.push(
      new details(
        "60",
        "121",
        "699",
        "7,959",
        ""
      )
    );
    this.all_data.push(
      new details(
        "80",
        "117",
        "799",
        "10,159",
        ""
      )
    );
  }
  getAllData() {
    return this.all_data;
  }
  getSelectedById(id: number) {
    return this.all_data[id];
  }
}
