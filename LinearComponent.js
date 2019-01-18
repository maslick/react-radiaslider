import React from "react";
import PropTypes from 'prop-types';
import Slider from "@maslick/radiaslider/src/slider-linear";


export default class LinearSlider extends React.Component {

    initKarandashi() {
        var colors = [
            "#104b63",
            "#ff9a9a",
            "#76c7e9",
            "#ffff9a",
            "#9e9e9e",
            "#bcf5bc",
            "#f096f0",
            "#229ed1"
        ];

        var temp = {
            min: -100,
            max: 100,
            step: 10
        };

        for (let i=0; i<24; i++) {
            let t = temp;
            t.width = 340;
            t.color = colors[i%8];
            t.x0 = 30 + 40*i;
            t.y0 = 370;
            t.id = i.toString();
            this.slider.addSlider(t);
            this.slider.setSliderValue(t.id, LinearSlider.randomInRange(temp.min, temp.max));
        }
    }

    static randomInRange(start, end){
        return Math.floor(Math.random() * (end - start + 1) + start);
    }

    render() {
        return (
            <canvas id={this.props.id} width="980" height="400"/>
        );
    }

    componentDidMount() {
        this.slider = new Slider({ canvasId: this.props.id, continuousMode: this.props.continuousMode, vertical: true });
        this.initKarandashi();
    }
}


LinearSlider.propTypes = {
    id: PropTypes.string.isRequired,
    continuousMode: PropTypes.bool
};

LinearSlider.defaultProps = {
    continuousMode: true
};
