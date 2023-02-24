import { Component, OnInit } from '@angular/core';
import { todolist } from '../interfaces/todo';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos : todolist[] = [];
  newTodo : string;
  constructor(private dbService: NgxIndexedDBService){
  }

  ngOnInit(): void {
    this.dbService.getAll<todolist>('Todo').subscribe((todos: todolist[]) => {
      this.todos = todos;
    });
  }


  saveTodo(){
    if (this.newTodo){
      let todo = new todolist;
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.addTodo(todo)
      this.newTodo = "";
    }else {
      alert("Vigyél be valamit");
    }
  }

  done(index:number){
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
    this.dbService.update('Todo', this.todos[index]
  )
  .subscribe((storeData) => {
    console.log('storeData: ', storeData);
  });
  }

  remove(id:number) {
    this.todos = this.todos.filter((v)=> v.id !== id)
    this.dbService.delete('Todo', id).subscribe((allPeople) => {
      console.log('all people:', allPeople);
    });
  }

  addetails() {
    this.dbService.add('Todo', {
      name: `todo1`,
      isCompleted: false,
    })
  }

  addTodo(todo: todolist) {
    this.dbService.add('Todo', todo)
    .subscribe((key) => {
      this.todos.push(todo)
    });

}
}


