const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  const currentDate = new Date();
  const selectedDate = new Date(birthdayValue);

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else if (selectedDate > currentDate) {
    resultEl.innerText = "Please Enter a Valid date";
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = age;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  
  let ageYears = currentDate.getFullYear() - birthdayDate.getFullYear();
  
  return `You are ${ageYears} years old`;
}

btnEl.addEventListener("click", calculateAge);
