function isLeap(year) {
  year = Number(year);

  if (isNaN(year)) {
    console.log("Please enter a valid year");
    return;
  }
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

const year = prompt("Enter a year to see if it's a leap year");
isLeap(year);
