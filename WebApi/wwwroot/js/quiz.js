var icons ={
    false:`<span style="float:right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
  </svg></span>`,
    true:`<span style="float:right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></span>`
}

var text = document.querySelector(".get-quiz")
var turkish= document.querySelector(".turkish")
var ulDom = document.querySelector(".list")
var ulDom2 = document.querySelector(".list2")
var btnReply = document.querySelector(".button")
var dsayac=0;
var ysayac=0;
getQuestion()

function getQuestion(){
    fetch("https://localhost:5001/api/quiz")
    .then(response=> {
        return response.json()
    })
    .then(responseJson => {
        text.innerHTML=responseJson.english
        text.id = responseJson.id
    })
}

btnReply.addEventListener("click", function(){
    var id = parseInt(text.id)
    var liDom = document.createElement('li')
    fetch(`https://localhost:5001/api/vocable/${id}`,{
        method:'GET',
    })
    .then(response=> {
        return response.json()
    })
    .then(responseJson => {
        if(turkish.value.toLowerCase().trim() === responseJson.turkish.toLowerCase().trim()){
            dsayac+=1
            liDom.style.backgroundColor = "green";
            liDom.innerHTML = `<strong>${dsayac}__ Doğru Cevap
            <span style="margin-left: 30%">${responseJson.english + " = " + responseJson.turkish}</span> 
            ${icons.true} </strong>` 
            ulDom.append(liDom);  
        }
        else if(turkish.value.toLowerCase().trim() !== responseJson.turkish.toLowerCase().trim()){
            ysayac+=1
            liDom.style.backgroundColor = "red";
            liDom.innerHTML = `<strong>${ysayac}__ Yanlış Cevap
            <span style="margin-left: 30%">${responseJson.english + " = " + responseJson.turkish}</span> 
            ${icons.false}</strong>`
            ulDom2.append(liDom);
        }
        turkish.value=""
        getQuestion();
    })
})
function test(e){
    console.log(e)
}