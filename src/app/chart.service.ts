import { Injectable } from '@angular/core';
import { pieChartData , barChartData , lineChartData ,pieD3Date} from './data';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getData(name:string,type:string,):any {
    if(name === "ChartJS"){
      switch(type){
        case "pie":{
          return pieChartData;
        }
        case "bar":{
          return barChartData;
        }
        case "line":{
          return lineChartData;
        }
      }

    }
    else if(name === "D3JS"){
      switch(type){
        case "pie":{
          return pieD3Date;
        }
      }
    }
  }
}
