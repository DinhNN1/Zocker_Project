// THÔNG TIN GIAO HÀNG 

/// CHọn tỉnh Huyện 

const data = {
    "HN": ["Quận Hoàng Mai ", "Quận Hai Bà Trưng", "Quận Cầu Giấy "],
    "HCM": ["Quận 1", "Quận 2", "Quận Tân Bình"],
    "TN": ["Gang Thép", "Đồng Quang", "Sông Công"],
};

function chonTinhHuyen() {
    const provinceSelect = document.getElementById("provinceSelect");
    const districtSelect = document.getElementById("districtSelect");
    const tinh = provinceSelect.value;

    //xóa huyện
    while (districtSelect.options.length > 0) {
        districtSelect.remove(0);
    }

    // Thêm huyện cho chọn lại 
    districtSelect.add(new Option("--Huyện--", ""));
    if (tinh) {
        const districts = data[tinh];
        //Thêm op huyện vào ô huyện 
        districts.forEach(district => {
            districtSelect.add(new Option(district, district))
        });
    }
}

// thêm sự kiện nghe cho thẻ selec tỉnh 
const provinceSelect = document.getElementById("provinceSelect");
provinceSelect.addEventListener('change', chonTinhHuyen)

// ---------------------------------------------------------    

// tạo id duy nhất 
function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5);
    return timestamp + randomPart;
};

// Lấy thông tin
function info() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const tinh = document.getElementById("provinceSelect").value;
    const huyen = document.getElementById("districtSelect").value;
    const phuong = document.getElementById("phuong").value;
    const diachi = document.getElementById("add").value;
    const ghichu = document.getElementById("textarea").value;
    const customerId = generateUniqueId();
    document.getElementById('customerId').value = customerId;

    // Tính tổng tiền trong giỏ hàng
    let totalAmount = 0;
    const cartTable = document.getElementById("cart");
    const rows = cartTable.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const discountedTotalValue = parseInt(rows[i].cells[5].textContent.replace(/[^0-9]/g, ""));
        totalAmount += discountedTotalValue;
    }

    const userInfo = {

        name: name,
        phone: phone,
        tinh: tinh,
        huyen: huyen,
        phuong: phuong,
        diachi: diachi,
        ghichu: ghichu,
        ID: customerId,
        TOTAL: totalAmount.toLocaleString() + ' VNĐ', // Thêm trường tổng tiền vào userInfo
    };
    


    document.getElementById("userInfo").textContent = JSON.stringify(userInfo, null, 1);

   
}



/// button thanh toán 

































