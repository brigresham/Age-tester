let put = document.getElementById("num")
console.log(put.value)


let news = document.querySelector(".age")
console.log(news) 


news.addEventListener("click", () => {
     put = document.getElementById("num")
    console.log(put.value)
    news.innerText = put.value; 
})
 if (put > 18 ) {
    console.log("Your a minor");
    } else if(put < 18) { console.log("Your an adult")
    } else { console.log("null")}


  

    function buttonn() {
        let put = document.getElementById(".num").value;
        let news = document.getElementById("age");
    
        if (isNaN(put) || age < 0 || age > 120) {
            news.textContent = "Please enter a valid age between 0 and 120.";
            news.style.color = "red";
        } else if (put < 18) {
            news.textContent = "You are a minor.";
            news.style.color = "blue";
        } else {
            news.textContent = "You are an adult.";
            news.style.color = "green";
        }
    }
    
