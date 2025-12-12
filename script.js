const height = document.getElementsByClassName("height")[0]
const weight = document.getElementsByClassName("weight")[0]
const calculate = document.getElementsByClassName("calculate")[0]
const result = document.getElementsByClassName("result")[0]
const weightDetails = document.getElementsByClassName("health")[0]
const button = document.getElementsByClassName("theme")[0]
const themebg = document.getElementsByClassName("themes")[0]
const resultSpan = result.childNodes[1]
const healthDetails = weightDetails.childNodes[1]

// Changing buttons according to theme
const toggleThemeButtons = () => {
    {
        if (document.body.classList.contains("dark")) {
            button.src = "./assets/light.svg"

        }
        else {
            button.src = "./assets/dark.svg"

        }
    }
}

// Setting Theme According to User choice
let storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    document.body.classList.add(storedTheme);
    toggleThemeButtons();
}

//Calculating BMI
const calculateBMI = () => {
    const weightValue = parseInt(weight.value);
    const heightValue = parseInt(height.value);
    const BMI = (weightValue / (heightValue * 0.01) ** 2).toFixed(1);

    result.style.display = 'block'
    if (!isNaN(BMI))

        resultSpan.innerText =`Your BMI is ${BMI}` 
    if (BMI < 18.5) {
        weightDetails.style.color = "red"
        weightDetails.innerText = "⚠️ Body weight is too low - May indicate nutritional deficiency"
    }
    else if (BMI > 18.5 && BMI < 24.9) {
        weightDetails.style.color = "green"
        weightDetails.innerText = "💚 Ideal weight range - Lowest health risk "
    }
    else if (BMI > 25 && BMI < 29.9) {
        weightDetails.style.color = "red"
        weightDetails.innerText = "⚠️ Higher-than-normal body weight - Increased risk of health issues"
    }
    else if (BMI > 30) {
        weightDetails.style.color = "red"
        weightDetails.innerText = "❗ Excessive body fat - Higher risk of heart disease, diabetes, etc."

    }
    else {
        resultSpan.innerText = "Error";
        weightDetails.innerText = ""
    }
    resultSpan.classList.add("animate");

setTimeout(() => {
    resultSpan.classList.remove("animate");
}, 50);

}

// Changing Theme 
button.onclick = () => {
    const theme = document.body.classList.toggle("dark")
    if (theme)
        localStorage.setItem("theme", "dark")
    else
        localStorage.setItem("theme", "light")
    toggleThemeButtons()

}


// calculating button 
calculate.addEventListener("click", () => {
    calculateBMI()
})
