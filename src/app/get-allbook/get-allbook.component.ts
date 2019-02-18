import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-get-allbook',
  templateUrl: './get-allbook.component.html',
  styleUrls: ['./get-allbook.component.css']
})
export class GetAllbookComponent implements OnInit {

  searchItem: string = "";
  searchData: any;
  elements: any = [];
  pageLimit :number; 
  pageOffset :number;
  numberOfLikes =0; 
  numberOfDisLikes =0;
  likeId:boolean;
  disLikeId:boolean;
  nextPage:any;
  previousPage:any;

  headElements = ['Book ID', 'Book Title', 'Authors Name', 'Publish Date', 'Operations'];

  constructor(private bookSer: BookserviceService, private router: Router,private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {

    this.pageLimit = 2; 
    this.pageOffset = 0;
    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      console.log("next : ",data.next);
      console.log("previous : ",data.previous);
      this.nextPage = data.next;
      this.previousPage = data.previous;
      this.elements = data.bookObj;
      this.pageLimit = data.bookObj.length;
      
    })
 
  }
  getPreviousRecord(pageLimit) {

    // console.log("getPreviousRecord_Function");
    // console.log("PL:", pageLimit, "PO:", pageOffset);
    // console.log("PLU:", pageLimit, "POU:", pageOffset);

    this.pageOffset -= pageLimit;
    this.pageLimit = pageLimit;
   

    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.elements = data.bookObj;
      this.nextPage = data.next;
      this.previousPage = data.previous;
    })

  }

  getNextRecord(pageLimit) {

    // console.log("getNextRecord_Function");
    // console.log("PL:", pageLimit, "PO:", pageOffset);
    // console.log("PLU:", pageLimit, "POU:", pageOffset);

    this.pageOffset += pageLimit;
    this.pageLimit = pageLimit;

    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.elements = data.bookObj;
      this.nextPage = data.next;
      this.previousPage = data.previous;

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

  likeBtnClick(bookId){
    
    this.numberOfLikes++;
    this.bookSer.addLikes(bookId,this.numberOfLikes).subscribe(data=>{
      console.log("like :",data);
     this.likeId=bookId;
      this.numberOfLikes=0;
      this.ngOnInit();
      // this.router.navigate(['/']);
      // this.ngOnInit();
      // window.location.reload();
   })

  }
  dislikeBtnClick(bookId){

      this.numberOfDisLikes++;
      this.bookSer.addDisLikes(bookId,this.numberOfDisLikes).subscribe(data=>{
        console.log("dislike :",data);
        
        this.disLikeId=bookId;
        this.numberOfDisLikes=0;
        this.ngOnInit();
        // this.router.navigate(['/']);
        // window.location.reload();
     })
  
  }
  setLikeStyles(id) {

    let styles = {
      'color': this.likeId==id ? 'blue' : 'black' 
    };
    return styles;
  }
  setDislikeStyles(id) {

    let styles = {
      'color': this.disLikeId==id ? 'blue' : 'black' 
    };
    return styles;
  }

  addBook() {
    this.router.navigate(["/registerbook"])
  }

  deleteBook(bookId) {
    this.bookSer.deleteBook(bookId).subscribe(data => {
      if (data.success) {
        alert("Book Delete Successfully");
        this.router.navigate(["/getallbookrecords"])
        // this.router.navigate(['']);
        // this.ngOnInit();
        // window.location.reload();
      } else {
        alert("Something Wrong");
      }
    })
  }

  updateBookrecord(bookId) {
    this.router.navigate(['/bookupdate', bookId]);
  }
  viewBookrecord(bookId) {
    this.router.navigate(['/viewrecord', bookId]);
  }

  searchText(searchItem) {
    this.bookSer.searchBookData(searchItem).subscribe(data => {
      if (data.success) {
        this.searchData = data.bookObj;
      }
      console.log(data.bookObj);

    })
  }

}
