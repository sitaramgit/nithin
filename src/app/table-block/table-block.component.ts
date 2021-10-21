import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: ['./table-block.component.css']
})
export class TableBlockComponent implements OnInit {
  public tableData = [
    {
      applicationId: 500103,
      name: 'AGE',      
    },
    {
      applicationId: 500104,
      name: 'GENDER',      
    },
    {
      applicationId: 500105,
      name: 'GENDER',      
    },
    {
      applicationId: 500103,
      name: 'AGE',      
    },
    {
      applicationId: 500106,
      name: 'GENDER',      
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
