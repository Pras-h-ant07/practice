let addBtn = document.querySelector("#addBtn");
let taskModel = document.querySelector(".new-ticket-box");
let textArea = document.querySelector(".text-area");
let btnPanelList = document.querySelectorAll(".panel-btn");
let ticketContainer = document.querySelector(".ticket-container");

//to show add new task box
let modelBoxFlag = false;
addBtn.addEventListener("click", () => {
  modelBoxFlag = !modelBoxFlag;
  modelBoxFlag
    ? (taskModel.style.display = "flex")
    : (taskModel.style.display = "none");
});

//to select color band for the new task
btnPanelList.forEach((colorBtn) => {
  colorBtn.addEventListener("click", (e) => {
    btnPanelList.forEach((element) => {
      element.classList.remove("select");
    });
    e.target.classList.add("select");
  });
});

taskModel.addEventListener('keydown',(e)=>{
    
    if(e.key=='Shift'){
        generateTicket();
        modelBoxFlag = !modelBoxFlag;
        taskModel.style.display = "none"
    } 
    console.log(e.key)
})



//function: to generate a new ticket
function generateTicket(color) {
  let newTicket = document.createElement("div");
  newTicket.classList.add("ticket");
  newTicket.innerHTML = `<div class="ticket-color ${color}"></div>
                        <div class="ticket-id">#123456</div>
                        <div class="ticket-task">${textArea.value}</div>
                        <div class="ticket-lock">
                            <i class="fa-solid fa-lock"></i>
                        </div>`;
  ticketContainer.appendChild(newTicket);
}
