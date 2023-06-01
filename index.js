
calculator_screen = document.getElementById("spanni")
mathbuttonlist = document.querySelectorAll(".calculator-mathbutton")
console.log(mathbuttonlist)
let mathBtnsArr = Array.from(mathbuttonlist)
console.log(mathBtnsArr)

// DEFAULT VALUES AS PAGE LOADS
let placeholder = "0";
calculator_screen.textContent = placeholder

// event listeners for math button
for (let i = 0, len = mathBtnsArr.length; i < len; i++) {
    console.log(mathBtnsArr[i])
    mathBtnsArr[i].addEventListener("click", () => {
        
        // BUTTON VALUE
        numberValue = mathBtnsArr[i].textContent
        console.log(numberValue)

        changePlaceholder(numberValue)

        //mathBtnsArr[i]["children"][1].textContent
    })
}

function changePlaceholder (givenValue) {
    if(calculator_screen.textContent == 0) {
        calculator_screen.textContent = givenValue
    }
    else {
        calculator_screen.textContent = calculator_screen.textContent + givenValue
    }
    
}


function deleteANumber () {
    if(calculator_screen.textContent == 0) {

    }
    else {
        calculator_screen.textContent = calculator_screen.textContent.slice(0, -1)
        if(!calculator_screen.textContent) {
            calculator_screen.textContent = 0
        }
    }
}

document.getElementById("deletebutton").addEventListener("click", () => {
    deleteANumber()
})