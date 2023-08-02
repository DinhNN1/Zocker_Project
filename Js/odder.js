
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
// Lấy thông tin 
function info() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const tinh = document.getElementById("provinceSelect").value;
    const huyen = document.getElementById("districtSelect").value;
    const phuong = document.getElementById("phuong").value;
    const diachi = document.getElementById("add").value;
    const ghichu = document.getElementById("textarea").value;
  
    const userInfo = {
      name: name,
      phone: phone,
      tinh: tinh,
      huyen: huyen,
      phuong: phuong,
      diachi: diachi,
      ghichu: ghichu,
    };
  
    
document.getElementById("userInfo").textContent = JSON.stringify(userInfo, null, 1);
}



/// button thanh toán 


































//   // Sự kiện khi chọn tỉnh
//   $("#provinceSelect").on("change", function() { //gán sự kiện change cho thẻ id
//     const tinh = $(this).val(); // lấy gtri tỉnh = cách dùng val()
//     const huyen = $("#districtSelect");

//     // Xóa các option hiện tại trong danh sách huyện
//     huyen.empty();

//     // Thêm option "Chọn huyện" để cho người dùng chọn lại
//     huyen.append(new Option("--Huyện--", ""));

//     if (tinh) {
//       // Lấy danh sách huyện tương ứng với tỉnh đã chọn
//       const districts = data[tinh];

//       // Thêm các option huyện vào danh sách huyện
//       districts.forEach(district => {
//         huyen.append(new Option(district, district));
//       });
//     }
//   });