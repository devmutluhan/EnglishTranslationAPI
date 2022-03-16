var ulDom = document.querySelector(".list")
var ulDom2 = document.querySelector(".list2")
var englishInput = document.querySelector("#englishInput")
var turkishInput = document.querySelector("#turkishInput")
var addBtn = document.querySelector(".button")

getList();

addBtn.addEventListener("click", function(){
    if(addBtn.innerHTML == "Add"){
        if(englishInput.value.trim() == ""){
            alert("Boş karakter eklenemez")
        }
        else if(turkishInput.value.trim() == ""){
            alert("Boş karakter eklenemez")
        }
        else {
            addItems()
            englishInput.value=""
            turkishInput.value=""
        }
    }
})

//DB den verileri alma ve listeleme (GET)
function getList() {
    fetch("https://localhost:5001/api/vocable")
    .then(response=> {return response.json()})
    .then(responseJson => {
        ulDom.innerHTML= ""
        ulDom2.innerHTML=""
        responseJson.forEach(element => {
            if(ulDom.childElementCount == ulDom2.childElementCount){
                var liDom = document.createElement('li')
                liDom.innerHTML = `${element.english} ==> ${element.turkish}`
                liDom.id = element.id
                liDom.append(deleteButton(element.id,liDom))
                liDom.append(updateButton(element.id,liDom))
                ulDom.append(liDom)
            }
            else if (ulDom.childElementCount > ulDom2.childElementCount){
                var liDom = document.createElement('li')
                liDom.innerHTML = `${element.english} ==> ${element.turkish}`
                liDom.id = element.Id
                liDom.append(deleteButton(element.id,liDom))
                liDom.append(updateButton(element.id,liDom))
                ulDom2.append(liDom)
            }
        });
    })
}

//Delete
function deleteButton(Id,liDom){
    let btn = document.createElement('span')
    btn.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`
    btn.classList.add('btn');
    btn.addEventListener("click",function(){
        liDom.parentNode.removeChild(liDom)
        fetch(`https://localhost:5001/api/vocable/${Id}`,{
            method:"DELETE",
        })
    })
    return btn;
}

//Db ye eleman ekleme (POST)
function addItems(){
    fetch("https://localhost:5001/api/vocable",{
        method:'POST',
        body: JSON.stringify({
            english: englishInput.value,
            turkish: turkishInput.value
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(res => { getList() })
}   

function updateButton(Id,liDom){
    let btn = document.createElement('span')
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
    </svg>`
    btn.classList.add('btn')
    btn.addEventListener("click", function(){
        englishInput.value = liDom.innerText.slice(0,liDom.innerText.search("=") -1 ).trim()
        turkishInput.value = liDom.innerText.slice(liDom.innerText.search(">") +1).trim()
        liDom.parentNode.removeChild(liDom)
        addBtn.innerHTML="Edit"
        addBtn.addEventListener("click", function(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "english": englishInput.value,
            "turkish": turkishInput.value
            });

            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`https://localhost:5001/api/vocable/${Id}`, requestOptions)
            .then(response =>  {
                getList()
                englishInput.value=""
                turkishInput.value=""
                addBtn.innerHTML = "Add"
                Id=1
            })
        })
    })
    return btn
}

