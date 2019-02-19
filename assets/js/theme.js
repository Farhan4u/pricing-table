/* ------------------------------------------------------- */
/* Global
/* ------------------------------------------------------- */


let mon = document.querySelector('.mon');
let year = document.querySelector('.year');
let pBox = document.querySelectorAll('.pricing-box');
let freePlanPrice = document.querySelector('.free-plan-price');
let premiumPlanPrice = document.querySelector('.premium-plan-price');
let unlimitedPlanPrice = document.querySelector('.unlimited-plan-price');

let freePlanBtn = document.querySelector('.free-plan-order-btn');
let premiumPlanBtn = document.querySelector('.premium-plan-order-btn');
let unlimitedPlanBtn = document.querySelector('.unlimited-plan-order-btn');

let deuration = document.querySelectorAll('.deuration');
console.log(deuration);


year.addEventListener('click', function () {

  year.classList.add('active');
  mon.classList.remove('active');
  pBox.forEach(item => item.classList.remove('monthly-plan-animate'));
  pBox.forEach(item => item.classList.add('year-plan'));
  freePlanPrice.innerHTML = "2";
  premiumPlanPrice.innerHTML = "599";
  unlimitedPlanPrice.innerHTML = "1000";
  deuration.forEach(item => item.innerHTML = "/ Year");
  freePlanBtn.href = "freeYearly.html";
  premiumPlanBtn.href = "premiumYearly.html";
  unlimitedPlanBtn.href = "unlimitedYearly.html";
  yearPlaning = true;
  
});


mon.addEventListener('click', function () {

        
  mon.classList.add('active');
  year.classList.remove('active');
  pBox.forEach(item => item.classList.add('monthly-plan-animate'));
  pBox.forEach(item => item.classList.remove('year-plan'));
  freePlanPrice.innerHTML = "0";
  premiumPlanPrice.innerHTML = "55";
  unlimitedPlanPrice.innerHTML = "90";
  deuration.forEach(item => item.innerHTML = "/ Month");
  freePlanBtn.href = "freeMonthly.html";
  premiumPlanBtn.href = "premiumMonthly.html";
  unlimitedPlanBtn.href = "unlimitedMonthly.html";
  monthlyPlaning = true;

});

