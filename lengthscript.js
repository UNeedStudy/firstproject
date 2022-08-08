const inch = 1;
const cm = 2.54;

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
    if (inUnit == "m") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 1000);
      if (outUnit == "cm") outNum.value = addComma(inNum * 100);
      if (outUnit == "km") outNum.value = addComma(inNum * 0.1);
      if (outUnit == "inch") outNum.value = addComma(inNum * 39.3701);
      if (outUnit == "mile") outNum.value = addComma(inNum * 0.000621);
      if (outUnit == "feet") outNum.value = addComma(inNum * 3.28084);
      if (outUnit == "yard")outNum.value = addComma(inNum * 1.093613);
    } 
    else if (inUnit == "cm") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 10);
      if (outUnit == "m") outNum.value = addComma(inNum * 0.01);
      if (outUnit == "km") outNum.value = addComma(inNum * 0.001);
      if (outUnit == "inch") outNum.value = addComma(inNum * 0.393701);
      if (outUnit == "mile") outNum.value = addComma(inNum * 6.2137e-6);
      if (outUnit == "feet") outNum.value = addComma(inNum * 0.032808);
      if (outUnit == "yard")outNum.value = addComma(inNum * 0.010936);      
    } 
    else if (inUnit == "mm") {
      if (outUnit == "cm") outNum.value = addComma(inNum * 0.1);
      if (outUnit == "m") outNum.value = addComma(inNum * 0.001);
      if (outUnit == "km") outNum.value = addComma(inNum * 1e-6);
      if (outUnit == "inch") outNum.value = addComma(inNum * 0.03937);
      if (outUnit == "mile") outNum.value = addComma(inNum * 6.2137e-7);
      if (outUnit == "feet") outNum.value = addComma(inNum * 0.003281);
      if (outUnit == "yard")outNum.value = addComma(inNum * 0.001094);       
    } 
    else if (inUnit == "km") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 1000000);
      if (outUnit == "cm") outNum.value = addComma(inNum * 100000);
      if (outUnit == "m") outNum.value = addComma(inNum * 1000);  
      if (outUnit == "inch") outNum.value = addComma(inNum * 39370.0787);
      if (outUnit == "mile") outNum.value = addComma(inNum * 0.621371);
      if (outUnit == "feet") outNum.value = addComma(inNum * 3280.8399);
      if (outUnit == "yard")outNum.value = addComma(inNum * 1093.6133);       
    } 
    else if (inUnit == "inch") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 25.4);
      if (outUnit == "cm") outNum.value = addComma(inNum * 2.54);
      if (outUnit == "m") outNum.value = addComma(inNum * 0.0254);
      if (outUnit == "km") outNum.value = addComma(inNum * 0.000025);
      if (outUnit == "yard")outNum.value = addComma(inNum * 0.027778);
      if (outUnit == "feet") outNum.value = addComma(inNum * 0.083333);
      if (outUnit == "mile") outNum.value = addComma(inNum * 0.000016);
    } 
    else if (inUnit == "mile") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 1609344);
      if (outUnit == "cm") outNum.value = addComma(inNum * 160934.4);
      if (outUnit == "m") outNum.value = addComma(inNum * 1609.344);
      if (outUnit == "km") outNum.value = addComma(inNum * 1.609344);
      if (outUnit == "yard")outNum.value = addComma(inNum * 1760);
      if (outUnit == "feet") outNum.value = addComma(inNum * 5280);
      if (outUnit == "inch")outNum.value = addComma(inNum * 63360);
    }
    else if (inUnit == "feet") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 304.8);
      if (outUnit == "cm") outNum.value = addComma(inNum * 30.48);
      if (outUnit == "m") outNum.value = addComma(inNum * 0.3048);
      if (outUnit == "km") outNum.value = addComma(inNum * 0.000305);
      if (outUnit == "yard")outNum.value = addComma(inNum * 0.333333);
      if (outUnit == "inch")outNum.value = addComma(inNum * 12);
      if (outUnit == "mile") outNum.value = addComma(inNum * 0.000189);
    }
    else if (inUnit == "yard") {
      if (outUnit == "mm") outNum.value = addComma(inNum * 914.4);
      if (outUnit == "cm") outNum.value = addComma(inNum * 91.44);
      if (outUnit == "m") outNum.value = addComma(inNum * 0.9144);
      if (outUnit == "km") outNum.value = addComma(inNum * 0.000914);
      if (outUnit == "feet") outNum.value = addComma(inNum * 3);
      if (outUnit == "inch")outNum.value = addComma(inNum * 36);
      if (outUnit == "mile") outNum.value = addComma(inNum * 0.000568);
    }
  }
  else {
    outNum.value = addComma(inNum * 1);
  }
}