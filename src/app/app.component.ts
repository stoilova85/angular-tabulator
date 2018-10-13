import { Component, OnInit } from '@angular/core';

declare var Tabulator: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  ngOnInit() {
    const table = new Tabulator('#exampletable', {
      columns: [
      {title: 'Stock update from SAP at (TIME) on (DATE)', field: 'name', editor: 'input',
        columns: [
          {title: 'Material', field: 'material-number',
           editor: 'select', editorParams: {'male': 'Male ',  'female ': 'Female '},
           headerFilter: true, headerFilterParams: { 'male ': 'Male ',  'female ': 'Female '}},
          {title: 'Material description', field: 'material-description',  editor: 'input'}
        ]
      },
      {title: 'UOM', field: 'uom', editor: 'input'},
      {
        // create column group:
        title: 'Production & Consumption (PLANT CODE and  NAME)', field: 'prod-and-cons',  editor: 'input',
        columns: [
          {title: 'Beginning balance', field: 'beginning-balance', width: 250, editor: 'input'},
          {title: 'Today (ADD DATE) Net Production Volume: 872', field: 'datapicker',
          columns: [
            {title: 'Stage 1', field: 'stage1', editor: 'input',
            columns: [
              {title: 'material in', field: 'material-in',  editor: 'input'},
              {title: 'material out', field: 'material-out',  editor: 'input'},
           ],
          },
            {title: 'Stage 1', field: 'stage1',
            columns: [
              {title: 'material in', field: 'material-in',  editor: 'input'},
              {title: 'material out', field: 'material-out',  editor: 'input'}
            ]},
          ]},

        ]
      },
      {title: 'Adjustments', field: 'adjustments', editor: 'input',
      colunms: [
        {title: 'New Balance', editor: 'input'},
        {title: 'material in', field: 'material-in', editor: 'input'},
        {title: 'material out', field: 'material-out'}
      ]
    },
    {title: 'Ending Balance', field: 'ending-balance', editor: 'input'}
    ],
    movableColumns: true,
    movableRows: true, // enable user movable rows
    selectable : true
  });
  table.setData([
    {id: 1, name: 'material-number', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1, editor: 'input'},
    {id: 2, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
    {id: 3, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
    {id: 4, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
    {id: 5, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
    {id: 6, name: 'Billy Bob', age: '12', gender: 'male', height: 1, col: 'red', dob: '', cheese: 1},
    {id: 7, name: 'Mary May', age: '1', gender: 'female', height: 2, col: 'blue', dob: '14/05/1982', cheese: true},
    {id: 8, name: 'Christine Lobowski', age: '42', height: 0, col: 'green', dob: '22/05/1982', cheese: 'true'},
    {id: 9, name: 'Brendon Philips', age: '125', gender: 'male', height: 1, col: 'orange', dob: '01/08/1980'},
    {id: 10, name: 'Margret Marmajuke', age: '16', gender: 'female', height: 5, col: 'yellow', dob: '31/01/1999'},
  ]);
  }
}
