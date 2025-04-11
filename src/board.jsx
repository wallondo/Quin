import React, { useState } from "react";


export default function Board(){
    var boardy;
    var board;
    const [y,setY] = useState(0);
    const [x,setX] = useState(0);
setTimeout(() => {
    boardy = document.getElementById("board");
    board = document.getElementById("app");
    board.addEventListener("mousemove",(evt)=>{
       setY(evt.pageY);
       setX(evt.pageX+10);
    })
    return false;
}, 1000);


    return(
         <div className="board" id="board" style={{top:y,left:x}}>
            <img src="/board.gif" alt="" />
        </div>
    )
}
