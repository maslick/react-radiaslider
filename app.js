import React from "react";
import ReactDom from "react-dom";
import Slider from "@maslick/radiaslider/circular/slider-circular";


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
                <div id={this.props.id + "_value1"} className="dashboard"/>
                <div id={this.props.id + "_value2"} className="dashboard"/>
                <div id={this.props.id + "_value3"} className="dashboard"/>
                <div id={this.props.id + "_value4"} className="dashboard"/>
            </div>
        );
    }

    componentDidMount() {
        this.slider = new Slider({
            canvasId: this.props.id,
            continuousMode: this.props.continuousMode === 'true'
        });

        this.renderBand(1, 50, 0, 30, 1, "#104b63", v => {
            document.getElementById(this.props.id + '_value1').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(2, 90, 0, 30, 1, "#76c7e9", v => {
            document.getElementById(this.props.id + '_value2').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(3, 130, 0, 30, 5, "#ff9a9a", v => {
            document.getElementById(this.props.id + '_value3').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });

        this.renderBand(4, 170, 0, 30, 5, "#fff69f", v => {
            document.getElementById(this.props.id + '_value4').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
        });
    }
}

let mount = document.getElementById("app");
ReactDom.render(
    <div>
        <RadiaSlider id="hello1" continuousMode="true"/>
        <RadiaSlider id="hello2" continuousMode="false"/>
    </div>, mount);
