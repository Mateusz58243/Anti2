//square

console.log("Square:\n");
let alap = "***************"; //15
console.log(alap.substring(0, 5));
console.log(alap.substring(0, 5));
console.log(alap.substring(0, 5));
console.log(alap.substring(0, 5));
console.log(alap.substring(0, 5));

//pyramid
console.log("\nHalf Pyramid:\n");
console.log(alap.substr(7, 1));
console.log(alap.substr(6, 2));
console.log(alap.substr(5, 3));
console.log(alap.substr(4, 4));
console.log(alap.substr(3, 5));
console.log(alap.substr(2, 6));

// mirrored pyramid
console.log("\nMirrored Pyramid:\n");

let spaces = "     "; //5
for (let i = 0; i < 6; i++) {
  console.log(spaces.substring(0, 5 - i) + alap.substr(7 - i, 1 + i));
}

console.log("\nPyramid:\n");

let sorok = 5;
for (let i = 1; i <= sorok; i++) {
  let elejeSzokozok = " ".repeat(sorok - i);

  let csillagok = Array(i).fill("*").join(" ");

  console.log(elejeSzokozok + csillagok);
}

// left pyramid upsidedown
console.log("\nLeft pyramid upsidedown");
console.log(alap.substring(0, 5));
console.log(alap.substring(0, 4));
console.log(alap.substring(0, 3));
console.log(alap.substring(0, 2));
console.log(alap.substring(0, 1));

// right pyramid upsidedown
console.log("\nRight pyramid upsidedown");
for (let i = 5; i > 0; i--) {
  let spaces = " ".repeat(5 - i);
  console.log(spaces + alap.substring(0, i));
}

//hollow pyramid
console.log("\nHollow Pyramid:\n");
let height = 5;
for (let i = 1; i <= height - 1; i++) {
  let spaces = " ".repeat(height - i);
  let stars = "*".repeat(2 * i - 1);
  if (i === 1) {
    console.log(spaces + "*");
  } else {
    console.log(spaces + "*" + " ".repeat(2 * i - 3) + "*");
  }
}
console.log("* ".repeat(height));

//hollow inverted pyramid
console.log("\nHollow Inverted Pyramid:\n");
