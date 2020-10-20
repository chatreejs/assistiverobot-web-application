import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.scss']
})
  
  
export class UmComponent implements OnInit {

  isVisible = false;
  selectedValue = null;


  constructor() { }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  listOfData = [
    {
      id: 62102010027,
      name: 'Thanathip Chanasri',
      role: 'Admin',
    },
    {
      id: 62102010030,
      name: 'Aukrit',
      role: 'Member',
    }
  ];

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }

}
