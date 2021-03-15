//BT 1: Lấy ra ngày tháng năm, xác định mùa nào trong năm
function season() {
    let d = new Date();
    console.log(`Thời gian hiện tại là ${d}`);
    let n = d.getMonth();
    if (n <= 2) { console.log("Mùa Xuân"); }
    else if (n <= 5) { console.log("Mùa Hè"); }
    else if (n <= 8) { console.log("Mùa Thu"); }
    else { console.log("Mùa Đông"); }
}
//BT 2: Viết hàm trả về số ngày 1 tháng
/** 31 ngày: 1,3,5,7,8,10,12
 * 30 ngày: 4,6,9,11
 * 28/29 ngày: tháng 2
 */
function DateCount() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth();
    if (m === 2) {
        if (y % 4 === 0) { console.log("Tháng có 29 ngày"); }
        else { console.log("Tháng có 28 ngày"); }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) { console.log("Tháng có 30 ngày"); }

    else { console.log("Tháng có 31 ngày"); }
}
//BT 3: Tính tổng các chữ số trong 1 số nguyên dương.
function TinhTong(d) {
    if (Number.isInteger(d) === false) { console.log("Số không hợp lệ"); return d; }
    else {
        let f = d % 10;

    }
}
//BT 4: In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm 

function CatChuoi() {
    let n = length(d);
    if (n <= 10) { console.log(d); return }
    else {
       console.log(n.substring(0, 11) + `...`)
    }
}