import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "john@xxx.com"
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Doe",
      "emailId": "jane@xxx.com"
    }];
  }

}
