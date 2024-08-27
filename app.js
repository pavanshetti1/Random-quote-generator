const baseURL = "https://api.quotable.io/quotes/random?";

const button = document.querySelector(".container button");

let getQuote = async ()=>{
    let response = await fetch(baseURL+`${maxLength=125}`);
    let data = await response.json();

    if(response.status == 429){
        textsOFF();
        document.querySelector(".error-text").style.display = "block";
    }
    else{
        displayData(data);  
        textsON();
    }
};

let displayData = (data)=>{
    let quote = data[0].content;
    let author  = data[0].author;
    document.querySelector(".quote-text").innerText = `"${quote}"`;
    document.querySelector(".author-text").innerText = `-${author}`;
};

let textsON = ()=>{
    document.querySelector(".quote-text").style.display="block";
    document.querySelector(".author-text").style.display="block";
}
let textsOFF = ()=>{
    document.querySelector(".quote-text").style.display="none";
    document.querySelector(".author-text").style.display="none";
}

button.addEventListener("click", ()=>{
    getQuote();
});