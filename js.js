
//xử lý slide banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (x.length === 0) return; // Kiểm tra nếu không có hình ảnh nào

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// xử lý slide product
document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll(".carousel_product");

  carousels.forEach(carousel => {
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const items = carousel.querySelector(".items");
    const totalItems = items.children.length;
    let currentIndex = 0;

    function updateCarousel() {
      const itemWidth = items.children[0].offsetWidth;
      const newPosition = -currentIndex * itemWidth;
      items.style.transform = `translateX(${newPosition}px)`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalItems - 1;
    }

    // Xử lý sự kiện khi click nút prev
    prevBtn.addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
      }
    });
    // Xử lý sự kiện khi click nút next
    nextBtn.addEventListener("click", function() {
      if (currentIndex < totalItems - 1& currentIndex<9) {
        currentIndex += 1;
        updateCarousel();
      }
    });
    // Khởi tạo trạng thái ban đầu của carousel
    updateCarousel();
  });
});

// var swiper = new Swiper(".swiper-container", {
//   pagination: ".swiper-pagination",
//   paginationClickable: true,
//   parallax: true,
//   speed: 600,
//   autoplay: 3500,
//   loop: true,
//   grabCursor: true
// });

$(function() {
  var $image = $('.product-image .image');
  var currImage = '';

  $('.product-thumbnails img').on('click', function() {
    var newImage = $(this).attr("src");
    $image.css('background-image', 'url(' + newImage + ')');
    currImage = '';
  });

  $('.product-thumbnails img').hover(function() {
    if (!currImage) {
      currImage = $image.css('background-image');
    }
    var newImage = $(this).attr("src");
    $image.css('background-image', 'url(' + newImage + ')');
  }, function() {
    if (currImage) {
      $image.css('background-image', currImage);
      currImage = '';
    }
  });

  // Zoom in on mouseover and zoom out on mouseout
  $image.on({
    mouseover: function() {
      $(this).css('transform', 'scale(2)');
    },
    mouseout: function() {
      $(this).css('transform', 'scale(1)');
    },
    mousemove: function(e) {
      var offsetX = (e.pageX - $(this).offset().left) / $(this).width() * 100;
      var offsetY = (e.pageY - $(this).offset().top) / $(this).height() * 100;
      $(this).css('transform-origin', offsetX + '% ' + offsetY + '%');
    }
  });
});





