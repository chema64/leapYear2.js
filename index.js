function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    var leapYear = "";
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return leapYear = "Leap year.";
    }else if(year % 4 === 0 && year % 100 !== 0 ) {
        return leapYear = "Leap year."
    }else if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        return leapYear = "Not leap year."
    }else if(year % 4 !== 0) {
        return leapYear = "Not leap year.";
    }
}

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  document.querySelector("#title1").innerHTML = "2000 is " + isLeap(2000);
  document.querySelector("#title2").innerHTML = "2400 is " + isLeap(2400);
  document.querySelector("#title3").innerHTML = "1989 is " + isLeap(1989);
  document.querySelector("#title4").innerHTML = "1948 is " + isLeap(1948);
  document.querySelector("#title5").innerHTML = "1998 is " + isLeap(1998);
  document.querySelector("#title6").innerHTML = "2020 is " + isLeap(2020);
  document.querySelector("#title7").innerHTML = "2024 is " + isLeap(2024);
}