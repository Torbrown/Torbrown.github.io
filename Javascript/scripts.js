const toggle = document.getElementsByClassName('toggle')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

toggle.addEventListener('click', () => {
  navlinks.classList.toggle('active')
})
