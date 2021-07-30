import "./styles.css";

const onClickAdd = () => {
  //textboxの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    console.log("完了");
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncomplete(deleteButton.parentNode);
  });

  //divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
