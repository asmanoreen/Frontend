import { Component, OnInit } from '@angular/core';
import { AddAuthorComponent } from '../add-author/add-author.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorserviceService } from '../service/authorservice.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  id: number;
  authorImgUpdate:File =null;
  authorRecord: any =[];
  constructor(private authorSer:AuthorserviceService ,private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id']; 
      console.log(this.id);
      this.authorSer.getRecordbyid(this.id).subscribe(data=>{
        console.log(data);
        this.authorRecord=data.bookObj;
      })
   });
  }
  onFileSelected(event){
    this.authorImgUpdate=event.target.files[0];
  }

  updateAuthorform(value: any) {
    console.log(value);
    var authorName = value.authorName;
    var bookName = value.bookName;
    var dateOfBirth = value.dateOfBirth;
    var placeOfBirth = value.placeOfBirth;
    this.authorSer.updateAuthor(this.id,authorName,dateOfBirth,placeOfBirth,this.authorImgUpdate).subscribe(data=>{
      if(data.success){
        alert("Book Update Successfully");
        this.router.navigate(['/getallauthorrecords']);
      }else{
        alert("Something Wrong");
      }
    })
  }

}
