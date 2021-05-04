let display = document.getElementById("display");
let mode = "integer" //整数入力
function clr() {　//clearボタン(AC)
  display.value = "";
  mode = "integer";
}
function num(elem){　//1~9と小数点
  if(display.value == "0"){
  display.value = "";
  } else if(display.value == "00"){
  display.value = "";
  } 
  if(display.value.charAt(0) == ".") {
  display.value = "0."
  }
  if((display.value.charAt(0) == "*") || (display.value.charAt(0) == "/") || (display.value.charAt(0) == "+")){
    display.value = "";
  }
  if((display.value.slice(-1) == "*") || (display.value.slice(-1) == "/") || (display.value.slice(-1) == "+") || (display.value.slice(-1) == "-")){
    if(elem == "."){
      display.value += "0";
    }
  }
  if(elem == "."){　//整数１つに小数点１つまで
    if(mode === "decimal"){
      return;
    }
    mode = "decimal";　//小数点入力中
  }
  display.value += elem;
}
function ope(symbol){　//算術演算子
  if((display.value.slice(-1) == "*") || (display.value.slice(-1) == "/") || (display.value.slice(-1) == "+") || (display.value.slice(-1) == "-")){
    display.value = display.value.slice(0, -1);
  }
  display.value += symbol;
  mode = "integer";
}

function calc(){　// =で計算する
  display.value = new Function("return "  + display.value)();
  mode = "integer";　//整数入力
}

function per(){　// %表示
  display.value = new Function("return " + display.value*0.01)();
  mode = "decimal";　//小数点入力中
}