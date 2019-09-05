      $(function(){
        
      var runningTotal;
      
      var buttons = $("button");  //버튼
      // var btns = document.querySelectorAll("button");// 자바 스크립트
   //gggggg
      var handleComputation = function(event){
        var value = event.currentTarget.textContent;// //택스트 요소
        console.log(value);
        var output = $("#displayLog");
        //  var output = document.querySelector('#displayLog');
        var totalResult = $("#totalResult");
        // var totalResult = document.querySelector('#totalResult');
            
 
        if (value === "=") {
           //runningTotal 이 값이 없을 때 예외 처리
          if (runningTotal === undefined) {
             return;
          }
          runningTotal = eval(runningTotal);
          
          // output.innerHTML = runningTotal;
          $(output).html();
 
        }
        //값이 AC 이면 ouput을 초기화 시켜라
        else if(value === "AC")
        {
          $(output).textContent = '';
          //output.textContent = '';
        }
        else if (
          value === "+" ||
          value === "/" ||
          value === "*" ||
          value === "-" ||
          value === "%"
       )
       
       {
      //이것 값의 마직막 글자가 숫자인지 기호인지 확인 서브 스크립트
        var lastChar = runningTotal.substring(runningTotal.length-1,runningTotal.length);// 마직막 글자만 가져오는거
        console.log("runingTotal")
//글자 자르기v 마지막이 기호면 그것을 때라 !!!
        if(
          lastChar === "+" ||
          lastChar === "/" ||
          lastChar === "*" ||
          lastChar === "-" ||
          lastChar === "%"
          )
          {
            runningTotal = runningTotal.substring(0,runningTotal.length-1);
          }

          runningTotal += value;

          $(output).html() = runningTotal;
          return;
        }
        else{
          runningTotal = $(output).html() + value;
          //output.innerHTML += value;
          $(output).html() += value;
          return;
        }
  
      };

      
      //
 
      for(var i =0; i < buttons.length; i++){
        buttons[i].addEventListener("click",handleComputation,false);
      }
      //버튼태크 는 것을 다대리고온다
 
      });

      