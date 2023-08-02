
  // Lấy phần tử biểu tượng đóng form
  const closeBtn = document.getElementById("closeForm");

  // Lấy phần tử form
  const formContainer = document.getElementById("formContainer");

  // Xử lý sự kiện click vào biểu tượng đóng
  closeBtn.addEventListener("click", function() {
    // Ẩn form khi click vào biểu tượng đóng
    formContainer.style.display = "none";
  });

