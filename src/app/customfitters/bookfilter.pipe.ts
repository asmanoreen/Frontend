import { Pipe, PipeTransform ,OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform  {

  constructor( private bookSer: BookserviceService) {}
  

  searchObj: any = [];
  

  transform(searchData: any, searchItem: any): any {
    
    console.log("search",searchData);
    
    if(!searchItem)
        return searchData;
    
    return searchData.filter(function(ele){

      return ele.authorName.toLowerCase().includes(searchItem.toLowerCase())

    })  
  //  this.bookSer.searchBookData(searchItem).subscribe(data => {
  //     if (data.success) {
  //       data.bookObj.forEach(element => {
  //           console.log(element["authorName"]);   
  //       });
  //       console.log(this.searchObj);
        
  //     }

  //   })

  }
 

}
