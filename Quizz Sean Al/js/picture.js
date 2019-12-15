console.log(data.questionsdata);
//data of question link to json

//Vars

 lenObj = Object(data.questionsdata).length;
 currentPage = 0,
 right = 0;
 myAnswers = [];
 ansOptions = 4;
 newimage = document.getElementById("newImg");
 pHead = document.getElementById("phead");
 ansName = document.getElementsByClassName("givenAns");
 mQstn = document.getElementById("givenQuest");
 countProg = document.getElementById("countProg");
 bnext = document.getElementById("bnext");
 bnpre = document.getElementById("bnpre");
 bfin = document.getElementById("endGame");
 checkPage();
 bnext.addEventListener("click", moveNext);
 bnpre.addEventListener("click", moveBack);
 bfin.addEventListener("click", finGame);
 for (var i = 0; i < ansName.length; i++) {
    ansName[i].addEventListener('click', myAnswer, false);
 }

 function myAnswer() {
    var idAns = this.getAttribute("data-id");

    myAnswers[currentPage] = idAns;
    if (data.questionsdata[currentPage].right == idAns) {

    } else {

    }
    addBox();
 }

 function addBox() {
    for (var i = 0; i < mQstn.children.length; i++) {
        var curNode = mQstn.children[i];
        if (myAnswers[currentPage] == (i + 1)) {
            curNode.classList.add("optSelect");
        } else {
            curNode.classList.remove("optSelect");
        }
    }
 }

 function moveNext() {

    if (myAnswers[currentPage]) {

        if (currentPage < (lenObj - 1)) {
            currentPage++;
            checkPage(currentPage);
        } else {

            if (lenObj >= currentPage) {
                finGame();
            } else {

            }
        }
    } else {

    }
 }

 function finGame() {
    if (myAnswers[(lenObj-1)]) {
        var output = "<div class='output'>Result<BR><BR>";
        var questionResult = "NA";

        for (var i = 0; i < myAnswers.length; i++) {
            if (data.questionsdata[i].right == myAnswers[i]) {
                questionResult = '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>';
                right++;
            } else {
                questionResult = '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>';
            }
            output = output + '<p>Question ' + (i + 1) + ' ' + questionResult + '</p> ';
        }
        output = output + '<p>You got ' + right + ' out of ' + lenObj + ' Pictures</p></div> ';
        document.getElementById("questionsdata").innerHTML = output;
    } else {

    }

 }

 function checkPage(i) {

    if (currentPage == 0) {
        bnpre.classList.add("show");
    } else {
        bnpre.classList.remove("hide");
    }
    if ((currentPage + 1) < (lenObj)) {
        bnext.classList.remove("hide");
    } else {
        bnext.classList.add("hide");
        bfin.classList.remove("hide");
    }
    phead.innerHTML = data.questionsdata[currentPage].question;
	newimage.src = data.questionsdata[currentPage].image;
    for (var i = 0; i < ansOptions; i++) {
        var curNode = mQstn.children[i];
		console.log(data.questionsdata[currentPage]["a"+(i+1)]);
        curNode.childNodes[1].innerHTML = capitalise(data.questionsdata[currentPage]["a"+(i+1)]);

        if (myAnswers[currentPage] == (i + 1)) {
            curNode.classList.add("optSelect");
        } else {
            curNode.classList.remove("optSelect");
        }
    }

    var increment = Math.ceil((currentPage) / (lenObj) * 100);
    countProg.style.width = (increment) + '%';
    countProg.innerHTML = (increment) + '%';
 }

 function moveBack() {
    if (currentPage> 0) {
        currentPage--;
        checkPage(currentPage);
    } else {

    }
 }

 function capitalise(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
 }
