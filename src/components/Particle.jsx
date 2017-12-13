import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/particle.less');

const PARTICLES = {
  fire: {
    bgColor: '#00000',
    emitFrequency: 300,
    startXVariance: '0',
    startYVariance: '0',
    initialDirection: 90,
    initialDirectionVariance: '155',
    initialSpeed: 3,
    initialSpeedVariance: '3.8',
    friction: 0.147,
    accelerationSpeed: 0.3,
    accelerationDirection: 270,
    startScale: 1.2,
    startScaleVariance: 0.62,
    finishScale: '0',
    finishScaleVariance: '0',
    lifeSpan: 65,
    lifeSpanVariance: 17,
    startAlpha: '1',
    startAlphaVariance: '0',
    finishAlpha: '1',
    finishAlphaVariance: '0',
    shapeIdList: [
      'blur_circle'
    ],
    startColor: {
      hue: '17',
      hueVariance: '32',
      saturation: '100',
      saturationVariance: '45',
      luminance: '56',
      luminanceVariance: '19'
    },
    blendMode: true,
    alphaCurveType: '0',
    VERSION: '0.1.3'
  },
  snow: {
    bgColor: '#00000',
    emitFrequency: 300,
    startYVariance: 0,
    initialDirection: '192.5',
    initialDirectionVariance: 0,
    initialSpeed: 0,
    initialSpeedVariance: '0',
    friction: 0.069,
    accelerationSpeed: 0.0805,
    accelerationDirection: 90,
    startScale: '0.02',
    startScaleVariance: '0.63',
    finishScale: '0',
    finishScaleVariance: '0',
    lifeSpanVariance: '500',
    startAlpha: '0.51',
    startAlphaVariance: '1',
    finishAlpha: '0',
    finishAlphaVariance: '0',
    shapeIdList: [
      'blur_circle'
    ],
    startColor: {
      hue: 192,
      hueVariance: 0,
      saturation: 46,
      saturationVariance: 0,
      luminance: '100',
      luminanceVariance: '47'
    },
    blendMode: true,
    alphaCurveType: '0',
    VERSION: '0.1.3'
  }
};

class Particle extends Component {
  componentDidMount() {

    const createjs = window.createjs;
    const particlejs = window.particlejs;
    const stage = new createjs.Stage('canvas');
    const particleSystem = new particlejs.ParticleSystem();
    stage.addChild(particleSystem.container);

    function handleTick() {
      particleSystem.update();
      stage.update();
    }

    createjs.Ticker.framerate = 60;
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', handleTick);
    this.particleSystem = particleSystem;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === 'fire' && nextProps.value !== this.props.value) {
      const canvas = this.canvasElem;
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;

      this.particleSystem.importFromJson(
        {
          ...PARTICLES.fire,
          width: document.body.clientWidth,
          height: document.body.clientHeight,
          startX: document.body.clientWidth / 2,
          startY: (document.body.clientHeight / 2) - 80
        }
      );
    } else if (nextProps.value === 'snow' && nextProps.value !== this.props.value) {
      const canvas = this.canvasElem;
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;

      this.particleSystem.importFromJson(
        {
          ...PARTICLES.snow,
          width: document.body.clientWidth,
          height: document.body.clientHeight,
          startXVariance: document.body.clientWidth,
          startX: document.body.clientWidth / 2,
          startY: 0,
          lifeSpan: document.body.clientHeight,
        }
      );
    }
  }

  render() {
    return (
      <canvas
        ref={(elem) => { this.canvasElem = elem; }}
        className={styles.particle}
        id="canvas"
      />
    );
  }
}

Particle.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Particle;
