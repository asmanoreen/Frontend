import { Component ,OnInit} from '@angular/core';
import { AuthorserviceService } from '../service/authorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {


  tempArr: any = [];
  authorImg:File =null;
  getDataBooks:any=[];
  optionsSelect: any =[];
  bookAdded:string='';

  constructor(private authorSer:AuthorserviceService ,private router:Router) { }

    ngOnInit(){
      this.authorSer.getAllBooks().subscribe((data) => {
        this.getDataBooks = data.bookObj;
      }) 
    }


    getSelectedValues(event: any) {
    console.log('Selected value', event);
    }

  onFileSelected(event){
    this.authorImg=event.target.files[0];
    
  }

  addAuthor(value) {

    var authorName = value.authorName;
    var bookName = this.tempArr;
    var dateOfBirth = value.dateOfBirth;
    var placeOfBirth = value.placeOfBirth;
    console.log(authorName,bookName,dateOfBirth,placeOfBirth,this.authorImg);

    this.authorSer.registerAuhtor(authorName,bookName,dateOfBirth,placeOfBirth,this.authorImg).subscribe(data=>{
      if(data.success){
        alert("Book Register Successfully");
        this.router.navigate(['/getallauthorrecords']);
      }else{
        alert("Something Wrong");
      }
    })
      
  }


  addBooks(){
    this.authorSer.getAllBooks().subscribe((data) => {
      this.getDataBooks = data.bookObj;
    })

  }

  addBookArray(bookdata:string, isChecked: boolean){
    if(isChecked) {
      this.tempArr.push(bookdata);
      console.log("isChecked :",this.tempArr);
      this.bookAdded="Book is Added";
      console.log(this.bookAdded);
      
      
    } else {
      let index = this.tempArr.indexOf(bookdata);
      this.tempArr.splice(index,1);
      console.log("else part:" ,this.tempArr);
      
    }
    
  }
  addBookForm(){
    if( this.tempArr.length != 0 )
    console.log("array is not empty",this.tempArr);
    else
    console.log("array is empty");
        
  }


}
