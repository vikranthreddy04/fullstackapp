import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[
    {id:1,description : 'Learn racquetball'},
    {id:2,description : 'Improve backhand in racquetball'},
    {id:3,description : 'Visit 7 wonders of the world'}


  ]
  // todo={
  //   id:1,
  //   description : 'Learn racquetball'
  // }

  constructor() { }

  ngOnInit() {
  }

}
