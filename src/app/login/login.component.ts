import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  constructor(
    private router: Router,
    private accountService: AccountServiceService
    ) {}
    
  accounts = []; 
  type = "";

  onSubmit(loginForm: NgForm) {}
    
  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      data => {
        this.accounts = data;
      })   
  }

  loginFunction(loginForm: NgForm){ 
    
    if (loginForm.value.username ==  "" || loginForm.value.password == "") {
      alert("Please submit your login details");
      return;
    } else {
        for (var j = 0; j < this.accounts.length;j++){
          if (this.accounts[j].email == loginForm.value.username && this.accounts[j].password == loginForm.value.password) {
            this.type = this.accounts[j].type;
              switch(this.type) {
                case "admin":
                  this.router.navigate(['/landingadmin']);
                  return;
                case "planner":
                  this.router.navigate(['/landingplanner']);
                  return;
                case "customer":
                  this.router.navigate(['/landingadmin']); //Doesn't exist yet
                  return;
              }
            }
          }
        alert("Invalid login.")
      }
    }
  } 