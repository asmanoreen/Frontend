import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface authorData{
  bookObj:[]
  success:boolean,
  usersListCount:number,
  next: string,
  previous: string
}
interface authorDataById{
  bookObj:[],
  success:boolean
}
interface res{
  success:boolean
}
interface likesResponse{
  success:boolean
}
interface booksData{
  bookObj:[]
  success:boolean
}
interface authorsData{
  bookObj:[]
  success:boolean
}

@Injectable()

export class AuthorserviceService {

  constructor(private http:HttpClient) { }

  getAllAuthor(pageLimit , pageOffset){

    return this.http.get<authorData>('/getauthorrecord/'+ pageLimit + '/' + pageOffset)

  }

  getRecordbyid(id){
    return this.http.get<authorDataById>('/getauthor/'+id)
  } 

  registerAuhtor(authorName,bookName,dateOfBirth,placeOfBirth,authorImg:File){

    console.log(authorImg);
    
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    var formData = new FormData();
    formData.append('avatar',authorImg ,authorImg.name );
    formData.append("authorName",authorName);
    formData.append("dateOfBirth",dateOfBirth);
    formData.append("placeOfBirth",placeOfBirth);
    formData.append("bookName",JSON.stringify(bookName));

    console.log(formData.get('bookName'));
    
    return this.http.post<res>('/addauthor', formData, { headers: headers } );
    
  }

  updateAuthor(id,authorName,dateOfBirth,placeOfBirth,authorImgUpadte:File){

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    var formData = new FormData();

    if(authorImgUpadte==null){
      formData.append("authorName",authorName);
      formData.append("dateOfBirth",dateOfBirth);
      formData.append("placeOfBirth",placeOfBirth);
    }else{
      formData.append('avatar',authorImgUpadte ,authorImgUpadte.name );
      formData.append("authorName",authorName);
      formData.append("dateOfBirth",dateOfBirth);
      formData.append("placeOfBirth",placeOfBirth);
    }


    console.log(formData.get('avatar'));

    return this.http.put<res>('/updateauthor/'+id,formData, { headers: headers } );
  }
  deleteAuthor(id){
    return this.http.delete<res>('/deleteauthor/'+id);
  }
  getAllBooks(){

    return this.http.get<booksData>('/getallbook')
  }

  getAllAuthors(){
    return this.http.get<authorsData>('/getallauthor')
  }

}
   