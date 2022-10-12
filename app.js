
const today = new Date()
const week = today.toLocaleString('en-us', {  weekday: 'long' });
const month= today.toLocaleString('default', {  month: 'long' });
const day = today.getDate()
const year = today.getFullYear();

const currentDate = `${week}, ${month} ${day}, ${year}`


document.getElementById('setDate').innerText = currentDate

const navToggle = document.getElementById('navToggle')
const navMobile = document.getElementById('navMobile')
// const navBurger = document.getElementById('navToggle').getAttributeNames('span')

// document.body.addEventListener('click', () => {
//     navMobile.classList.toggle('active')
// })

navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active')
    navToggle.classList.toggle('active')
})

function toggleLight() {
  const checkBox = document.getElementById("lightSwitch");
  const body = document.body;

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    body.classList.toggle('night');
    navMobile.classList.toggle('night');
  } else {
    body.classList.remove('night')
    navMobile.classList.remove('night');
  }
} 
