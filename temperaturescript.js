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
    if (inUnit == "℃") {
      if (outUnit == "℉") outNum.value = addComma(inNum * 1.8 + 32);
      if (outUnit == "K") outNum.value = addComma(inNum + 273.15);
    }
    else if (inUnit == "℉") {
      if (outUnit == "℃") outNum.value = addComma((inNum - 32) / 1.8);
      if (outUnit == "K") outNum.value = addComma((inNum - 32) * (5/9) + 273.15);
    } 
    else if (inUnit == "K") {
        if (outUnit == "℃") outNum.value = addComma(inNum - 273.15);
        if (outUnit == "℉") outNum.value = addComma(inNum * 1.8 - 459.7);
    } 
  }
  else {
    outNum.value = addComma(inNum * 1);
  }
}