var members=["44495497._SX318_.jpg","father.jpg","mother.jpg","child.jpg"];
var i = 1;
function next() {
document.getElementById("album").src = members[i];
i++;
if (i > 3) {
i = 0;
}
}
