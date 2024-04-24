function myDice(){
    
  displaycurrentTime();


  const randomInt1 = randomIntFromInterval(1, 6);
  const randomInt2 = randomIntFromInterval(1, 6);
  changeImages(randomInt1,randomInt2);
  const final_score = randomInt1+randomInt2;
  document.getElementById('total').innerHTML = final_score;

 

  if(final_score >= 8)
    document.getElementById('result').innerHTML = "You Win: Try again! ";
  else
    document.getElementById('result').innerHTML = "You didn't win: Try Again!";
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function  changeImages(randomInt1,randomInt2){
    document.getElementById("image1").src = "dice-"+randomInt1+".svg";
    document.getElementById("image2").src = "dice-"+randomInt2+".svg";
  }

  function displaycurrentTime(){
    var d = new Date();
    var x = document.getElementById("day");
    x.innerHTML = d.getDate() + "/" + d.getMonth() + "/" +d.getFullYear() +" at "+d.getHours()+":"+d.getMinutes();  
  }
  