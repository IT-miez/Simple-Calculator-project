
calculator_screen = document.getElementById("spanni")
mathbuttonlist = document.querySelectorAll(".calculator-mathbutton")
console.log(mathbuttonlist)
let mathBtnsArr = Array.from(mathbuttonlist)
console.log(mathBtnsArr)

operatorbuttonlist = document.querySelectorAll(".operator-button")
console.log(operatorbuttonlist)
let operatorBtnsArr = Array.from(operatorbuttonlist)
console.log(operatorBtnsArr)

const prevOperand = document.getElementById("spanni2")
const currentOperand = document.getElementById("spanni")
console.log("SPANNI VALUE = "+currentOperand.text)

// DEFAULT VALUES AS PAGE LOADS
let placeholder = "0";
calculator_screen.textContent = placeholder

// CALCULATOR
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        console.log(this.currentOperandTextElement)

        this.clear()
    }

    clear() {
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete () {
        console.log(this.currentOperand)
        this.currentOperand = this.currentOperand.slice(0, -1)
        this.updateDisplay()
    }

    appendNumber (numberValue) {
        console.log("VAlue of currentoperand "+this.currentOperand)
        if(this.currentOperand == "0") {
            this.currentOperand = numberValue
        }
        else if(numberValue === "." && this.currentOperand.includes(".")) return
        else {
            console.log("CHANGE")
            console.log(this.currentOperand)
            this.currentOperand = this.currentOperand + numberValue
            //calculator_screen.textContent = this.currentOperand
        }
    }

    chooseOperation(operator) {
        if(this.currentOperand === "") return
        if(this.previousOperand !=="") {
            this.compute()
        }

        this.operation = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) {
            console.log("!!!!!!NOT A NUMBER ERROR !!!!!!!")
            return
        }
        switch (this.operation) {
            case "+":
                computation = prev + current
                break

            case "-":
                computation = prev - current
                break

            case "/":
                computation = prev / current
                break

            case "*":
                computation = prev * current
                break
            default:
                console.log("Computation error")
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }

    getDisplayNumber(number) {
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ""
        return floatNumber.toLocaleString("en")
    }

    updateDisplay() {
        this.currentOperandTextElement.textContent = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextElement.textContent = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else {
            this.previousOperandTextElement.textContent = ""
        }
        
        //console.log(this.currentOperandTextElement.textContent + " = CURRENTOPERANDTEXTELEM")
        //console.log(this.previousOperandTextElement.textContent + "= PREVOPERANDTEXTELEM")
    }

}

const calculator = new Calculator(prevOperand, currentOperand)


// EVENT LISTENERS: MATH BUTTON VALUES
for (let i = 0, len = mathBtnsArr.length; i < len; i++) {
    console.log(mathBtnsArr[i])
    mathBtnsArr[i].addEventListener("click", () => {
        
        // BUTTON VALUE
        numberValue = mathBtnsArr[i].textContent
        console.log(numberValue)

        //changePlaceholder(numberValue)
        calculator.appendNumber(numberValue)
        calculator.updateDisplay()

        //mathBtnsArr[i]["children"][1].textContent
    })
}

// EVENT LISTENERS: OPERATOR BUTTON VALUES
for (let i = 0, len = operatorBtnsArr.length; i < len; i++) {
    console.log(operatorBtnsArr[i])
    operatorBtnsArr[i].addEventListener("click", () => {
        
        // BUTTON VALUE
        operatorValue = operatorBtnsArr[i].textContent

        calculator.chooseOperation(operatorValue)
        console.log(operatorValue)
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
            calculator_screen.textContent = "0"
        }
    }
}

document.getElementById("deletebutton").addEventListener("click", () => {
    //deleteANumber()
    console.log("Deleting a number")
    calculator.delete()
})

document.getElementById("resetbutton").addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})

document.getElementById("equalbutton").addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})













