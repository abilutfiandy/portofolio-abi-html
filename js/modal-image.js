document.addEventListener("DOMContentLoaded", function () {
  // ambil semua gambar yang digunakan untuk memicu modal
  const images = document.querySelectorAll("#project .card-img-top");

  // Tambahkan event Listener pada setiap gambar
  images.forEach((image) => {
    image.addEventListener("click", function () {
      // ambil Url gambar yang di klik
      const imageUrl = this.getAttribute("src");

      // ambil elemen gambar di dalam modal
      const modalImage = document.getElementById("modalImage");

      // stel src modal dengan url gambar yang di klik
      modalImage.setAttribute("src", imageUrl);
    });
  });
});
