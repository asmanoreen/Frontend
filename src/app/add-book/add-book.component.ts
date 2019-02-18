import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../service/authorservice.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {

  coverImg:File =null;
  getAllAuthors:any=[];
  authorAdded:string='';
  tempArr: any = [];
  constructor(private bookSer:BookserviceService,private authorSer:AuthorserviceService ,private router:Router) { }

  onFileSelected(event){
    this.coverImg=event.target.files[0];
    
  }

  addBook(value) {

    var bookName = value.bookName;
    var publishDate = value.publishDate;
    var authorName = this.tempArr;
  
    this.bookSer.registerBook(bookName,publishDate,authorName,this.coverImg).subscribe(data=>{
      if(data.success){
        alert("Book Register Successfully");
        this.router.navigate(['/getallbookrecords']);
      }else{
        alert("Something Wrong");
      }
    })
  
  }

  addAuthorInArray(bookdata:string, isChecked: boolean){
    if(isChecked) {
      this.tempArr.push(bookdata);
      console.log("isChecked :",this.tempArr);
      this.authorAdded="Book is Added";
      console.log(this.authorAdded);
      
      
    } else {
      let index = this.tempArr.indexOf(bookdata);
      this.tempArr.splice(index,1);
      console.log("else part:" ,this.tempArr);
      
    }
    
  }

  addAuthors(){
    this.authorSer.getAllAuthors().subscribe((data) => {
      this.getAllAuthors = data.bookObj;
    })

  }

  addAuthorModel(){
    if(this.tempArr.length != 0) 
    console.log("array is not empty",this.tempArr);
    else
    console.log("array is empty");
        
  }

}
 