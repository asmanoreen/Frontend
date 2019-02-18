import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorserviceService } from '../service/authorservice.service';

@Component({
  selector: 'app-get-allauthor',
  templateUrl: './get-allauthor.component.html',
  styleUrls: ['./get-allauthor.component.css']
})
export class GetAllauthorComponent implements OnInit {

  
  elements: any = [];
  getDataBooks: any = [];
  headElements = ['Author ID', 'Author Name', 'D-O-B', 'P-O-B', 'Books Name' ,'Operations'];
  numberOfLikes =0; 
  numberOfDisLikes =0;
  likeId:boolean;
  disLikeId:boolean;
  pageLimit :number; 
  pageOffset :number;
  nextPage:any;
  previousPage:any;



  constructor(private authorSer:AuthorserviceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.pageLimit = 2; 
    this.pageOffset = 0;
    this.authorSer.getAllAuthor(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.elements = data.bookObj;
      console.log("next : ",data.next);
      console.log("previous : ",data.previous);
      this.nextPage = data.next;
      this.previousPage = data.previous;
      this.pageLimit = data.bookObj.length;
    })
  }

  addAuthor() {
    this.router.navigate(["/registerauthor"])
  }
  deleteAuthor(authorId) {
    this.authorSer.deleteAuthor(authorId).subscribe(data => {
      if (data.success) {
        alert("Book Delete Successfully");
        this.router.navigate(["/getallauthorrecords"])
      } else {
        alert("Something Wrong");
      }
    })
  }

  updateAuthor(authorId) {
    this.router.navigate(['/authorupdate', authorId]);
  }
  viewAuthor(authorId) {
    this.router.navigate(['/viewauthor', authorId]);
  }

  searchText(searchItem) {
    console.log(searchItem);
  }

  getPreviousRecord(pageLimit) {

    this.pageOffset -= pageLimit;
    this.pageLimit = pageLimit;
   

    this.authorSer.getAllAuthor(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.elements = data.bookObj;
      this.nextPage = data.next;
      this.previousPage = data.previous;
      console.log("next : ",data.next);
      console.log("previous : ",data.previous);
    })


  }

  getNextRecord(pageLimit) {

    this.pageOffset += pageLimit;
    this.pageLimit = pageLimit;

    this.authorSer.getAllAuthor(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.elements = data.bookObj;
      this.nextPage = data.next;
      this.previousPage = data.previous;
      console.log("next : ",data.next);
      console.log("previous : ",data.previous);
      
      

    })
  }

  disablePreviousbtn() {
    if (this.previousPage == null )
      return false;
    else
      return true;
  }
  disableNextbtn() {
    if (this.nextPage == null)
      return false;
    else
      return true;
  }






}
 