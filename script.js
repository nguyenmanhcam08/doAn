let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main-image");
  let dots = document.getElementsByClassName("dot");

  // Ẩn tất cả các ảnh
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Chuyển đến ảnh kế tiếp
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Bỏ kích hoạt các chấm
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị ảnh hiện tại và thêm kích hoạt vào chấm tương ứng
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Thay đổi ảnh mỗi 2 giây
  setTimeout(showSlides, 1000);
}
