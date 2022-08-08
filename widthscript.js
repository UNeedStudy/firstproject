let btn = document.getElementById("goBtn");
btn.addEventListener("click", convert);

function addComma(num) { 
  var parts = num.toString().split("."); 
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ""); 
}

function convert() {
  let inSelect = document.getElementById("inSelect");
  let outSelect = document.getElementById("outSelect");
  //console.log(inSelect[0], outSelect[1]);
  let inIndex = inSelect.selectedIndex;
  let outIndex = outSelect.selectedIndex;
  //console.log(inIndex, outIndex);
  let inUnit = inSelect[inIndex].value;
  let outUnit = outSelect[outIndex].value;
  //console.log(inUnit, outUnit, typeof(inUnit)); // string type
  let inNum = Number(document.getElementById("inBox").value);
  let outNum = document.getElementById("outBox");
  outNum.value = "";

  if (inIndex != outIndex) {
    // 변환하려는 단위가 서로 다를 경우에만 계산
    if (inUnit == "m2") {
      if (outUnit == "km2") outNum.value = addComma(inNum * 1e-6);
      if (outUnit == "ha") outNum.value = addComma(inNum * 0.0001);
      if (outUnit == "pyung") outNum.value = addComma(inNum * 0.3025);
      if (outUnit == "ac") outNum.value = addComma(inNum * 0.000247);
      if (outUnit == "a") outNum.value = addComma(inNum * 0.01);
    }
    else if (inUnit == "km2") {
      if (outUnit == "m2") outNum.value = addComma(inNum * 1000000);
      if (outUnit == "ha") outNum.value = addComma(inNum * 100);
      if (outUnit == "pyung") outNum.value = addComma(inNum * 302500);
      if (outUnit == "ac") outNum.value = addComma(inNum * 247.105381);
      if (outUnit == "a") outNum.value = addComma(inNum * 10000);  
    } 
    else if (inUnit == "ha") {
        if (outUnit == "m2") outNum.value = addComma(inNum * 10000);
        if (outUnit == "km2") outNum.value = addComma(inNum * 0.01);
        if (outUnit == "pyung") outNum.value = addComma(inNum * 3025);
        if (outUnit == "ac") outNum.value = addComma(inNum * 2.471054);
        if (outUnit == "a") outNum.value = addComma(inNum * 100);
    } 
    else if (inUnit == "pyung") {
        if (outUnit == "m2") outNum.value = addComma(inNum * 3.305785);
        if (outUnit == "km2") outNum.value = addComma(inNum * 3.3058e-6);
        if (outUnit == "ha") outNum.value = addComma(inNum * 0.000331);
        if (outUnit == "ac") outNum.value = addComma(inNum * 0.000817);
        if (outUnit == "a") outNum.value = addComma(inNum * 0.033058);  
    } 
    else if (inUnit == "ac") {
        if (outUnit == "m2") outNum.value = addComma(inNum * 4046.85642);
        if (outUnit == "km2") outNum.value = addComma(inNum * 0.004047);
        if (outUnit == "ha") outNum.value = addComma(inNum * 0.404686);
        if (outUnit == "pyung") outNum.value = addComma(inNum * 1224.17407);
        if (outUnit == "a") outNum.value = addComma(inNum * 40.468564);  
    }  
    else if (inUnit == "a") {
        if (outUnit == "m2") outNum.value = addComma(inNum * 100);
        if (outUnit == "km2") outNum.value = addComma(inNum * 0.0001);
        if (outUnit == "ha") outNum.value = addComma(inNum * 0.01);
        if (outUnit == "pyung") outNum.value = addComma(inNum * 30.25);
        if (outUnit == "ac") outNum.value = addComma(inNum * 0.024711);  
    }
  }
  else {
    outNum.value = addComma(inNum * 1);
  }
}