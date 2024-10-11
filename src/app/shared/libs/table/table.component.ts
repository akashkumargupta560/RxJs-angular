import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() cols: any = [];
  @Input() data: any[] = [];

  @Output() rowClick = new EventEmitter<any>();
  
  constructor(){}

  ngOnInit():void{}
  

  onRowClick(row: any) {
    this.rowClick.emit(row); // Emit the clicked row data
  }
}
