

function tinhtoan(operator) {
    //lấy giá trị từ 2 ô input
    var inputA = document.getElementById('inputA').value;
    var inputB = document.getElementById('inputB').value;
   
    // đổi kiểu dữ liệu sang số thực 
    var a = parseFloat(inputA);
    var b = parseFloat(inputB);

  

    if (a < 0 || b < 0) {
        console.log("Nhập số a và b phải dương");
        return;
    }

    var result;
    switch (operator) {
        case "+":
            result = a + b;
            console.log(result);
            break;
        case "-":
            if (a >= b) {
                result = a - b;
                console.log(result);
            } else {
                console.log("Không thỏa mãn điều kiện a >= b");
            }
            break;
        case "*":
            result = a * b;
            console.log(result);
            break;
        case "/":
            if (b > 0) {
                result = a / b;
                console.log(result);
            } else {
                console.log("Không thỏa mãn điều kiện mẫu số khác 0");
            }
            break;
        default:
            break;
    }

}