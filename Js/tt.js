// // Lấy các phần tử trong DOM 
let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');
let congButton = document.getElementById('cong');
let truButton = document.getElementById('tru');
let nhanButton = document.getElementById('nhan');
let chiaButton = document.getElementById('chia');

// đăng ký sự kiện 
congButton.addEventListener('click', () => {
    //lấy giá trị từ các o input 
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);

    // kiểm tra và tính tổng a và b 
    if (a >= 0 && b >= 0) {
        const tong = a + b;
        console.log("Tổng: " + tong);
    } else {
        console.log(" Hai số a và b không được âm");
    }
});


 truButton.addEventListener('click', () => {
    //lấy giá trị từ các o input 
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);

    // kiểm tra và tính trừ a và b
    if (a >= 0 && b >= 0) {
        if (a >= b) {
            const tru = a - b;
            console.log("Trừ: " + tru);
        } else {
            console.log("Nhập số b không hợp lệ, số b phải nhỏ hơn a ")
        }
    } else {
        console.log(" Hai số a và b không được âm");
    }
});


// // kiểm tra và tính nhân a và b
nhanButton.addEventListener('click', () => {
    //lấy giá trị từ các o input 
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    if (a >= 0 && b >= 0) {
        const nhan = a * b;
        console.log("Nhân: " + nhan);
    } else {
        console.log(" Hai số a và b không được âm");
    }

})


// // kiểm tra và tính chia a và b
chiaButton.addEventListener('click', () => {
    //lấy giá trị từ các o input 
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    if (a >= 0 && b >= 0) {
        if (b != 0) {
            const chia = a / b;
            console.log("Chia: " + chia);
        } else {
            console.log(" Mẫu số phải khác 0 ");
        }
    }else{
        console.log(" Hai số a và b không được âm");
    }
})





// --------------------------------------