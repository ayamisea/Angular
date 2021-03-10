import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../chart.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {
  
  constructor(private chartService:ChartService) { }

  ngOnInit(): void {
    
  }
  private createD3JS(){
    
  }

}
