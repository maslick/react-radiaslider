import ReactDom from "react-dom";
import React from "react";
import RadiaSlider from "./dist/index";

let mount = document.getElementById("app");
ReactDom.render(
    <div>
        <RadiaSlider id="hello1" continuousMode="true"/>
        <br/><br/>
        <RadiaSlider id="hello2" continuousMode="false"/>
    </div>, mount);