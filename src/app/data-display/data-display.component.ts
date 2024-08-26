import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient);
  data : any[] = [];


  //API Calls:
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data : any) => {
      console.log(data);
      this.data = data;
    });
  }

}

