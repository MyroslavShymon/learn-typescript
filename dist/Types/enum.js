"use strict";
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 0] = "Up";
    Directions1[Directions1["Down"] = 1] = "Down";
    Directions1[Directions1["Left"] = 2] = "Left";
    Directions1[Directions1["Right"] = 3] = "Right";
})(Directions1 || (Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2[Directions2["Up"] = 2] = "Up";
    Directions2[Directions2["Down"] = 4] = "Down";
    Directions2[Directions2["Left"] = 6] = "Left";
    Directions2[Directions2["Right"] = 7] = "Right";
})(Directions2 || (Directions2 = {}));
console.log("Directions1", Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right, "Directions2", Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right);
var links;
(function (links) {
    links["youtube"] = "https://www.youtube.com/";
    links["telegram"] = "https://www.telegram.com/";
    links["instagram"] = "https://www.instagram.com/";
})(links || (links = {}));
console.log("links:", links);
console.log("links:", "https://www.youtube.com/");
//# sourceMappingURL=enum.js.map