// var x = document.querySelector('')
// x.addEventListener()

// ! EVENTS :{

// 1- click
// 2- dblclick
// 3- contextmenu ====> right click
// 4- mousemove
// 5- mouseup
// 6- mousedown
// 7- mouseenter ====> when my mouse enters the area
// 8- mouseleave ====> when my mouse leaves the area
// 9- drag ====> when u drag the img or anythibg u can drag and also while dragging the function will be excuted
// 10- keyup
// 11- keydown
// 12- keypress ====> writing keys
// 13- for inputs : 1- input ===> changing the value of the input
//                  2- focus ===>
//                  3- blur  ===> the oppsite of focus
// 14- submit ====> it makes the website reloads and its not good so we prevent that action by using preventDefault() :
// var x = document.querySelector("form");
// document.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("hii");
// });
// 15-
// var x = document.querySelector("img");
// document.addEventListener("click", function (e) {
//  var x = e.target.getAttribute('src');   ====> getting any attribute
//  var x = e.target.setAttribute('src', "images/1.jpg");   ====> setting any attribute
//   console.log("x");
// });
// 16-
// 17-

// ! }

// var x = document.querySelector('')
// document.addEventListener('keydown', function(e){
//     console.log(e);
// })

// var x = document.querySelectorAll(".item");
// for (var i = 0; i < x.length; i++) {
//   x[i].addEventListener("click", function (e) {
//     if (e.target.classList.contains("bg-danger")) {
//       e.target.classList.replace("bg-danger", "bg-info");
//     } else {e.target.classList.replace("bg-info", "bg-danger");}
//   });
// }

// for (var i = 0; i < 50; i++) {
//   var ele = document.createElement("img");

//   ele.setAttribute("src", "css/chefs-1.jpg");
//   ele.setAttribute("class", "w-25");                    =====> adding elements in html
//   ele.setAttribute("alt", "de7k");
//   ele.classList.add("rounded-circle", "test", "");
//   document.body.appendChild(ele);
// }

// ! ex 1

// var x = document.querySelector("img");
// document.addEventListener("mousemove", function (e) {
//   x.style.top = e.clientY + "px";
//   x.style.left = e.clientX + "px";
//   console.log(e.clientY);
//   console.log(e.clientX);
// });

// ! ex 2

// var mainImage = document.getElementById("mainImage");
// var img = document.querySelectorAll(".item img");

// for (var i = 0; i < img.length; i++) {
//   img[i].addEventListener("click", function (e) {
//     var mySrc = e.target.getAttribute("src");
//     mainImage.setAttribute("src", mySrc);
//     console.log(mySrc);
//   });
// }

// ! ex 3
var images = Array.from(document.querySelectorAll(".item img")); // !!!!!!!!!!!!!!!!!!!!!!!!
var lightBoxContainer = document.querySelector("#lightBoxContainer");
var lightBox = document.getElementById("lightBox");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentIndex;
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-none", "d-flex");
    var mySrc = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${mySrc})`;
    currentIndex = images.indexOf(e.target);
  });
}
close.addEventListener("click", function () {
  lightBoxContainer.classList.replace("d-flex", "d-none");
});
// ! sol 2
function slide(step) {
  currentIndex += step; // (1, -1)
  
  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  var src = images[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${src})`;
}
next.addEventListener("click", function(){
    slide(1)
})
prev.addEventListener("click", function(){
    slide(-1)
})
// ! sol 1
// next.addEventListener("click", function () {
  //   currentIndex++;
  // if (currentIndex == images.length) {
  //     currentIndex = 0;
  // }

  //   var src = images[currentIndex].getAttribute("src");
  //   lightBox.style.backgroundImage = `url(${src})`;
// });
// prev.addEventListener("click", function () {
  //   currentIndex--;
  //   if (currentIndex < 0) {
  //     currentIndex = images.length - 1;
  //   }
  //   var src = images[currentIndex].getAttribute("src");
  //   lightBox.style.backgroundImage = `url(${src})`;
// });
