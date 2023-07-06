let button_add_tiket = document.querySelectorAll(".add_tiket");

button_add_tiket.forEach((element) => {
  element.addEventListener("click", (event) => {
    let cardsList = event.target.parentElement.querySelector(".card_body_content");
    let div = document.createElement("div");
    div.classList = "task_content";
    let text = document.createElement("textarea");
    text.classList = "task_text";
    let close = document.createElement("button");
    close.classList = "task_del_button";
    close.textContent = "X";
    close.addEventListener("click", () => {
      close.remove();
      text.remove();
      div.remove();
    });

    div.appendChild(text);
    div.appendChild(close);
    cardsList.appendChild(div);

    text.addEventListener('blur', () => {
        let textValue = text.value
        div.removeChild(text)
        finishText = document.createElement('div')
        finishText.classList.add('task_text')
        finishText.textContent = textValue
        div.appendChild(finishText)

    let actualElement;

    const onMouseOver = (e) => {
        actualElement.style.top = e.clientY + 'px'
        actualElement.style.left = e.clientX + 'px'
    };

    const onMouseUp = (e) => {
        const mouseUpItem = e.target;
        try {mouseUpItem.querySelector('.card_body_content').appendChild(actualElement)
        }catch(e) {
            mouseUpItem.parentElement.insertBefore(mouseUpItem, actualElement)
        }

        actualElement.classList.remove('dragged');

        actualElement = undefined;

        document.documentElement.removeEventListener('mouseup', onMouseUp);
        document.documentElement.removeEventListener('mouseover', onMouseOver);
    };

    
    finishText.addEventListener('mousedown', (e) => {
        e.preventDefault()
        actualElement = e.target.parentElement;
        actualElement.classList.add('dragged')
        document.documentElement.addEventListener('mouseup', onMouseUp);
        document.documentElement.addEventListener('mouseover', onMouseOver);
    })
    
    
    })



  });
});