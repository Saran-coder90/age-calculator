let outerDiv=document.querySelector(".outer");

let day = document.getElementById("dd");
let month=document.getElementById("mm");
let year =document.getElementById("yy");
let submit=document.getElementById("sub");
let resultYear=document.querySelector(".years").querySelector("#resultYear");
let resultMonth=document.querySelector("#resultMonth");
let resultDays=document.querySelector("#resultday");

let element1=document.createElement("p");
element1.id="error1";
let element2=document.createElement("p");
element2.id="error2";
let element3=document.createElement("p");
element3.id="error3";

day.addEventListener("input",change1);
month.addEventListener("input",change2);
year.addEventListener("input",change3);
submit.addEventListener("click",calResult);

let obj={
    curDay:new Date().getDate(),
    curMon:new Date().getMonth()+1,
    curYear:new Date().getFullYear()
};

function change1(){
        if(Number(day.value)<0 || Number(day.value)>31)
        {
            element1.innerHTML="Must be a valid day";
            outerDiv.appendChild(element1);
            day.style.borderColor="hsl(0, 100%, 67%)";
        }
        else{
            element1.remove();
            day.style.borderColor="hsl(0, 0%, 86%)"
        }
    }

function change2(){
    let mon=Number(month.value);
    if(mon<0 || mon>12)
    {
        element2.innerHTML="Must be a valid month";
        outerDiv.appendChild(element2);
        month.style.borderColor="hsl(0, 100%, 67%)";
    } 
    else{
      element2.remove();
      month.style.borderColor="hsl(0, 0%, 86%)"
    }
}

function change3(){
    let y=Number(year.value);
    if(y<0 || y>Number(new Date().getFullYear()))
    {
      element3.innerHTML="Must be in past";
      outerDiv.appendChild(element3);
      year.style.borderColor="hsl(0, 100%, 67%)";
    }
    else{
        element3.remove();
        year.style.borderColor="hsl(0, 0%, 86%)"
    }
}

function calResult()
{
    let nOfDays;
    let nOfMonths;
    let nofYear;
    let daysInYear;

    if(isLeap)
    {
        daysInYear=[31,29,31,30,31,30,31,31,30,31,30,31];
         if(day.value<=daysInYear[month.value-1])
        {
           nOfDays=daysInYear[obj.curMon-1]-day.value+obj.curDay;
           nOfMonths=12-month.value+obj.curMon;
           if(nOfDays>daysInYear[obj.curMon-1])
           {
              nOfDays%=daysInYear[obj.curMon-1];
              nOfDays++;
              nOfMonths++;
           }
           nofYear=Math.abs(year.value-obj.curYear);
        }
        else{
            element1.innerHTML="Must be a valid day";
            outerDiv.appendChild(element1);
        }
    }
    else
    {
        daysInYear=[31,28,31,30,31,30,31,31,30,31,30,31]
        if(day.value<=daysInYear[month.value-1])
        {
           nOfDays=Math.abs(day.value-obj.curDay);
           nOfMonths=Math.abs(month.value-obj.curMon);
           nofYear=Math.abs(year.value-obj.curYear);
        }
        else{
            element1.innerHTML="Must be a valid day";
            outerDiv.appendChild(element1);
        }
    }
    console.log(`${nOfDays} ${nOfMonths} ${nofYear}`);
    load(nofYear,resultYear);
    load(nOfMonths,resultMonth);
    load(nOfDays,resultDays);

}

function isLeap()
{
  if(Number(year.value)%400==0)
  {
    return true;
  }
  else if(Number(year.value%100==0))
  {
    return false;
  }
  else if(Number(year.value%4==0))
  {
    return true;
  }
  else{
    return false;
  }
}

function load(num,result)
{
    if(day.innerHTML != "" && month.innerHTML != "" && year.innerHTML != ""){
        let j=0;
        let interval=window.setInterval(()=>{
        result.innerHTML=j;
        j+=1;
        if(j==num)
        {
            clearInterval(interval);
        }
    },50)

    }  
    
}


