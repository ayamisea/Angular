import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {

  canvas: any;
  ctx: any;
  data:any;
  
  constructor(private chartService:ChartService) { }

  ngOnInit(): void {
    this.createChartJS('barChart','bar');
    this.createChartJS('lineChart','line');
    this.createChartJS('pieChart','pie');
  }

  private createChartJS(eID:string,type:string) {
    this.canvas = document.getElementById(eID);
    this.ctx = this.canvas.getContext('2d');
    this.data = this.chartService.getData("ChartJS",type);
    let chart = new Chart(this.ctx, this.data);
  }
  
}
