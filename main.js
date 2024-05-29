const myDiv = document.querySelector(".boxes");
const boxArr = myDiv.childNodes;
let str = "X";
const used =[];
const teamO = [];
const teamX = [];

for(let i = 0; i < boxArr.length; i++){
    boxArr[i].addEventListener("click",place);
    boxArr[i].addEventListener("touchend",place);
    function place(e){
        e.preventDefault;

        if(!used.includes(i)){//
            used.push(i);// makes sure cant place in same box twice

            const pa = document.createElement("div");
            pa.innerHTML = "<p>" + str +"<p>"
            pa.classList.add("clr"); 
            pa.classList.add("placed");
            
            boxArr[i].appendChild(pa);
            if(str == "X"){
                teamX.push(i);//add it to x's slot
                str = "O"
            }
            else{
                teamO.push(i);//add it to O's slot
                str = "X";
            }
           

            //after place check if someone won

            //checks horizontal
            for(let j = 0; j < 3; j ++){
                if(boxArr[j*3+0].lastChild.firstChild != null && boxArr[j*3+1].lastChild.firstChild != null && boxArr[j*3+2].lastChild.firstChild != null ){
                    if(boxArr[j*3+0].lastChild.firstChild.innerText == boxArr[j*3+1].lastChild.firstChild.innerText && boxArr[j*3+1 ].lastChild.firstChild.innerText == boxArr[j*3+2].lastChild.firstChild.innerText){
                        console.log("horizontal winner" + j);
                    }
                }
            }

            //horizontal
            for(let j = 0; j < 3; j ++){
                if(boxArr[j].lastChild.firstChild != null && boxArr[j+3].lastChild.firstChild != null && boxArr[j+6].lastChild.firstChild != null ){
                    if(boxArr[j].lastChild.firstChild.innerText == boxArr[j+3].lastChild.firstChild.innerText && boxArr[j+3].lastChild.firstChild.innerText == boxArr[j+6].lastChild.firstChild.innerText){
                        console.log("vertical winner" + j);
                    }
                }
            }
            
            //topleft-bottomright
            
                if(boxArr[0].lastChild.firstChild != null && boxArr[4].lastChild.firstChild != null && boxArr[8].lastChild.firstChild != null ){
                    if(boxArr[0].lastChild.firstChild.innerText == boxArr[4].lastChild.firstChild.innerText && boxArr[4].lastChild.firstChild.innerText == boxArr[8].lastChild.firstChild.innerText){
                        console.log("tl-br winner");
                    }
                }
                if(boxArr[2].lastChild.firstChild != null && boxArr[4].lastChild.firstChild != null && boxArr[6].lastChild.firstChild != null ){
                    if(boxArr[2].lastChild.firstChild.innerText == boxArr[4].lastChild.firstChild.innerText && boxArr[4].lastChild.firstChild.innerText == boxArr[6].lastChild.firstChild.innerText){
                        console.log("tr-bl winner");
                    }
                }
            


        }
    
    }
}
