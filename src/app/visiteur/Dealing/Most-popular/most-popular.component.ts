import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {ProjetService} from  'src/app/projet.service' ; 
import {Task} from 'src/app/task'
import { Routes, Router } from '@angular/router';



@Component({
  selector: 'app-most-popular-visiteur',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularvisiteurComponent implements OnInit {
  tasks: Task[]; 

  constructor(private http: HttpClient , private resourceService:ProjetService , public router:Router) { }

  ngOnInit(){
    this.MostPopular() ; 
  }

  slides = [
    {img: "assets/images/Home/jacket.jpg"},
    {img: "assets/images/Home/phone.jpg"},
    {img: "assets/images/Home/sandal.jpg"},
    {img: "assets/images/Home/shirt.jpg"},
    {img: "assets/images/Home/shoes.jpg"},
    {img: "assets/images/Home/jacket.jpg"},
    {img: "assets/images/Home/jenz.jpg"},
    {img: "assets/images/Home/shoes.jpg"},
    {img: "assets/images/Home/phone.jpg"}
 
  ];
  /* if you change the nbr of slidesToShow you should change the size of with in card in css file */
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 4};
  
  
  MostPopular (): void {
    this.resourceService.popularproducts().subscribe(tasks => (this.tasks = tasks))
  }

 }
