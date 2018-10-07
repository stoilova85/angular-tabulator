
Steps to use *Tabulator* inside an Angular application

# install the tabulator modules (pure js)
npm install tabulator-tables --save

# In a  Angular-cli project, modify the angular.json file
# to add the style file and the js file
"styles": [
              "src/styles.css",
              "./node_modules/tabulator-tables/dist/css/tabulator.min.css"
        ],
"scripts": [ "./node_modules/tabulator-tables/dist/js/tabulator.min.js"]

# in a component, declar a var
declare var Tabulator: any;

# and use it like in tabulator documentation
# in a ngOnInit function (not a constructor)
 var table = new Tabulator("#exampletable", {
      columns:[
      {title:"Name", field:"name"},
      {title:"Progress", field:"progress", sorter:"number"},
      {title:"Gender", field:"gender"},
      {title:"Rating", field:"rating"},
      {title:"Favourite Color", field:"col"},
      {title:"Date Of Birth", field:"dob", align:"center"},
      ],movableColumns: true, movableRows: true, //enable user movable rows
      selectable : true
  });
  table.setData([
    {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
    {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    {id:3, name:"Christine Lobowski", age:"42", height:0, col:"green", dob:"22/05/1982", cheese:"true"},
    {id:4, name:"Brendon Philips", age:"125", gender:"male", height:1, col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", gender:"female", height:5, col:"yellow", dob:"31/01/1999"},
    {id:6, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
    {id:7, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    {id:8, name:"Christine Lobowski", age:"42", height:0, col:"green", dob:"22/05/1982", cheese:"true"},
    {id:9, name:"Brendon Philips", age:"125", gender:"male", height:1, col:"orange", dob:"01/08/1980"},
    {id:10, name:"Margret Marmajuke", age:"16", gender:"female", height:5, col:"yellow", dob:"31/01/1999"},
  ]);
}

# in the template 
<div id="exampletable" > </div>
