window.onload = main;
function main() {
    const calculator = document.querySelector(".calculator");

    const display = calculator.querySelector(".calculator__display input");
    const keyboard = calculator.querySelectorAll(
        ".calculator__keyboard > .calculator__keys input"
    );

    let displayValue = "";
    let calculated = false;
    keyboard.forEach((key) => {
        key.addEventListener("click", () => {
            if (key.value === "=") {
                if (calculated) {
                    calculated = false;
                    setDisplayValue("");
                    return;
                }

                calculated = true;
                let result = eval(displayValue) || "Erro!";
                setDisplayValue(result);
                return;
            }

            setDisplayValue((displayValue += key.value));
        });
    });

    function setDisplayValue(value) {
        displayValue = value;
        display.value = displayValue.length === 0 ? "0" : displayValue;
    }
}
