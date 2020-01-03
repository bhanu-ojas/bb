import { Component } from '@angular/core';
import { DollService } from './doll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
  searchTerm: any;
  Data: string;
 
  constructor(private service: DollService) {
    this.display();
  }

  ngOnInit() {
    this.display();
    setInterval(()=> this.display(),10000)
  }

  columnDefs = [
    {headerName: 'Title', field: 'title' },
    {headerName: 'Url', field: 'url' },
    {headerName: 'CreatedAt', field: 'created_at'},
    {headerName: 'Author', field: 'author'}
];
 
  display() {
    this.service.get().subscribe(response => {
        console.log(response);
        this.details = response['hits'] ;
    }); 
  }
    
  onRowClicked(event){
    this.Data= event.node.data;
  }
}
