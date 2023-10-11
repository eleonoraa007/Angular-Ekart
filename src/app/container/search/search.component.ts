import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event:
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the diff token from the queried elements.
  //2. static: Tells when the query is resolved. 
  //      True is when the view is initialized for the first time
  //      (before the first change detection)
  //      npr: {static: true}
  //      False if you want it to be resolved after every change detection. 
  //      (It will not be asigned immediately to the reference) 
  @ViewChild('searchInput') searchInputEl: ElementRef;

  //onSearchTextChanged() {}

  updateSearchText() {
    //this.searchText = event.target.value;
    //this.searchText = inputEl.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
