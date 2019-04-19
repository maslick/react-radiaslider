import ReactDom from "react-dom";
import React from "react";
import { RadiaSlider, LinearSlider } from "./index";

let mount = document.getElementById("app");
ReactDom.render(
    <div>
        <RadiaSlider id="hello1" continuousMode="true"/>
        <br/><br/>
        <RadiaSlider id="hello2" continuousMode="false"/>
        <br/><br/>
        <LinearSlider id="karandashi1"/>
        <br/><br/>
        <LinearSlider id="karandashi2" continuousMode="false"/>
    </div>, mount);
