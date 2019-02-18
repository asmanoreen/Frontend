import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface bookData{
  bookObj:[]
  success:boolean,
  usersListCount:number,
  next: string,
  previous: string
}
interface bookDataById{
  bookObj:[]
  success:boolean
}
interface searchData{
  bookObj:[]
  success:boolean
}
interface res{
  success:boolean
}
interface likesResponse{
  success:boolean
}

@Injectable()
export class BookserviceService {

  constructor(private http:HttpClient) { }

  getAllbook(pageLimit , pageOffset){

    return this.http.get<bookData>('/getbookrecord/'+ pageLimit + '/' + pageOffset)

  }
  getRecordbyid(id){
    return this.http.get<bookDataById>('/getrecord/'+id)
  }

  registerBook(bookName,publishDate,authorName,coverImg:File){

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    var formData = new FormData();
    formData.append('avatar',coverImg ,coverImg.name );
    formData.append("bookName",bookName);
    formData.append("publishDate",publishDate)
    formData.append("authorName",JSON.stringify(authorName));

    console.log(formData.get('avatar'));
    
    return this.http.post<res>('/addbook',formData,  { headers: headers } );
  }


  searchBookData(searchItem:string){
    var term =searchItem.toLocaleLowerCase();
     return this.http.get<searchData>('/searchrecord/'+searchItem)

  }

  updateBook(bookName,publishDate,id,coverImgUpadte:File){

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    var formData = new FormData();

    if(coverImgUpadte==null){
      formData.append("bookName",bookName);
      formData.append("publishDate",publishDate);
      // formData.append("authorName",JSON.stringify(authorName));
    }else{
      formData.append('avatar',coverImgUpadte ,coverImgUpadte.name);
      formData.append("bookName",bookName);
      formData.append("publishDate",publishDate);
      // formData.append("authorName",JSON.stringify(authorName));
    }


    console.log(formData.get('avatar'));

    return this.http.put<res>('/updatebook/'+id,formData, { headers: headers } );
  }
  deleteBook(id){
    return this.http.delete<res>('/deletebook/'+id);
  }
  addLikes(id,numberOfLikes){

    return this.http.put<likesResponse>('/addlikes/'+id,{numberOfLikes} );

  }

  addDisLikes(id,numberOfDisLikes){
    console.log("addDislikes :" ,id ,numberOfDisLikes);
    
    return this.http.put<likesResponse>('/adddislikes/'+id,{numberOfDisLikes} );
  }

}
