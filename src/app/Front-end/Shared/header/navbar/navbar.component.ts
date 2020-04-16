import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../../projet.service'
import { Router } from '@angular/router'
import { User } from '../../../../user';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  exist:any
  users: User[]
  model: any = {};
  user:User
  id:number = JSON.parse(localStorage.getItem('user')).userId

  constructor(private _auth: ProjetService, private _router: Router,private authService: AuthService) { }



  ngOnInit() {
    this.getUser(this.id);
    
  }
  
  getUser(id) : void{
    this._auth.getUser(id).subscribe(user => (this.user = user))
  }
  logout() {
    return this.authService.logout();
  }

getusers(){
  this._auth.getUsers().subscribe(users =>{
    this.users = users
    console.log(this.users);
    
  })

}



}