"use strict";
document.write("Lam bai tap ve hinh");
document.write("<br>");
document.writeln(
  "Bài 1: Vẽ hình chữ nhật đặc có kích thước mxn (trong đó m, n > 0)"
);

function drawRectangle(m, n) {
  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      str += "*&#32;";
    }
    str += "<br />";
  }
  console.log(str);
  document.writeln(str);
}

function drawEmptyRectangle(m, n) {
  document.writeln("<br>");
  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  let str = "";

  // ve hang thu nhat
  for (let x = 0; x < m; x++) {
    str += "* ";
  }

  // ve cac hang o giua
  for (let i = 1; i < n - 2; i++) {
    str += "<br>";
    for (let j = 0; j < m; j++) {
      if (j === 0 || j === m - 1) {
        str += "* ";
      } else {
        str += "* ".fontcolor("red");
      }
    }
  }

  // ve hang cuoi
  str += "<br>"
  for (let x = 0; x < m; x++) {
    str += "* ";
  }
  document.writeln(str);
}

drawEmptyRectangle(6, 5);
