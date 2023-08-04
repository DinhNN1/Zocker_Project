// <!-- thêm sản phẩm vào giỏ hàng  -->
    
        // Lấy tất cả các nút "Thêm vào giỏ hàng"
        const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

        // set sự kiện click trên các nút "Thêm vào giỏ hàng"
        addToCartBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
                // Lấy thông tin sản phẩm từ thuộc tính data của nút "Thêm vào giỏ hàng"
                const productName = this.parentElement.parentElement.querySelector(".card-text").textContent;
                const productPrice = parseInt(this.parentElement.querySelector(".btn-primary").textContent.replace(/[^0-9]/g, ""));  // replace(/[^0-9]/g, "") tìm và loại bỏ tất cả kí tự k phải là số 0-9

                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
                const cartTable = document.getElementById("cart"); // lấy tt trong id cart 
                const rows = cartTable.getElementsByTagName("tr"); // lấy tt trong thẻ tr 
                let productExists = false; // kt sản phẩm có trong giỏ hàng k 

                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    if (row.cells[0].textContent === productName) { // kt nếu sp tồn tại trong giỏ hàng sẽ tiến hành update số lượng
                        productExists = true; // đánh dấu sp đã tồn tại 
                        const quantityInput = row.querySelector(".product-quantity"); // lấy phần tử .. để lấy gtri số lượng sp trong giỏ hàng 
                        const quantity = parseInt(quantityInput.value) + 1;  // update sp bằng cách + 1
                        quantityInput.value = quantity;  // gán gtri để cập nhật 
                        updateCartItem(row);  // cập nhật tt sp 
                        break;
                    }
                }

                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm một hàng mới
                if (!productExists) {   // kt xem sp trong giỏ hàng chưa
                    const newRow = cartTable.insertRow(-1); // tạo 1 dòng biến mới và để cuối hàng vì (-1)
                    const cellName = newRow.insertCell(0);
                    const cellPrice = newRow.insertCell(1);
                    const cellQuantity = newRow.insertCell(2);
                    const cellDiscount = newRow.insertCell(3);
                    const cellTotal = newRow.insertCell(4);
                    const cellDiscountedTotal = newRow.insertCell(5);
                    const cellCheckbox = newRow.insertCell(6);



                    cellName.innerHTML = productName; //gán tên sp và hiển thị 
                    cellPrice.innerHTML = productPrice.toLocaleString() + " VNĐ";
                    cellQuantity.innerHTML = "<input type='number' value='1' min='1' class='product-quantity' onchange='updateCartItem(this.parentElement.parentElement)'>";
                    cellDiscount.innerHTML = "<input type='number' value='0' min='0' max='100' class='product-discount' onchange='updateCartItem(this.parentElement.parentElement)'>";
                    cellTotal.innerHTML = productPrice.toLocaleString() + " VNĐ";
                    cellDiscountedTotal.innerHTML = productPrice.toLocaleString() + " VNĐ";
                    cellCheckbox.innerHTML = "<input type='checkbox' class='product-checkbox' onchange='updateCartTotal();removeProduct(this);'>";

                    


                    // Hàm xử lý khi người dùng bỏ chọn ô checkbox sản phẩm
                    function removeProduct(checkbox) {
                        // Nếu checkbox không được chọn, loại bỏ hàng chứa sản phẩm khỏi giỏ hàng
                        if (!checkbox.checked) {
                            const row = checkbox.parentElement.parentElement;
                            row.remove();

                            // Cập nhật lại tổng tiền trong giỏ hàng
                            updateCartTotal();
                        }
                    }


                    // Cập nhật tổng tiền trong giỏ hàng
                    updateCartTotal();
                }
            });
        });

        // Hàm cập nhật một mục giỏ hàng
        function updateCartItem(row) { // cập nhật ttin sp trong giỏ hàng 
            const quantity = parseInt(row.querySelector(".product-quantity").value); //lấy giá trị 
            const price = parseInt(row.cells[1].textContent.replace(/[^0-9]/g, ""));
            const discount = parseInt(row.querySelector(".product-discount").value);

            const totalValue = quantity * price;
            const discountedTotalValue = totalValue - (totalValue * discount) / 100;


            row.cells[4].textContent = totalValue.toLocaleString() + " VNĐ";
            row.cells[5].textContent = discountedTotalValue.toLocaleString() + " VNĐ";

            // Cập nhật tổng tiền trong giỏ hàng
            updateCartTotal();
        }

        // Hàm cập nhật tổng tiền trong giỏ hàng
        function updateCartTotal() {
            const cartTable = document.getElementById("cart");
            const rows = cartTable.getElementsByTagName("tr");
            let total = 0;

            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const discountedTotalValue = parseInt(row.cells[5].textContent.replace(/[^0-9]/g, ""));
                total += discountedTotalValue;
            }

            document.getElementById("tongTien").textContent = "Tổng tiền: " + total.toLocaleString() + " VNĐ";
        }
    


















// function tinhtien(){
//     var table = document.getElementById('card');
//     var rows = table.getElementsByTagName('tr');
//     var total = 0;

//     for (var i = 1; i < rows.length; i++){
//         var cells = rows[i].getElementsByTagName('td');
//         var price = parseFloat(cells[1].textContent.replace('VNĐ','').replace('.', ''));    
//         var quantity = parseInt(cells[2].querySelector('.soluong').value);
//         var diss = parseFloat(cells[3].querySelector('.discount').value);
//         var tientruoc = price * quantity;
//         cells[4].textContent = tientruoc.toLocaleString() + 'VNĐ';


//         var erro = document.getElementById('err'+i);

//         if (diss <= 100) {
//             var discount = tientruoc * (diss / '100');
//             erro.style.display = 'none';
            
//         }else{
            
//             erro.textContent = "Discount không vượt quá 100";
//             erro.style.display = 'block';
            
//         }
        

//         var thanhtien = tientruoc - discount;
//         cells[5].textContent = thanhtien.toLocaleString() + 'VNĐ';

//         total += thanhtien;
//     }
//     var tongTien = document.getElementById('tongTien');
//     tongTien.textContent = total.toLocaleString() + 'VNĐ';
   
   


// }




// // thêm vào giỏ hàng 

