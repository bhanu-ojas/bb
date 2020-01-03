import { Component } from '@angular/core';
import { DollService } from './doll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'savs';
  details: any;
  searchTerm;
  ngOnInit(){
    this.display();
    setInterval(()=> this.display(),10000)
  }
  columnDefs = [
    {headerName: 'Title', field: 'title' },
    {headerName: 'Url', field: 'url' },
    {headerName: 'CreatedAt', field: 'created_at'},
    {headerName: 'Author', field: 'author'}
];
  Data2: string;
 


  constructor(private s: DollService) {

    this.display();
  }
  display() {
    this.s.get().subscribe(response => {console.log(response);
                                        this.details = response['hits'] ;
    }); }

    
    onRowClicked(event){
      this.Data2= JSON.stringify(event.node.data)
    }
}
