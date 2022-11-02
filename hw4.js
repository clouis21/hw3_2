
///////////////Table///////////////////////

var a =  document.getElementById('a').value;
var b =  document.getElementById('b').value;
var c =  document.getElementById('c').value;
var d =  document.getElementById('d').value;


  function multiplyTable(a,b,c,d) {
    a = parseInt(a);//Parsint ensure input values are neterd as numerical integer
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    //Establishes table first position value. Fucus return cusor to opropriate field to be inputed
  var table1 = document.getElementsByTagName("TABLE")[0];
  var para1 = document.getElementById("para");

  //prevent exponetial values
        if (document.getElementById("a").value == "") {
          document.getElementById("a").style.background = 'yellow';
          document.getElementById('para1').innerHTML = "empty or \"e\" value in input 1";
          document.getElementById("a").focus();
          return;
        }
        if (document.getElementById("b").value == "") {
          document.getElementById("b").style.background = 'yellow';
          document.getElementById('para2').innerHTML = "empty or \"e\" value in input 2";
          document.getElementById("b").focus();
          return;
        }
        if (document.getElementById("c").value == "") {
          document.getElementById("c").style.background = 'yellow';
          document.getElementById('para3').innerHTML = "empty or \"e\" value in input 3";
          document.getElementById("c").focus();
          return;
        }//prevent exponetial values
        if (document.getElementById("d").value == "") {
          document.getElementById("d").style.background = 'yellow';
          document.getElementById('para4').innerHTML = "empty or \"e\" value in input 4";
          document.getElementById("4").focus();
          return;
        }//if second value is beyond range this throw exception
        if(b < -50 && b < a){
          document.getElementById("b").style.background = 'red';
          document.getElementById('para2').innerHTML = "Input 2 (-50 > or < 50)";
          document.getElementById("b").focus();
            return;
        }//if forth value is beyond range this throw exception
        if(d < -50 && d < c){
          document.getElementById("d").style.background = 'red';
          document.getElementById('para4').innerHTML = "Input 4 (-50 > or < 50)";
          document.getElementById("d").focus();
          return;
        }else{
              if(c > d){//Ensures end valus is not less than starting value for rows
                document.getElementById("c").style.background = 'red';
                document.getElementById('para3').innerHTML = "Input 3 must be less than input 4";
                document.getElementById("c").focus();
                return;
              }
        }
        if(a > b){ //Ensures end valus is not less than starting value for colums
          document.getElementById("a").style.background = 'red';
          document.getElementById('para1').innerHTML = "Input 1 must be less than input 2";
          document.getElementById("a").focus();
          return;
        }//Ensures values is not greater than or less than the table limit |50|
        if(a < -50 || a > 50){ 
          document.getElementById("a").style.background = 'yellow';
          document.getElementById('para1').innerHTML = "Input 1 (-50 > or < 50)";
          document.getElementById("a").focus();
          return;
        }
        if(b < -50 || b > 50){ 
          document.getElementById("b").style.background = 'yellow';
          document.getElementById('para2').innerHTML = "Input 2 (-50 > or < 50)";
          document.getElementById("b").focus();
          return;
        }
        
        if(c < -50 || c > 50){ 
          document.getElementById("c").style.background = 'yellow';
          document.getElementById('para3').innerHTML = "Input 3 (-50 > or < 50)";
          document.getElementById("c").focus();
          return;
        }
        if(d < -50 || d > 50){ 
          document.getElementById("d").style.background = 'yellow';
          document.getElementById('para4').innerHTML = "Input 4 (-50 > or < 50)";
          document.getElementById("d").focus();
          return;
        }
    //Prior to append descendants.remove() remove prior values from table

    descendants = document.getElementsByTagName('tbody')[0];
    //onsole.log(descendants);
    descendants.remove();

    
    row = table1.insertRow();
    for (let y = c; y <= d; y++) {
      if(y === c ){
        row.insertCell().textContent='';
      }
      row.insertCell().textContent=y;
      
    }
    for (let x = a; x <= b; x++) {
      row = table1.insertRow();
      row.insertCell().textContent = x;
      for(let y=c; y<=d; y++){
        row.insertCell().textContent = x*y;
      }
    }
  }
  //output content prevent uploads if errors
  btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const input1 = document.getElementById('a');
         onsubmit = "post();"

  });
  
  btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const input2 = document.getElementById('b');
    onsubmit = "post();"

  });
  btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const input3 = document.getElementById('c');
    onsubmit = "post();"

  });
  btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const input4 = document.getElementById('d');
      onsubmit = "post();"

  }) 



