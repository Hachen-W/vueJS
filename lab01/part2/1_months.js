const ASK_MONTH = "Input number of a month: "
const MONTH_NAMES = ["January", "February", "March", "April",
                        "May", "June", "July", "August",
                        "September", "October", "November", "December"
]

function isValidMonth(month) {
    const numMonth = Number(month); // 5.5!!!
    return !isNaN(numMonth) && numMonth >= 1 && numMonth <= 12;
}

function process() {
    let month_number = Number(prompt(ASK_MONTH))
    if (isValidMonth(month_number)) {
        alert(MONTH_NAMES[month_number - 1])
    } else {
        alert("Некорректный номер месяца")
    }
}

process()