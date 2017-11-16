'use strict';
var stores = [];

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function store (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  stores.push(this);
}
console.log('preoperty vale setup', store);

new store ('1st and Pike', 23, 65, 6.3);
new store ('SeaTac', 3, 24, 1.2);
new store ('Capitol Hill', 20, 38, 2.3);
new store ('',2, 26, 1.2);

store.prototype.randomCust = function (){
  return Math.round(this.avg * this,randomCust());
};
stores [0].cookieCount();
console.log ('store value setup', new store);
store.header = function () {
  var tblEl = document.getElementById('table');
  var thead = document.createElement('thead');
  tblEl.appendChild('thead');
  var reEl = document.createElement('tr');
  tdEl.textContent = '';
  trE1.appendChild(tdEl);
  for (var i = 0; i <15; i++) {
    tdEl = document.createElement('td');
    var time = hours[i];
    tdEl.textContent=time;
    trEl.a[[endChild(tdE1);
  }
};
store.header();
store.prototype.tableContent = function () {
  var cookiesDay = 0;
  var tbEl = document.getElementById('table');
  var tbody = document.createElement('tr');
  tblEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textcontent = stores[j].id;
  trEl.appendChild(tdEl);
  for(var i= 0; i <= 15; i++) {
    var cookieC = this.cookieCount();
    cookiesDay += cookieC;
    teEl = document.createElement('td');
    var cookies = cookieC;
    tdEl.textContent = ccokies;
    trEl.appendChild(tdEl);
  }
  var dataTotal = document.createElement('td');
  tdEl.textContent = cookiesDay;
  tblEl.appendChild (dataTotal);
};
