import React from "react";

import Button from "../utlis/button";
import Container from "../container/layoutContainer";

import style from '../components/urlfetch.css'

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
        nodeList[i].getAttribute("rel") == "icon" ||
        nodeList[i].getAttribute("rel") == "shortcut icon"
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

//   alert(getFavicon());

  var newimage = getFavicon;

  return (
    <Container>
      <div className="url">
        <Button />
        <div className="cardWrappper" style={style.cardWrapper}>
          <div>{url}</div>
          {getFavicon}
          <img src={newimage} alt="favicon"></img>
          <link href={newimage}></link>
        </div>
      </div>
    </Container>
  );
}

export default urlfetch;
