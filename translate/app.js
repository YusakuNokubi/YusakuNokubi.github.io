class list {
  constructor(english, japanese) {
    this.english = english;
    this.japanese = japanese;
  }
}

lists = []; //単語の配列

//初期化処理
window.onload = function() {
  save();
}

function save() {
  for (var i in localStorage) {
    words = JSON.parse(localStorage.getItem(i));
    lists.push(words);
    add(words);
  }
};

function addList() {
  var en = document.getElementById("english").value;
  var ja = document.getElementById("japanese").value;
  newWord = new list(en, ja);
  lists.push(newWord);
  localStorage.setItem(`${en} ; ${ja}削除`, JSON.stringify(newWord));
  add(newWord);
};

function add(word) {
  var en = word.english;
  var ja = word.japanese;

  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeWord(removeButton));
  removeButton.id = 'delete';

  const listItem = document.createElement('li');
  listItem.innerText = `${en} ; ${ja}`;
  listItem.append(removeButton);
  document.getElementById('wordList').appendChild(listItem);
  document.getElementById('form').reset();
};

const removeWord = removeButton => {
  let div_ul = removeButton.closest("ul");
  const targetTask = removeButton.closest('li');
  document.getElementById(div_ul.id).removeChild(targetTask);
  txt = targetTask.textContent;
  console.log(txt);
  localStorage.removeItem(txt);
};
