function circleclick() {
    var year = parseInt(document.getElementById('year').value);
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var date = new Date();
    var resultyear = date.getFullYear() - year;
    var resultmonth = date.getMonth() + 1 - month;
    var resultday = date.getDate() - day;
    var errormsg = document.getElementById("error");
    var test = document.querySelectorAll("#test");

    let bool = false;

    errormsg.style.whiteSpace = 'nowrap';

    
    if (!year || !day || !month) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "All fields are required";
    } else if (month > 12 || month < 1) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "Month should be between 1 and 12";
    } else if (year > date.getFullYear()) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "Year cannot be in the future";
    } else if (month === 2 && (day > 29 || (day > 28 && !isLeapYear(year)))) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "February has at most 29 days";
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "This month has at most 30 days";
    } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day > 31) {
        bool = true;
        errormsg.style.visibility = "visible";
        errormsg.innerHTML = "This month has at most 31 days";
    } else {
       
        errormsg.style.visibility = "hidden";
    }

    if (bool) {
        test[0].textContent = "--";
        test[1].textContent = "--";
        test[2].textContent = "--";
        return;
    }

    if ((month > date.getMonth() + 1 || (month === date.getMonth() + 1 && day < date.getDate())) && month <= 12) {
        resultmonth = resultmonth + 12;
        resultyear = resultyear - 1;
    }

    if (day > date.getDate() && month <= 12) {
        resultmonth = resultmonth - 1;
        resultday = resultday + daysInMonth(date.getMonth() + 1, date.getFullYear());
    }

    test[0].textContent = resultyear;
    test[1].textContent = resultmonth;
    test[2].textContent = resultday;

    if (bool) {
        test[0].textContent = "--";
        test[1].textContent = "--";
        test[2].textContent = "--";
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(month, year) {
    const monthLengths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    return monthLengths[month];
}
