import React from "react";
import PropTypes from 'prop-types';
import { circular as Slider } from "@maslick/radiaslider";
import $ from "jquery";


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

        const callback = (v) => "Angle: " + v.deg.toFixed(2) + " deg, value: " + v.value.toFixed(2);

        this.renderBand(1, 50, -50, 50, 1, "#104b63", v => {
            $(`#${this.props.id}_value1`).html(callback(v));
        });

        this.renderBand(2, 90, -100, 100, 5, "#76c7e9", v => {
            $(`#${this.props.id}_value2`).html(callback(v));
        });

        this.renderBand(3, 130, 0, 360, 0.1, "#ff9a9a", v => {
            $(`#${this.props.id}_value3`).html(callback(v));
        });

        this.renderBand(4, 170, 0, 360, 1, "#fff69f", v => {
            $(`#${this.props.id}_value4`).html(callback(v));
        });

        this.slider.setSliderValue(1, 34);
        this.slider.setSliderValue(2, 70);
        this.slider.setSliderValue(3, 307);
        this.slider.setSliderValue(4, 307);
    }
}

RadiaSlider.propTypes = {
    id: PropTypes.string.isRequired
};

export default RadiaSlider;