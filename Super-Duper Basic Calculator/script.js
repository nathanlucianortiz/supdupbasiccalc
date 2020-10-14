 /* var num='a';
        switch(num){
            case 'a': document.write("Number 1");break;
            case 'b': document.write("Number 2");break;
            case 'c': document.write("Number 3");break;
            default: document.write("Other number");break;
        } */

        var num1=Number(prompt("Enter the First Number"));
        var num2=Number(prompt("Enter the Second Number"));

        function myAddition(num1,num2){
            var result=num1+num2;
            document.write(num1 + " " + "+" + " " + num2 + " " + "=" + " " +result + "<br>");
        }
        function mySubtraction(num1,num2){
            var result=num1-num2;
            document.write(num1 + " " + "-" + " " + num2 + " " + "=" + " " +result + "<br>");
        }
        function myMultiplication(num1,num2){
            var result=num1*num2;
            document.write(num1 + " " + "x" + " " + num2 + " " + "=" + " " +result + "<br>");
        }
        function myDivision(num1,num2){
            var result=num1/num2;
            document.write(num1 + " " + "/" + " " + num2 + " " + "=" + " " +result + "<br>");
        }

        myAddition(num1,num2);
        mySubtraction(num1,num2);
        myMultiplication(num1,num2);
        myDivision(num1,num2);
        
        for (div of document.getElementsByTagName("div")) {
            div.style.fontSize = "2rem"
            div.style.fontFamily = "Bungee Inline"
            div.style.color = "rgb(35, 116, 182)"
            div.style.textAlign = "center"
            div.style.marginTop = "2rem"
            div.style.marginBottom = "2rem"
            div.style.marginLeft = "auto"
            div.style.marginRight = "auto"
            div.style.padding = "1rem"
          }
        

        