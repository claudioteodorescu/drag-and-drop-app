const lists = document.querySelectorAll(".list");
const items = document.querySelectorAll(".list-item");

let draggedItem = null;

items.forEach((item) => {
  const itemEl = item;

  itemEl.addEventListener("dragstart", () => {
    draggedItem = itemEl;
    setTimeout(() => {
      itemEl.style.display = "none";
    }, 0);
  });

  itemEl.addEventListener("dragend", () => {
    setTimeout(() => {
      itemEl.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  lists.forEach((list) => {
    const listEl = list;

    listEl.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    listEl.addEventListener("dragenter", (e) => {
      //   e.preventDefault();
      listEl.style.backgroundColor = "rgba(255,255,255,0.1)";
    });

    listEl.addEventListener("dragleave", () => {
      listEl.style.backgroundColor = "black";
    });

    listEl.addEventListener("drop", () => {
      listEl.append(draggedItem);
      listEl.style.backgroundColor = "black";
    });
  });
});
