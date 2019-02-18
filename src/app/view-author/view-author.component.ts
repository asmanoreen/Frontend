import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../service/authorservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  id: number;
  bookRecord: any =[];
  constructor(private authorSer:AuthorserviceService ,private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id']; 
      console.log(this.id);
      this.authorSer.getRecordbyid(this.id).subscribe(data=>{
        console.log(data);
        this.bookRecord=data.bookObj;
        console.log(this.bookRecord);
        
      })
   });

  }

}
 