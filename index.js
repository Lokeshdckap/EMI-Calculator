const amount = document.querySelector(".LoanAmount")
const interest = document.querySelector(".Interest")
const tenure = document.querySelector("#Tenure")
const  form = document.querySelector("#form")
const btn = document.querySelector(".submit")
const total = document.querySelector(".total")
const totalInter = document.querySelector(".totalInter")
const totalAmount = document.querySelector(".totalAmount")
const range = document.querySelectorAll(".range")
const year = document.querySelector(".hide")
const month = document.querySelector(".hide1")
const li = document.querySelectorAll("li")
const h4 = document.querySelector("h4")

year.classList.add("show")

month.addEventListener("click",()=>{
   if(year.classList.contains("show")){
    year.classList.remove("show")
    month.classList.add("show")
    tenure.value = tenure.value*12

    }
})
year.addEventListener("click",()=>{
    if(month.classList.contains("show")){
      year.classList.add("show")
      month.classList.remove("show")
      tenure.value = Math.round(tenure.value/12)
}
})



form.addEventListener("click",(e)=>{
  e.preventDefault()

  let P = Number(amount.value);
  const r = Number(interest.value)/12/100;
  const n = Number(tenure.value*12);

if(year.classList.contains("show")){
let EMI = (P*r*Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
let totalInterest =(EMI * n) - P;
let totalPayment  = totalInterest + parseFloat(P);
total.innerText = "₹"+" "+String(Math.round(EMI).toLocaleString())
totalInter.innerText= "₹"+" "+String(Math.round(totalInterest).toLocaleString());
totalAmount.innerText="₹"+" "+String(Math.round(totalPayment).toLocaleString()) ;
}

if(month.classList.contains("show")){
  let P = Number(amount.value);
  const r = Number(interest.value)/12/100;
  const n = Number(tenure.value)
  let EMI = (P*r*Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
  let totalInterest =(EMI * n) - P;
  let totalPayment  = totalInterest + parseFloat(P);
  total.innerText = "₹"+" "+String(Math.round(EMI).toLocaleString());
  totalInter.innerText="₹"+" "+String(Math.round(totalInterest).toLocaleString());
  totalAmount.innerText="₹"+" "+String(Math.round(totalPayment).toLocaleString());
  }
})


amount.value = 500000;
interest.value=3;
tenure.value= 2;

  let P = Number(amount.value);
  const r = Number(interest.value)/12/100;
  const n = Number(tenure.value*12)
  let EMI = (P*r*Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
  let totalInterest =(EMI * n) - P;
  let totalPayment  = totalInterest + parseFloat(P);
  total.innerText = "₹"+" "+String(Math.round(EMI).toLocaleString())
  totalInter.innerText="₹"+" "+String(Math.round(totalInterest).toLocaleString());
  totalAmount.innerText="₹"+" "+String(Math.round(totalPayment).toLocaleString()) ;


for(let i=0;i<range.length;i++){
range[i].addEventListener("click",()=>{
    amount.value = range[0].value
    interest.value = range[1].value
    tenure.value = range[2].value
})
}
amount.addEventListener("keyup",()=>{
  range[0].value = amount.value
})
interest.addEventListener("keyup",()=>{
  range[1].value = interest.value
  })
tenure.addEventListener("keyup",()=>{
  range[2].value = tenure.value
  })
