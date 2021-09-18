// enum ghh {"Red", "yellow", "brown"} 
// let g =  ghh.Red;
// console.log(g);
var month;
(function (month) {
    month[month["January"] = 0] = "January";
    month[month["February"] = 1] = "February";
    month[month["March"] = 2] = "March";
    month[month["April"] = 3] = "April";
})(month || (month = {}));
var m = month.January;
console.log(m);
