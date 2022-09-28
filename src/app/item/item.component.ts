import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: '[app-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  editable = false;

  @Input() todo!: Todo;
  @Input() i!: any;
  @Output() remove= new EventEmitter<Todo>();

  saveTodo(value:string){
    this.todo.name = value;
    this.editable=false;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
