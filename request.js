
async function fetchData() {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let data = await response.json();

  const front = {
    level: ["Junior", "Mid Level", "Senior"],
    langs: ["HTML", "CSS", "Javascript"],
    libs: ["React", "Angular", "Vue.js", "Flutter"],
  };

  const back = {
    langs: ["C++", "Java", "Phyton"],
    libs: ["Django", "Spring", "Ruby", "Laravel"],
  };

  const usersContainer = document.querySelector(".users-container"); 

  for (const user of data.data) {
    const userContainer = document.createElement("span"); 
    userContainer.setAttribute("class", "user");
    usersContainer.appendChild(userContainer);

    const userAvatar = document.createElement("img"); 
    userAvatar.setAttribute("src", user.avatar);
    userAvatar.setAttribute("class", "user-avatar");
    userContainer.appendChild(userAvatar);

    const userName = document.createElement("p"); 
    userName.setAttribute("class", "user-name");
    userName.innerText = user.first_name + " " + user.last_name;
    userContainer.appendChild(userName);

    
    const userInfo = document.createElement("span");
    userInfo.setAttribute("class", "user-info");
    userInfo.textContent = user.email;
    
    const selectButtons = document.createElement("div");
    selectButtons.setAttribute("class", "select-buttons");
    userContainer.appendChild(selectButtons);
    
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "contact-button");
    likeButton.textContent = "❤️";
    selectButtons.appendChild(likeButton);
    
    const moreButton = document.createElement("button");
    moreButton.setAttribute("class", "contact-button");
    moreButton.textContent = "➕";
    selectButtons.appendChild(moreButton);
    
    const rejectButton = document.createElement("button");
    rejectButton.setAttribute("class", "contact-button");
    rejectButton.textContent = "❌";
    selectButtons.appendChild(rejectButton);
    
    rejectButton.onclick = () => {
      userContainer.remove();
    };
    
    const arrowDown = document.createElement("img");
    arrowDown.setAttribute("src", "./assets/arrow-down.svg");
    arrowDown.setAttribute("class", "arrow");
    userContainer.appendChild(arrowDown);
    
    const modalContainer = document.createElement("section"); 
    modalContainer.setAttribute("class", "modal");
    userContainer.appendChild(modalContainer);

    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");
    modalContainer.appendChild(modalContent);

    const modalClose = document.createElement("img");
    modalClose.setAttribute("class", "modal-close");
    modalClose.setAttribute("src", "/assets/x.svg");
    modalContent.appendChild(modalClose);

    const modalText = document.createElement("p");
    modalContent.appendChild(modalText);

    const matchText = document.createElement("span");
    matchText.setAttribute('class', 'match-text')
    matchText.innerText = "It's a match! 🔥 \n" 
    modalContent.insertBefore(matchText, modalText)
    
    likeButton.onclick = () => {
      modalContainer.style.display = "block";
      modalText.innerText =
      user.first_name +
      " is also interested in working with you! \n" +
      "Send a message.";
      modalContent.appendChild(userInfo);
    };

    moreButton.onclick = () => {
      modalContainer.style.display = "block";
      modalText.innerText = "Curriculum";
      modalContent.style.justifyContent = "flex-start";
      matchText.innerText = ""
    };

    modalClose.onclick = function () {
      modalContainer.style.display = "none";
    };

    const userResume = document.createElement("ul");
    userResume.setAttribute("class", "user-resume");

    for (const lang of front.langs) {
      const listLanguage = document.createElement("li");
      listLanguage.setAttribute("class", "list-language");
      listLanguage.textContent = lang;
      userResume.appendChild(listLanguage);
      userContainer.insertBefore(userResume, selectButtons);
    }

    const list = [];
    for (const lib of front.libs) {
      const listLib = document.createElement("li");
      const randomFrontFrame = Math.floor(Math.random() * front.libs.length);
      listLib.setAttribute("class", "list-lib");
      listLib.textContent = front.libs[randomFrontFrame];
      list.push(listLib.textContent);
      userResume.appendChild(listLib);
      userContainer.insertBefore(userResume, selectButtons);
      
      function hasDuplicates(a) {
        const noDups = new Set(a);
        
        if (a.length !== noDups.size) {
          listLib.remove();
        }
      }
      hasDuplicates(list);
    
    }
    
    arrowDown.onclick = function () {
      userContainer.style.height = "80%";
      userContainer.style.justifyContent = "flex-start";
      userAvatar.style.marginTop = "10px";

      userAvatar.style.width = "35%";
      userInfo.style.display = "block";
      selectButtons.style.display = "flex";
      userResume.style.display = "flex";

      const arrowUp = document.createElement("img");
      arrowUp.setAttribute("src", "./assets/arrow-up.svg");
      arrowUp.setAttribute("class", "arrow");

      arrowDown.replaceWith(arrowUp);

      arrowUp.onclick = function () {
        userContainer.style.height = "50%";
        userContainer.style.justifyContent = "center";
        userContainer.style.padding = "0";
        userAvatar.style.width = "50%";
        userInfo.style.display = "none";
        selectButtons.style.display = "none";
        userResume.style.display = "none";
        arrowUp.replaceWith(arrowDown);
      };
    };
  }

}

