import { Component, NgModule, OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions, Chart, registerables } from 'chart.js';


@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'CaseStudy';

  serverData!: any;

  Portfolio: string = 'Defensive';
  Investment: number = 100;
  Sce: string = 'Bad';
  Bool: string = 'No';
  Year: number = 10;
  chart2 : any = null;
  expected: number= 0

  constructor(private httpClient: HttpClient) {Chart.register(...registerables);}

  ngOnInit() {
    this.httpClient.get('http://localhost:5000/api').subscribe(data => {
      this.serverData = data ;})
  }
  
  getPlot() {
    if (this.chart2) {
      this.chart2.clear();
          this.chart2.destroy();
          delete this.chart2;
    }
      this.chart2=null;
      var percentage = this.Investment / 100
      var generic_invest = this.serverData[this.Portfolio][this.Sce][this.Bool]
      var inv_data = generic_invest.slice(0,this.Year).map(function(x: any) { return percentage* x; })
     
      this.expected = inv_data[this.Year-1]
      this.chart2 = new Chart('chart', {
        type: "line",
        data: { 
          labels :this.serverData["Portfolio"]["Scenario"]["Market Stress"].slice(0,this.Year),
          datasets: [{data: inv_data,
          borderColor: '#004a93',
          label: 'Allianz Strategy' , 
          fill: true}]},
        })
        
    }    
  }



