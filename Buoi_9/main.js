console.log("hello main.js"); //Chu thich 1dong
/*chu thich nhieu dong*/
/**1. number
 * 2. infinitey
 * 3. NaN (not a number)
 */

/** 1. String
    2. dat trog dau nhay don, dau nhay kep hoac trong dau backtick
   */
/**3. Boolean
 * Chi co 2 gia tri true/false
 */

/**4. Null
 * NUll la bien/doi tuong trong, khong co gi
 */
/** 5. undefined
 * mot bien/hang so da dc khai bao, chua dc khoi tao thi mang gia tri undefined
 */
/** 6. Function */
function sendEmail() { console.log("This is a function") }
sendEmail();

function getAMessage(from, message = "Khong co noi dung") { console.log(from + ":" + message); }
getAMessage('Robin', 'hi');

function getABox() { return "This is a box" }
let box = getABox()

function greeting(message = "Xin chao cac ban") {
    alert(message)
};

function greeting1(message = "Xin chao") {
    console.log(message + "X")
};

function greeting2(message = "Xin chao") {
    console.log(message + '"x"')
};