import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { RadialChartComponent } from './radial-chart/radial-chart.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { TableBlockComponent } from './table-block/table-block.component';
import { BasicGraphComponent } from './basic-graph/basic-graph.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RadialChartComponent,
    CircleChartComponent,
    TableBlockComponent,
    BasicGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
