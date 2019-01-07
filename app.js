import React from "react";
import ReactDom from "react-dom";
import Slider from "@maslick/radiaslider/circular/slider-circular";


class RadiaSlider extends React.Component {
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
        let slider = new Slider({
            canvasId: this.props.id,
            continuousMode: this.props.continuousMode === 'true'
        });

        slider.addSlider({
            id: 1,
            radius: 50,
            min: 0,
            max: 30,
            step: 1,
            color: "#104b63",
            changed: v => {
                document.getElementById(this.props.id + '_value1').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
            }
        });

        slider.addSlider({
            id: 2,
            radius: 90,
            min: 0,
            max: 30,
            step: 1,
            color: "#76c7e9",
            changed: v => {
                document.getElementById(this.props.id + '_value2').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
            }
        });

        slider.addSlider({
            id: 3,
            radius: 130,
            min: 0,
            max: 30,
            step: 5,
            color: "#ff9a9a",
            changed: v => {
                document.getElementById(this.props.id + '_value3').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
            }
        });

        slider.addSlider({
            id: 4,
            radius: 170,
            min: 0,
            max: 30,
            step: 5,
            color: "#fff149",
            changed: v => {
                document.getElementById(this.props.id + '_value4').innerHTML = "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);
            }
        });
    }
}

let mount = document.getElementById("app");
ReactDom.render(
    <div>
        <RadiaSlider id="hello1" continuousMode="true"/>
        <RadiaSlider id="hello2" continuousMode="false"/>
    </div>, mount);
