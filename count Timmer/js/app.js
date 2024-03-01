const endDate="20 February 2024 04:17:10 PM"

document.getElementById("end-date").innerText=endDate;

const input=document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate);
    const now=new Date()
    const diff=(end-now)/1000; //second
    if(diff<0) return;
    
    // console.log(diff);

    input[0].value=Math.floor(diff/3600/24);//no of days
    input[1].value=Math.floor(diff/3600)%24;//no of houres
    input[2].value=Math.floor(diff/60)%60;//no of min
    input[3].value=Math.floor(diff)%60; //no of sec
    



}
//intial call
clock();

setInterval(
    ()=>{
        clock()
        },
        1000
)