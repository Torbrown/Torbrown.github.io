const toggle = document.getElementsByClassName('toggle')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

toggle.addEventListener('click', () => {
  navlinks.classList.toggle('active')
})

// function myFunction() {
//   var x = document.getElementById("navbar");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
