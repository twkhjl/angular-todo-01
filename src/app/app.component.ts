import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos:Todo[]=[];
  newTodo:string;

  createTodo(){
    if(this.newTodo){

      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo="";

    }
    return ;
  }
  removeTodo(i:number){
   this.todos= this.todos.filter((el,idx)=>idx!==i);
  }
  toggleComplete(i:number){
    this.todos[i].isCompleted=!this.todos[i].isCompleted;
  }
}
