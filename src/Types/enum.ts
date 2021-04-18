enum Directions1 {
  Up,
  Down,
  Left,
  Right,
}
enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}

console.log(
  "Directions1",
  Directions1.Up,
  Directions1.Down,
  Directions1.Left,
  Directions1.Right,
  "Directions2",
  Directions2.Up,
  Directions2.Down,
  Directions2.Left,
  Directions2.Right
);

enum links {
  youtube = "https://www.youtube.com/",
  telegram = "https://www.telegram.com/",
  instagram = "https://www.instagram.com/",
}
console.log("links:", links);
const enum linksConst {
  youtube = "https://www.youtube.com/",
  telegram = "https://www.telegram.com/",
  instagram = "https://www.instagram.com/",
}
console.log("links:", linksConst["youtube"]);
