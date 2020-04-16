import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-home-visiteur',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomevisiteurComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
 
}
