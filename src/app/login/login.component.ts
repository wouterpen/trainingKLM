import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

    loginName: string = "";
    loginPswrd: string = "";

    userStr: string = "";
    passStr: string = "";
    typeStr: string = "";

    User = {
      Name: "",
      Type: "",
    };



  adminLogins = [
            ["Balraj@YoungSkyfield.nl", "Balraj", "Admin"],
            ["Wouter@YoungSkyfield.nl", "Wouter", "Admin"],
            ["Ines@YoungSkyfield.nl", "Ines", "Admin"],
            ["Sophie@YoungSkyfield.nl", "Sophie","Admin"],
            ["Marianne@YoungSkyfield.nl", "Marianne","Admin"],
            ["Bob@YoungSkyfield.nl", "Bob", "Admin"],
            ["Jennifer Lopez", "Lopez", "Customer"],
            ["Jennifer Aniston", "Aniston", "Customer"],
            ["Jennifer Lawrence", "Lawrence", "Customer"],

  ];
 

  loginFunction(loginForm: NgForm){ 

    // check if login details have been provided
    if (loginForm.value.userName ==  "" || loginForm.value.passWord == "") {

      alert("Please submit your login details")
    } else{

      this.loginName = loginForm.value.userName.toLowerCase();
      this.loginPswrd = loginForm.value.passWord.toLowerCase();

      var i: number;
      var loginStatus = "failed"


        for (i = 0; i < this.adminLogins.length; i++) {

          

                  this.userStr = this.adminLogins[i][0].toLowerCase();
                  this.passStr = this.adminLogins[i][1].toLowerCase();
                  this.typeStr = this.adminLogins[i][2].toLowerCase();

                if (this.userStr == this.loginName && this.passStr== this.loginPswrd ){
                  var loginStatus = "succesfull";
                  
                  this.User.Name = this.userStr ;
                  this.User.Type = this.typeStr ;



                  break

                } else{

                    if (i+1 == this.adminLogins.length){
                      alert("Please submit valid login details")

                      this.User.Name = "" ;
                      this.User.Type = "" ;
                    }
                  continue
                }
        }
        console.log(this.User)
        console.log(loginStatus)
      }

  }

 






  onSubmit(loginForm: NgForm) {}



  constructor() {}

  ngOnInit() {}

}

