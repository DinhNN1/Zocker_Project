
function tinhtien(){
    var table = document.getElementById('card');
    var rows = table.getElementsByTagName('tr');
    var total = 0;

    for (var i = 1; i < rows.length; i++){
        var cells = rows[i].getElementsByTagName('td');
        var price = parseFloat(cells[1].textContent.replace('VNĐ','').replace('.', ''));    
        var quantity = parseInt(cells[2].querySelector('.soluong').value);
        var diss = parseFloat(cells[3].querySelector('.discount').value);
        var tientruoc = price * quantity;
        cells[4].textContent = tientruoc.toLocaleString() + 'VNĐ';


        var erro = document.getElementById('err'+i);

        if (diss <= 100) {
            var discount = tientruoc * (diss / '100');
            erro.style.display = 'none';
            
        }else{
            
            erro.textContent = "Discount không vượt quá 100";
            erro.style.display = 'block';
            
        }
        

        var thanhtien = tientruoc - discount;
        cells[5].textContent = thanhtien.toLocaleString() + 'VNĐ';

        total += thanhtien;
    }
    var tongTien = document.getElementById('tongTien');
    tongTien.textContent = total.toLocaleString() + 'VNĐ';
   


}
console.log(myString.replace);


// /// Button thanh toán 
//   // Lấy phần tử button "Thanh toán"
//   const checkoutBtn = document.getElementById("checkoutBtn");

//   // Lấy phần tử form thanh toán
//   const paymentForm = document.getElementById("paymentForm");

//   // Xử lý sự kiện click trên button "Thanh toán"
//   checkoutBtn.addEventListener("click", function() {
//     // Cuộn đến form thanh toán ở cuối trang
//     paymentForm.scrollIntoView({ behavior: "smooth" });
//   });



///dấu x tắt form 
//   // Lấy phần tử biểu tượng đóng form
//   const closeBtn = document.getElementById("closeForm");

//   // Lấy phần tử form
//   const cartt = document.getElementById("cartt");

//   // Xử lý sự kiện click vào biểu tượng đóng
//   closeBtn.addEventListener("click", function() {
//     // Ẩn form khi click vào biểu tượng đóng
//     cartt.style.display = "none";
//   });

