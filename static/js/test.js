(() => {
const words = [
  { type: 1 },
  { type: 35677 },
  { type: 35 },
  { type: 6 },
  { type: 5 },
  { type: 3 },
];

getIngredientsString() {
  return words
    .map((word) => {
      return `${word.amount}  ${word.name}`;
    })
    .join("\n");
};
console.log(getIngredientsString());
/*
function filterByType(item) {
  if (Number.isFinite(item.type) && item.type !== 6) {
    return true;
  }
  return false;
}
const filteredWords = words.filter(filterByType);
console.log(filteredWords); //Output: ["exuberant", "destruction", "present"]
/*
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { id: null },
  { id: NaN },
  { id: "undefined" },
];
const getString = (arr) => {
  return arr.map((ar) => {
    return `${ar.id}`;
  });
};
console.log(getString());

/*
function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  return false;
}

const arrByID = arr.filter(filterByID);

console.log(arrByID);
*/
})();