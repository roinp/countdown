// რამდენი დღეა ახალ წლამდე  !
// ეხლანდელი დროის აღება
// ბოლო დღე
// ბოლო დღე - ეხლანდელი


function time(seconds){

   seconds = seconds - 1000;
   
  let minutes = Math.floor(seconds/60); 
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  let months = Math.floor(days/30);
  let year = Math.floor(months/12);

  let results = ""
  
  let countedSeconds = seconds % 60;


  minutes = minutes % 60;
  hours = hours % 24;
  days = days % 30;
  months = months % 12;


  if(countedSeconds < 1){
    results = "0 seconds"
    }else{
        results = countedSeconds + " seconds "
    }
    if(minutes>0){
       results =results + minutes + " minutes " 
    }
    if(hours>0){
        results =results + hours + " hours " 
     }
     if(days>0){
        results =results + days + " days " 
     }
     if(months>0){
        results =results + months + " months " 
     }
     if(year>0){
        results =results + year + " year " 
     }
     return results;
}

function getDifference(date){
   let a = new Date();

   let seconds = Math.floor((date - a)/1000);   

   document.getElementById("time").textContent = time(seconds);

}

let b = new Date(2021, 0, 1);

setInterval(getDifference, 1000, b);



