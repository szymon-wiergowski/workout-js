function zmienKolory() {
        const rozowyElement = document.getElementsByClassName("box")[0];
        rozowyElement.addEventListener("click", ustawZielony);
       }
       function ustawZielony() {
            console.log("jestem");
            const rozowyElement = document.getElementsByClassName("yellow")[0];
            if (rozowyElement) {
              rozowyElement.className = "green";
            }
           }
        
           zmienKolory ()