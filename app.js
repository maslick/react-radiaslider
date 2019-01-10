import React from "react";
import ReactDom from "react-dom";
import { circular as Slider } from "@maslick/radiaslider";


class RadiaSlider extends React.Component {

    renderBand(i, radius, min, max, step, color, changed) {
        this.slider.addSlider({
            id: i,
            radius: radius,
            min: min,
            max: max,
            color: color,
            changed: changed
        });
    }

    render() {
        return (
            <div className="slider">
                <canvas id={this.props.id} className="graph" width="400" height="400"/>
                <div id={this.props.id + "_value1"} className="dashboard" style={{background: "#104b63", color: "white"}}/>
                <div id={this.props.id + "_value2"} className="dashboard" style={{background: "#76c7e9", color: "white"}}/>
                <div id={this.props.id + "_value3"} className="dashboard" style={{background: "#ff9a9a", color: "white"}}/>
                <div id={this.props.id + "_value4"} className="dashboard" style={{background: "#fff69f", color: "black"}}/>
            </div>
        );
    }

    componentDidMount() {
        this.slider = new Slider({
            canvasId: this.props.id,
            continuousMode: this.props.continuousMode === 'true'
        });

        this.renderBand(1, 50, -50, 50, 1, "#104b63", v => {
            document.getElementById(this.props.id + '_value1').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(2, 90, -100, 100, 5, "#76c7e9", v => {
            document.getElementById(this.props.id + '_value2').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(3, 130, 0, 360, 0.1, "#ff9a9a", v => {
            document.getElementById(this.props.id + '_value3').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(4, 170, 0, 360, 1, "#fff69f", v => {
            document.getElementById(this.props.id + '_value4').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.slider.setSliderValue(1, 34);
        this.slider.setSliderValue(2, 70);
        this.slider.setSliderValue(3, 307);
        this.slider.setSliderValue(4, 307);
    }
}

let mount = document.getElementById("app");
ReactDom.render(
    <div>
        <RadiaSlider id="hello1" continuousMode="true"/>
        <br/><br/>
        <RadiaSlider id="hello2" continuousMode="false"/>
    </div>, mount);
