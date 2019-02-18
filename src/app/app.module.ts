import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { GetAllbookComponent } from './get-allbook/get-allbook.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { SimpleModalComponent } from './customModals/searchmodal.component';
import { HomeComponent } from './home/home.component';
import { BookserviceService } from './service/bookservice.service';
import { AuthorserviceService  } from './service/authorservice.service'
import { JQUERY_PROVIDER } from './service/jquery.service';
import { BookfilterPipe } from './customfitters/bookfilter.pipe';
import { ModaltriggerDirective } from './customDirective/modaltrigger.directive';
import { from } from 'rxjs';
import { AddAuthorComponent } from './add-author/add-author.component';
import { GetAllauthorComponent } from './get-allauthor/get-allauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { BookModalComponent } from './book-modal/book-modal.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getallbookrecords', component: GetAllbookComponent },
  { path: 'getallauthorrecords', component: GetAllauthorComponent },
  { path: 'registerbook', component: AddBookComponent },
  { path: 'registerauthor', component: AddAuthorComponent },
  { path: 'bookupdate/:id', component: UpdateBookComponent },
  { path: 'viewrecord/:id', component: ViewbookComponent },
  { path: 'authorupdate/:id', component: UpdateAuthorComponent },
  { path: 'viewauthor/:id', component: ViewAuthorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent, 
    UpdateBookComponent,
    GetAllbookComponent,
    HomeComponent,
    ViewbookComponent,
    BookfilterPipe,
    SimpleModalComponent,
    ModaltriggerDirective,
    AddAuthorComponent,
    GetAllauthorComponent,
    UpdateAuthorComponent,
    ViewAuthorComponent,
    BookModalComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [BookserviceService, JQUERY_PROVIDER, AuthorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
