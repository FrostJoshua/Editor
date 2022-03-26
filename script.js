

        function mouseoverFunc(id) {
        cvalue = document.querySelector('input[name="choseColor"]:checked').value
        if (cvalue.includes("c1")) {selectedColor = document.getElementById("color1").value;
       colorValue = "a";
       document.getElementById("color1").disabled = true;
       fullCode = fullCode.replaceBetween(22, 29, selectedColor);}
                if (cvalue.includes("c2")) {selectedColor = document.getElementById("color2").value;
       colorValue = "b";
        document.getElementById("color2").disabled = true
       fullCode = fullCode.replaceBetween(29, 36, selectedColor);}
           if (cvalue.includes("c3")) {selectedColor = document.getElementById("color3").value;
       colorValue = "c";
       document.getElementById("color3").disabled = true
       fullCode = fullCode.replaceBetween(36, 43, selectedColor);}
                 if (cvalue.includes("c4")) {selectedColor = document.getElementById("color4").value;
       colorValue = "d";
       document.getElementById("color4").disabled = true
       fullCode = fullCode.replaceBetween(43, 50, selectedColor);}
                  if (cvalue.includes("c5")) {selectedColor = document.getElementById("color5").value;
       colorValue = "e";
       document.getElementById("color5").disabled = true
       fullCode = fullCode.replaceBetween(50, 57, selectedColor);}
        if (cvalue.includes("c6")) {selectedColor = document.getElementById("color6").value;
       colorValue = "f";
       document.getElementById("color6").disabled = true
       fullCode = fullCode.replaceBetween(57, 64, selectedColor);}
  if (cvalue.includes("c7")) {selectedColor = document.getElementById("color7").value;
       colorValue = "g";
       document.getElementById("color7").disabled = true
       fullCode = fullCode.replaceBetween(64, 71, selectedColor);}
       if (cvalue.includes("c8")) {selectedColor = document.getElementById("color8").value;
       colorValue = "h";
       document.getElementById("color8").disabled = true
       fullCode = fullCode.replaceBetween(71, 78, selectedColor);}
          if (cvalue.includes("c9")) {selectedColor = document.getElementById("color9").value;
       colorValue = "i";
       document.getElementById("color9").disabled = true
      fullCode = fullCode.replaceBetween(78, 85, selectedColor); }
       if (cvalue.includes("c10")) {selectedColor = document.getElementById("color10").value;
       colorValue = "j";
       document.getElementById("color10").disabled = true
       fullCode = fullCode.replaceBetween(85, 92, selectedColor);}
       if (cvalue.includes("c11")) {selectedColor = document.getElementById("color11").value;
       colorValue = "k";
       document.getElementById("color11").disabled = true
       fullCode = fullCode.replaceBetween(92, 99, selectedColor);}
       if (cvalue.includes("c12")) {selectedColor = document.getElementById("color12").value;
       colorValue = "l";
       document.getElementById("color12").disabled = true
       fullCode = fullCode.replaceBetween(99, 106, selectedColor);}
       if (cvalue.includes("c13")) {selectedColor = document.getElementById("color13").value;
       colorValue = "m";
       document.getElementById("color13").disabled = true
       fullCode = fullCode.replaceBetween(106, 113, selectedColor);}
       if (cvalue.includes("c14")) {selectedColor = document.getElementById("color14").value;
       colorValue = "n";
       document.getElementById("color14").disabled = true
       fullCode = fullCode.replaceBetween(113, 120, selectedColor);}
       if (cvalue.includes("c15")) {selectedColor = document.getElementById("color15").value;
       colorValue = "o";
       document.getElementById("color15").disabled = true
       fullCode = fullCode.replaceBetween(120, 127, selectedColor);}
       if (cvalue.includes("c16")) {selectedColor = document.getElementById("color16").value;
       colorValue = "p";
       document.getElementById("color16").disabled = true
       fullCode = fullCode.replaceBetween(127, 134, selectedColor);}

          id.style.background = selectedColor;

          changeIndex = parseInt(id.id);
          changeIndex = changeIndex+133



var str = fullCode;
str = str.replaceAt(changeIndex, colorValue);
fullCode = str

         var element = document.getElementById("foot");
        element.innerHTML = str;



        let newString = fullCode.slice(22,390)


        var toAdd = document.createDocumentFragment();

        const pArray = newString.split("");
        var prevcolor1 = pArray.slice(0, 7).join("");
        var prevcolor2 = pArray.slice(7, 14).join("");
        var prevcolor3 = pArray.slice(14, 21).join("");
        var prevcolor4 = pArray.slice(21, 28).join("");
        var prevcolor5 = pArray.slice(28, 35).join("");
        var prevcolor6 = pArray.slice(35, 42).join("");
        var prevcolor7 = pArray.slice(42, 49).join("");
        var prevcolor8 = pArray.slice(49, 56).join("");
        var prevcolor9 = pArray.slice(56, 63).join("");
        var prevcolor10 = pArray.slice(63, 70).join("");
        var prevcolor11 = pArray.slice(70, 77).join("");
        var prevcolor12 = pArray.slice(77, 84).join("");
        var prevcolor13 = pArray.slice(84, 91).join("");
        var prevcolor14 = pArray.slice(91, 98).join("");
        var prevcolor15 = pArray.slice(98, 105).join("");
        var prevcolor16 = pArray.slice(105, 112).join("");

        if (document.getElementById("p1") != null) {
        for(var i=0; i < 256; i++){
           var newDiv = document.createElement('div');
           cid = i+112;
          // alert(cid);
           scid = newString.charAt(cid)
           //alert(scid);
           if (scid == "a"){pixcolor = prevcolor1;}
              if (scid == "b"){pixcolor = prevcolor2;}
                 if (scid == "c"){pixcolor = prevcolor3;}
                    if (scid == "d"){pixcolor = prevcolor4;}
                       if (scid == "e"){pixcolor = prevcolor5;}
                 if (scid == "f"){pixcolor = prevcolor6;}
                    if (scid == "g"){pixcolor = prevcolor7;}
           if (scid == "h"){pixcolor = prevcolor8;}
              if (scid == "i"){pixcolor = prevcolor9;}
              if (scid == "j"){pixcolor = prevcolor10;}
              if (scid == "k"){pixcolor = prevcolor11;}
              if (scid == "l"){pixcolor = prevcolor12;}
              if (scid == "m"){pixcolor = prevcolor13;}
              if (scid == "n"){pixcolor = prevcolor14;}
              if (scid == "o"){pixcolor = prevcolor15;}
              if (scid == "p"){pixcolor = prevcolor16;}
                    if (scid == "0"){pixcolor = "#ffffff";}
                    changeTile = 'p'+i;
                    changeEle = document.getElementById(changeTile);
                    changeEle.style.background = pixcolor;
                    }
                    }
                    else {
        for(var i=0; i < 256; i++){
           var newDiv = document.createElement('div');
           cid = i+112;
          // alert(cid);
           scid = newString.charAt(cid)
           //alert(scid);
           if (scid == "a"){pixcolor = prevcolor1;}
              if (scid == "b"){pixcolor = prevcolor2;}
                 if (scid == "c"){pixcolor = prevcolor3;}
                    if (scid == "d"){pixcolor = prevcolor4;}
                       if (scid == "e"){pixcolor = prevcolor5;}
                 if (scid == "f"){pixcolor = prevcolor6;}
                    if (scid == "g"){pixcolor = prevcolor7;}
           if (scid == "h"){pixcolor = prevcolor8;}
              if (scid == "i"){pixcolor = prevcolor9;}
              if (scid == "j"){pixcolor = prevcolor10;}
              if (scid == "k"){pixcolor = prevcolor11;}
              if (scid == "l"){pixcolor = prevcolor12;}
              if (scid == "m"){pixcolor = prevcolor13;}
              if (scid == "n"){pixcolor = prevcolor14;}
              if (scid == "o"){pixcolor = prevcolor15;}
              if (scid == "p"){pixcolor = prevcolor16;}
                    if (scid == "0"){pixcolor = "#ffffff";}

           newDiv.id = 'p'+i;
           newDiv.className = 'square2';
           newDiv.style.background = pixcolor;
           toAdd.appendChild(newDiv);



        document.getElementById('smallcontainer').appendChild(toAdd);
        }
        }

        }


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}

String.prototype.replaceBetween = function(start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
}

function sendMessage() {

 let artist = document.getElementById("artist").value;
  let newString = fullCode.slice(22,390);

      const request = new XMLHttpRequest();
      request.open("POST", "https://discordapp.com/api/webhooks/957066821448630402/U3ejkdHZb7__Yurkwwi7ZjiWvg8lEUiRKTKa2F6jOaADwEQDLDxRe5OIErIO-pfrf29K");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "githubsubmissions",
        avatar_url: "",
        content: artist+":"+newString
      }

      request.send(JSON.stringify(params));
    alert("Submission recieved, Thank you.")}
