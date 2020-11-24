var images = ["TaranBitmoji.png", "Image-1.png", "Image-1 (1).png", "Image 1 (2).png"];
var i = 0;
function nextSlide() {
    document.getElementById("pic").innerHTML = images[i];
    i = i + 1;
}