fetchData();


const stackSelectFront = document.querySelector('.stack-select-front');
const stackSelectBack = document.querySelector('.stack-select-back');

const frontOptions = document.querySelector(".front-options");
const backOptions = document.querySelector(".back-options");

const stackSelectFrontInput = stackSelectFront.firstElementChild;
const stackSelectFrontLabel = stackSelectFront.lastElementChild;

const stackSelectBackInput = stackSelectBack.firstElementChild;
const stackSelectBackLabel = stackSelectBack.lastElementChild;



frontOptions.style.display = "none";
backOptions.style.display = "none";
stackSelectFrontInput.style.display = "none";
stackSelectBackInput.style.display = "none";

stackSelectFrontLabel.addEventListener("click", () => {
  frontOptions.style.display = "flex";
  backOptions.style.display = "none";
});

stackSelectBackLabel.addEventListener("click", () => {
  backOptions.style.display = "flex";
  frontOptions.style.display = "none";
});

stackSelectFrontLabel.addEventListener("click", () => {
  stackSelectFront.style.backgroundColor = "rgba(255, 99, 71, 0.171)";
  stackSelectBack.style.backgroundColor = "transparent";
});

stackSelectBackLabel.addEventListener("click", () => {
  stackSelectBack.style.backgroundColor = "rgb(247, 184, 25, 0.171)";
  stackSelectFront.style.backgroundColor = "transparent";
});

const frontEndSelectors = document.querySelector(".front-options").children;


for (const selector of frontEndSelectors) {
  console.log(selector)
  selector.firstElementChild.style.display = "none";
  
  selector.lastElementChild.addEventListener("click", () => {
    
    selector.style.backgroundColor = "rgba(255, 99, 71, 0.171)";
    const reset = document.createElement("img");
    reset.setAttribute("src", "./assets/x.svg");
    selector.firstElementChild.replaceWith(reset);
    
    reset.onclick = () => {
      selector.style.backgroundColor = "transparent";
      reset.style.display = "none";
    };
  });
}

const backEndSelectors = document.querySelector(".back-options").children;

for (const selector of backEndSelectors) {
  selector.firstElementChild.style.display = "none";

  selector.lastElementChild.addEventListener("click", () => {
    console.log(selector.firstElementChild.value);
    selector.style.backgroundColor = "rgb(247, 184, 25, 0.171)";
    const reset = document.createElement("img");
    reset.setAttribute("src", "./assets/x.svg");
    selector.firstElementChild.replaceWith(reset);

    reset.onclick = () => {
      selector.style.backgroundColor = "transparent";
      reset.style.display = "none";
    };
  });
}


