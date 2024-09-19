// localStorage.removeItem("words");
const addNew = document.querySelector("#add-new");


  const testArea = document.querySelector(".testArea");

  let words = [];
  getSavedWords();
  function getSavedWords(){
    w = localStorage.getItem("words");
    // console.log(w);
    if(w != null){
      words = JSON.parse(w);
    }
  }
  // testArea.innerHTML = JSON.stringify(wordStorage);
  // testArea.innerHTML = JSON.stringify(words);
  const container = document.querySelector(".container");
  // container.innerHTML = words[1];
  if(words != []){
    loadWords();
  }
  function loadWords(){
    container.innerHTML = "";
    if(words != []){
      words.forEach((word)=>{
    const wordEl  = document.createElement("div");
    wordEl.classList.add("word");
  
  const w = word.split(",");
  const langEn = document.createElement("div");
  langEn.classList.add("lang");
  langEn.classList.add("en");
  langEn.innerHTML = w[0];
  const langId = document.createElement("div");
  langId.classList.add("lang");
  langId.classList.add("id");
  langId.innerHTML = w[1];

  wordEl.appendChild(langEn);
  wordEl.appendChild(langId);
  const deleteBtn = document.createElement("div");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click",()=>{
    deleteWord(w);
  })
  wordEl.appendChild(deleteBtn);
container.appendChild(wordEl);
  })

  // show ID translation
  const allWords = document.querySelectorAll(".word");
  allWords.forEach((word)=>{
    // testArea.innerHTML = JSON.stringify(word);

    const en = word.querySelector(".en");
    const id = word.querySelector(".id");
    en.addEventListener("click",()=>{
      const deleteBtn = word.querySelector(".delete");
      id.classList.toggle("show");
      deleteBtn.classList.toggle("show");
      // testArea.innerHTML += "ok";
    })
})
    }
    

  }
  
const form = document.querySelector("form");

const saveButton = document.querySelector(".save-button");
saveButton.addEventListener("click",()=>{
  event.preventDefault();
  let en = form.querySelector("#en");
let id = form.querySelector("#id");
// testArea.innerHTML = en + id;
if(en.value != "" && id.value != ""){
  saveNewWord(en.value,id.value);
  loadWords();
  form.classList.toggle("show");
en.value = "";
id.value = "";
}
})
function saveNewWord(en, id){
  
    words.push(en+","+id);
  
  // wordStorage = words.join(".");

  localStorage.setItem("words", JSON.stringify(words));
}

// const addNewBtn = document.querySelector(".add-new");
// addNewBtn.addEventListener("click",()=>{
// container.innerHTML ="";
//   const form = document.querySelector("form");
//   testArea.innerHTML = "hello";
//   form.classList.toggle("show");
// })

addNew.addEventListener("click",()=>{
// container.innerHTML ="";
// testArea.innerHTML = addNew;
form.classList.toggle("show");
})




function deleteWord(w) {
  let index = JSON.stringify(w);
  index = w[0] +","+w[1];
  index = words.indexOf(index);
  words.splice(index,1);
  
  console.log(words);
  localStorage.setItem("words", JSON.stringify(words));
loadWords();
}