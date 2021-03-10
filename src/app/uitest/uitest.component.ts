import { Component, OnInit ,Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Task,DialogData} from '../hero';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-uitest',
  templateUrl: './uitest.component.html',
  styleUrls: ['./uitest.component.css']
})
export class UitestComponent implements OnInit {

  //*************************//
  //AutoComplete
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  //*************************//
  //CheckBox Start =============
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) { //$event.checked
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
  //CheckBox End =============


  //*************************//
  //DatePicker Start =================
  startDate = new Date(1990, 0, 1);
  //DatePicker End ==============

  //*************************//
  //Dialog Start =============
  animal: string ="";
  name: string ="";


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExample, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  //Dialog End =============

  
  //*************************//
  //ChartJS Start =============
  // charts.component.ts


  //ChartJS End ===============

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}



// Dialog
@Component({
  selector: 'dialog-example',
  templateUrl: 'dialog-example.html',
})
export class DialogExample {

  constructor(
    public dialogRef: MatDialogRef<DialogExample>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}