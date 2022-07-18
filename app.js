let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let screen3 = document.querySelector(".screen3");
let numbers = document.querySelectorAll(".number")
let operations = document.querySelectorAll(".btn-yellow");
let clearAll = document.querySelector(".clear-all");
let clearEle = document.querySelector(".clear-ele");
let equel = document.querySelector(".btn-equel") 

let dis1 = "";
let dis2 = "";
let result = null;
let lastoperation = "";

if (screen2.innerHTML === "0" && screen3.innerHTML === "0") {
    operations.forEach((operation) => {
        operation.style.pointerEvents = "none"
    })
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        dis2 += number.innerHTML;
        screen2.innerHTML = dis2;
        if (e.target.innerHTML === ".") {
            e.target.style.pointerEvents = "none"
        }

        operations.forEach((operation) => {
            operation.style.pointerEvents = "auto"
        })
    })
})

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        numbers.forEach((number) => {
            if (number.innerHTML === ".") {
                number.style.pointerEvents = "auto"
            }
        })

        let nameoperation = operation.innerHTML;

        if (dis1 && dis2 && lastoperation) {
            mathOpera(lastoperation)
        }else {
            result = parseFloat(dis2);
        }
        
        lastoperation = operation.innerHTML;
        
        eval(nameoperation)
    })
})

function eval(name) {
    dis1 += `${parseFloat(dis2)} ${name} `;
    screen1.innerHTML = dis1;
    screen2.innerHTML = "";
    dis2 = "";
    screen3.innerHTML = result;
}

function mathOpera(opera) {
    if (opera === "X") {
        result = parseFloat(result) * parseFloat(dis2);
    }else if (opera === "%") {
        result = parseFloat(result) % parseFloat(dis2);
    }else if (opera === "/") {
        result = parseFloat(result) / parseFloat(dis2);
    }else if (opera === "-") {
        result = parseFloat(result) - parseFloat(dis2);
    }else if (opera === "+") {
        result = parseFloat(result) + parseFloat(dis2);
    }
}

equel.addEventListener("click", () =>{
    numbers.forEach((number) => {
        if (number.innerHTML === ".") {
            number.style.pointerEvents = "auto"
        }
    })
    mathOpera(lastoperation);
    eval();
    screen2.innerHTML = result;
    screen1.innerHTML = ""
    screen3.innerHTML = ""
    dis1 = ""
    dis2 = ""
})

clearAll.addEventListener("click", () => {
    screen2.innerHTML = "0";
    screen1.innerHTML = "0";
    screen3.innerHTML = "0";
    dis1 = "";
    dis2 = "";
})

clearEle.addEventListener("click", () => {
    screen2.innerHTML = "";
    dis2 = "";
});

window.addEventListener("keydown", (e) => {
    numbers.forEach((number) => {
        if (e.key === number.innerHTML) {
            number.click()
        }
    })

    operations.forEach((operation) => {
        if (operation.innerHTML === e.key) {
            operation.click()
        }else if (operation.innerHTML === e.key) {
            if (operation.textContent === "X") {
                operation.click()
            }
        }
    })

    if (e.key === "Enter" || e.key === "=") {
        equel.click()
    }
})