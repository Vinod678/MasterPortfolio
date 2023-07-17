
/* Add JavaScript to handle the scroll event and toggle the "scrolled" class on the navbar */

// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".navbar");
//   if (window.pageYOffset > 0) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });


/* Add javascript to add active class and scroll to top on link click */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Add javascript to change navbar style when scrolled */
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     document.querySelector('.navbar').classList.add('scrolled');
//     document.querySelectorAll('section').forEach(section => {
//       section.classList.add('scrolled');
//     });
//   } else {
//     document.querySelector('.navbar').classList.remove('scrolled');
//     document.querySelectorAll('section').forEach(section => {
//       section.classList.remove('scrolled');
//     });
//   }
// });







let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', function () {
    navbar.classList.add('move');
    section.classList.add('move');
  });
});







// Get the button
const topIcon = document.querySelector("#top-icon");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // If the scroll position is 40cm or more, show the button
  if (scrollY > 400) {
    topIcon.classList.remove("hidden");
    topIcon.classList.add("visible");
  } else {
    topIcon.classList.remove("visible");
    topIcon.classList.add("hidden");
  }
});

// Listen for click events on the button
topIcon.addEventListener("click", () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// pop-up box for workexperience more button
function showMessage1() {
  alert("Additional information about this job experience.");
}




// View More button in description paragraph in workexperience

document.getElementById("view-more-link1").addEventListener("click", function (event) {
  event.preventDefault();
  var x = document.getElementsByClassName("view-more1");
  var link = document.getElementById("view-more-link1");
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      link.innerHTML = "View Less";
    } else {
      x[i].style.display = "none";
      link.innerHTML = "View More";
    }
  }
});


document.getElementById("view-more-link2").addEventListener("click", function (event) {
  event.preventDefault();
  var x = document.getElementsByClassName("view-more2");
  var link = document.getElementById("view-more-link2");
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      link.innerHTML = "View Less";
    } else {
      x[i].style.display = "none";
      link.innerHTML = "View More";
    }
  }
});




// page refresh go back to top
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}




// var text1 = "Hello! Hi there, ";
// var delay = 50; // delay between characters, in milliseconds
// var hello = document.querySelector(".hello");

// function type1() {
//   if (text1.length > 0) {
//     hello.innerHTML += text1.charAt(0);
//     text1 = text1.substring(1);
//     setTimeout(type1, delay);
//   }
// }
// type1();



// var text2 = "I'm Vinod Yedla";
var text2 = " Vinod Yedla";
var delay = 150; // delay between characters, in milliseconds
var hello_name = document.querySelector(".hello_name span");

function type2() {
  if (text2.length > 0) {
    hello_name.innerHTML += text2.charAt(0);
    text2 = text2.substring(1);
    setTimeout(type2, delay);
  }
}
setTimeout(type2, 200);
// type2();


// skills
// let skillBars = document.querySelectorAll('.skill-bar');

// skillBars.forEach((skillBar) => {
//   let skillPercentage = skillBar.dataset.percentage;
//   skillBar.style.width = skillPercentage + '%';
// });









//skills section animation works only when it comes
const skillsSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-per');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(skillBar => {
        skillBar.classList.add('fill');
      });
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(skillsSection);




// CourseBox random colors generate
// var courseBoxes = document.getElementsByClassName("course-box");
// for (var i = 0; i < courseBoxes.length; i++) {
//     courseBoxes[i].style.backgroundColor = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
// }






// Typing text tech-obsessed1,2,3
const texts = ['Tech-obsessed', 'Trouble-Shooter', 'Google-Ling'];
  let index = 0;

  setInterval(() => {
    const typingText = document.querySelector('.typing-text');
    if (index === texts.length) {
      index = 0;
    }
    typingText.textContent = texts[index];
    index++;
  }, 2000);





  // Contact -Form EmailJS

  function SendMail(){
    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      phone_number: document.getElementById("phone").value,
      message: document.getElementById("message").value
    }
    emailjs.send("service_cbbf4ra___","template_0ps3qfo___",params )
    // .then(function (res){
    //   getElementById("success-message").style.display = "block";
      // alert("Success!" + res.status);
    // })
    document.getElementById("success-message").style.display = "block";
  }

  // function SendMail() {
  //   document.getElementById("container-form").style.display = "none";
  //   document.getElementById("success-message").style.display = "block";
  // }
  


  // new header 
  // hamburger = document.querySelector(".hamburger");
  //       nav = document.querySelector("nav");
  //       hamburger.onclick = function() {
  //           nav.classList.toggle("active");
  //       }
// Nav disappear ,when user clicked on any <a>



  // JavaScript code to handle mobile menu toggle
// JavaScript code to handle mobile menu toggle
// document.addEventListener('DOMContentLoaded', function() {
//   var menuToggle = document.querySelector('.menu-toggle');
//   var menuContent = document.querySelector('.menu-content');
//   var menuClose = document.querySelector('.menu-close');
//   var mobileMenu = document.querySelector('.mobile-menu');

//   menuToggle.addEventListener('click', function() {
//     mobileMenu.classList.add('open');
//   });

//   menuClose.addEventListener('click', function() {
//     mobileMenu.classList.remove('open');
//   });

//   document.addEventListener('click', function(event) {
//     if (!mobileMenu.contains(event.target) && !event.target.classList.contains('menu-toggle')) {
//       mobileMenu.classList.remove('open');
//     }
//   });
// });



// nav bar

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}


