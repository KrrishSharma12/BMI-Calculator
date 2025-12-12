const height=document.getElementsByClassName("height")[0]
const weight=document.getElementsByClassName("weight")[0]
const calculate=document.getElementsByClassName("calculate")[0]

const weightDetails=document.getElementsByClassName("health")[0]

const healthDetails=weightDetails.childNodes[1]
const bmiText=document.getElementById("bmiText")
console.log(bmiText);


function updateBMIGauge(bmi) {

    // update text
    document.getElementById("bmiText").textContent = "BMI = " + bmi;

    // convert BMI (0–40) → angle (0–180)
    let angle =0;
    if (bmi < 18.5) {
         weightDetails.style.color="red"
        weightDetails.innerText="⚠️ Body weight is too low - May indicate nutritional deficiency"
        angle = -60;   // yellow left
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
         weightDetails.style.color="green"
        weightDetails.innerText="💚 Ideal weight range - Lowest health risk "
        angle = 0;     // green center
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
            // yellow right
         weightDetails.style.color="red"
        weightDetails.innerText="⚠️ Higher-than-normal body weight - Increased risk of health issues"
        angle = 50;
    } 
    else if (bmi >= 30) {
         weightDetails.style.color="red"
         weightDetails.innerText="❗ Excessive body fat - Higher risk of heart disease, diabetes, etc."
        angle = 90;    // red rightmost
    }
    

    // rotate the indicator
    const needle = document.getElementById("indicator");
    needle.style.transition = "transform 1s ease";
    needle.setAttribute("transform", `rotate(${angle} 140 140)`);
}



const calculateBMI=()=>{
const weightValue=parseFloat(weight.value);
const heightValue=parseFloat(height.value);
const BMI=(weightValue/(heightValue*0.01)**2).toFixed(1);
console.log(typeof(BMI));


if(!isNaN(BMI))
 
updateBMIGauge(parseFloat(BMI))
else{ 
    bmiText.innerText="Error"
       weightDetails.innerText=""
}


}

calculate.addEventListener("click",()=>{
    calculateBMI()
})
