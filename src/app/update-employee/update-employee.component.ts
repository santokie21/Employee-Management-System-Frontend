import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    }, (err) => {
      console.error(err);
    })
  }

  goToEmployeeList() {
    this.router.navigate(["employees"])
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe((data) => {
      this.goToEmployeeList();
      // this.employee = data;
    }, (err) => {
      console.error(err);

    })
  }

}

