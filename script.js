let generateBtn = document.getElementById("generate");

function randomNum(){
      let min = document.getElementById("min");
      let max = document.getElementById("max");
      let minVal = Number(min.value);
      let maxVal = Number(max.value);
      if(minVal > maxVal){
            minVal = maxVal + minVal;
            maxVal = minVal - maxVal;
            minVal = minVal - maxVal;
            min.value = minVal;
            max.value = maxVal;
      }
      let num = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
      console.log(num);
      document.getElementById("result").innerText = num;
}

window.addEventListener("load", randomNum());
generateBtn.addEventListener("click", randomNum);