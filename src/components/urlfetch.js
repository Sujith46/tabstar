import React from "react";

import Button from "../utlis/button";
import Container from "../container/layoutContainer";

import style from "../components/urlfetch.css";
import Pencil from "../images/pencil.svg";
import Trash from "../images/trash.svg";

function urlfetch() {
  var url = window.location.href;
  console.log(url);

  var getFavicon = function () {
    var favicon = undefined;
    var myimage = undefined;
    var image = new Image();
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++) {
      if (
        nodeList[i].getAttribute("rel") === "icon" ||
        nodeList[i].getAttribute("rel") === "shortcut icon"
      ) {
        favicon = nodeList[i].getAttribute("href");
        console.log(favicon);
        image.src = favicon;
        myimage = image.src;
        console.log(myimage);
      }
    }
    // return favicon;
    return myimage;
  };

  // alert(getFavicon());

  var newimage = getFavicon();

  return (
    <Container>
      <div className="url">
        <Button />
        <div className="cardWrappper" style={style.cardWrapper}>
          <img class="favivon" src={newimage} alt="favicon"></img>
          <div class="url-link">{url}</div>
          <img src={Pencil} alt="rename"></img>
          <img src={Trash} alt="delete"></img>
        </div>
      </div>
    </Container>
  );
}

export default urlfetch;
