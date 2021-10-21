import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 200,
        type: "radialBar"
      },
      
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        },
      },
      labels: []
    };
  
  }

}
