console.log("join")


let icons = document.querySelectorAll(".change-page");
let load = document.getElementById("loader")

icons.forEach(icon => {
    icon.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        icon.target = e.currentTarget.getAttribute("href");
        document.body.classList.add("loading")
        load.style.display="block";
        console.log("clicked")

        setTimeout(() => {
            const page = icon.getAttribute("data-link")
            if (page) {
                window.location.href = page;
            }
        }, 2000);
    });
});


/*---------------image slider for home section ------------------*/

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
slides.forEach(slide => slide.classList.remove("active"))  
slides[index].classList.add("active")  
index = (index +1) % slides.length;
}

setInterval(showSlide, 3000);


/*---------------Toggle Button For Mobile OR Tablet Menu Section section ------------------*/

// let toggleButton = document.getElementById("toggle-btn");
// let menu = document.querySelector(".menu");
// let dropDown = document.querySelector(".dropbtn");
// let dropDownContent = document.querySelector(".dropdowncontent")

// toggleButton.addEventListener("click", function () {
//   menu.classList.toggle("active");

//   console.log("heello")
//   let icon = this.querySelector("i");
//   if (menu.classList.contains("active")) {
//     icon.classList.remove("fa-bars")
//     icon.classList.add("fa-solid", "fa-xmark")
//   }else{
//     icon.classList.remove("fa-solid", "fa-xmark");
//     icon.classList.add("fa-bars");
//   }
// });

// dropDown.addEventListener("click", function (e) {
//   e.preventDefault();
//   dropDownContent.classList.toggle("active")
// });




document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-btn");
  const menu = document.querySelector(".menu");
  const dropDown = document.querySelector(".dropbtn");
  const dropDownContent = document.querySelector(".dropdowncontent");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active");

    let icon = this.querySelector("i");
    if (menu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-solid", "fa-xmark");
    } else {
      icon.classList.remove("fa-solid", "fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Mobile click dropdown
  if (dropDown && dropDownContent) {
    dropDown.addEventListener("click", function (e) {
      e.preventDefault();
      dropDownContent.classList.toggle("active");
    });
  }
});




















// this JS use for subIndex

let btns = document.querySelectorAll(".question-btn");
let answers = document.querySelectorAll(".answer");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let isVisible = answers[index].classList.contains("show");

    // sab answers hide karo
    answers.forEach((ans, i) => {
      ans.classList.remove("show");
      btns[i].querySelector("i").classList.remove("fa-chevron-up");
      btns[i].querySelector("i").classList.add("fa-chevron-down");
    });

    // agar pehle se visible tha to sirf hide rakho
    if (!isVisible) {
      answers[index].classList.add("show");
      btn.querySelector("i").classList.remove("fa-chevron-down");
      btn.querySelector("i").classList.add("fa-chevron-up");
    }
  });
});





















// let btns =document.querySelectorAll(".question-btn")

// btns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         let displayContent = document.querySelectorAll(".answer")
//         let allIcon = document.querySelectorAll(".question-btn i")

//         displayContent.forEach(display => display.style.display = "none"); 
//         displayContent.forEach(btn => {
//             let icon = btn.querySelector(".question-btn")
//             icon.classList.remove("fa-chevron-up")
//             icon.classList.add("fa-chevron-down")
//         });
        
//         displayContent[index].style.display = "block";
//         let icon = btn.querySelector("i")
//         icon.classList.remove("fa-chevron-down")
//         icon.classList.add("fa-chevron-up")
//     });
// });




// btn.addEventListener("click", ()=>{
// if (displayContent.style.display === "none") {
//     displayContent.style.display = "block";
//     btn.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Hide`;
// }else{
//     displayContent.style.display = "none";
//     btn.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Show`;
// }
// });






















































//--------------------- This JS use For ImageDetail Index File --------------//


const parms = new URLSearchParams (location.search);
const img = parms.get("img");

if (img) {
  document.getElementById("showImage").src = img;
}
