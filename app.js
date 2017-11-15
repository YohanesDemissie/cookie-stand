'use strict'

'use strict';

var tblElement = document.getElementById('main-tbl');
var tbodyElement = document.createElement('tbody');
tbodyElement.className = 'tbl-class';
tbodyElement.id = 's-tbl-body';
tblElement.appendChild(tbodyElement);

// Create a Row
var trElement = document.createElement('tr');

// Create a series of TDs, and provide each with content
// append each TD to the TR
for(var i = 0; i < 4; i++) {
  var tdEl = document.createElement('td');
  tdEl.textContent = i;
  trElement.appendChild(tdElement);
}

// Append the TR to the TBody
tbodyElement.appendChild(trElement);

// var firstAndPike = {
//   name: '1st And Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookieSale: 6.3,
//   dayZero: 0,//where the addition begins with adding total
//   custPerHr: function () {
//     return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   averageCookiePerHour: function () {
//     // var empty = [];
//     for (var i = 0; i < this.storeHours.length; i++) {
//       // jesus jelp with total function
//       // rendor: function () //rendor allows you to display javascript data in html
//       //if (i <15) {
//       //end help
//       var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
//       this.dayZero += cookieSoldPerHr;
//       console.log ('cookies sold per hour', this.dayZero);
//       var list = document.getElementsByTagName('ul')[0];
//       var newItemLast = document.createElement('li');
//       var newTextLast = //the next code below is to display li
//       document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
//       newItemLast.appendChild(newTextLast);
//       list.appendChild(newItemLast);
//       // } else { //more of jesus + kowsers help
//       //   var newList = document.createElement('li');
//       //   var newContent = document.createTextNode('Total: ' + this.dayZero );
//       //   newItemLast = document.createElement('li2');
//       //   newTextLast = document.createTextNode() //this pulls from 'i' in node
//       //
//     }
//   }
// };
// //return empty;
// firstAndPike.averageCookiePerHour();
// console.log(firstAndPike);
