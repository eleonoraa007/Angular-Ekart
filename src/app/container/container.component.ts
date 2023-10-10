import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Sarah', 'John'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
