import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthorserviceService } from '../service/authorservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authorSer:AuthorserviceService , private router:Router) { }

  ngOnInit() {
  }
  viewBook(){
    this.router.navigate(['/getallbookrecords'])
  }
  viewAuthor(){
    this.router.navigate(['/getallauthorrecords'])
  }



}

  