import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    })
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    })
  }

  updateEmployee(id: number | undefined) {
    this.router.navigate(['updateemployee', id]);
  }

  deleteEmployee(id: number | undefined) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id: number | undefined) {
    this.router.navigate(['employeedetail', id]);
  }

}
