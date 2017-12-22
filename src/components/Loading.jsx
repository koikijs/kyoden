import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/loading.less');

const points = '150.41 236.29 236.29 150.41 204.86 33.11 87.55 1.67 1.67 87.55 33.11 204.86 150.41 236.29';

class Loading extends Component {
  render() {
    if (this.props.isActive == null) {
      return null;
    }
    return (
      <div className={this.props.isActive === true ? styles.modal : undefined}>
        <div className={this.props.isActive ? styles.loading : `${styles.loading} ${styles.done}`}>
          <svg className={styles.a0} id="layer_0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 237.96">
            <title>rotate0</title>
            <polygon
              className={styles.cls}
              points={points}
            />
            <line className={styles.cls} x1="1.6" y1="87.16" x2="234.95" y2="149.39" />
            <line className={styles.cls} x1="87.67" y1="0.95" x2="151" y2="236.31" />
            <line className={styles.cls} x1="204.35" y1="33.94" x2="33.32" y2="204.96" />
            <line className={styles.cls} x1="137.37" y1="50.39" x2="203.83" y2="33.42" />
            <line className={styles.cls} x1="119.69" y1="117.57" x2="138.07" y2="49.68" />
            <line className={styles.cls} x1="89.99" y1="3.02" x2="137.37" y2="50.39" />
            <line className={styles.cls} x1="234.95" y1="150.8" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="151.15" y1="235.3" x2="169.54" y2="167.42" />
            <line className={styles.cls} x1="120.04" y1="119.33" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="120.75" y1="118.63" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="204.89" y1="34.48" x2="186.51" y2="102.36" />
            <line className={styles.cls} x1="236.01" y1="150.45" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="33.42" y1="205.25" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="119.33" y1="120.04" x2="100.95" y2="187.92" />
            <line className={styles.cls} x1="150.45" y1="236.01" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="117.21" y1="119.33" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="33.42" y1="203.83" x2="51.45" y2="135.6" />
            <line className={styles.cls} x1="1.96" y1="87.51" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="3.72" y1="86.45" x2="69.84" y2="69.13" />
            <line className={styles.cls} x1="87.51" y1="1.96" x2="69.13" y2="69.84" />
            <line className={styles.cls} x1="118.63" y1="117.92" x2="69.84" y2="69.13" />
            <circle cx="119.69" cy="118.27" r="17" />
            <line x1="204.96" y1="33.97" x2="186.16" y2="101.3" />
          </svg>
          <svg className={styles.a1} id="layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 237.96">
            <title>rotate1</title>
            <polygon
              className={styles.cls}
              points={points}
            />
            <line className={styles.cls} x1="1.6" y1="87.16" x2="234.95" y2="149.39" />
            <line className={styles.cls} x1="87.67" y1="0.95" x2="151" y2="236.31" />
            <line className={styles.cls} x1="204.35" y1="33.94" x2="33.32" y2="204.96" />
            <line className={styles.cls} x1="137.37" y1="50.39" x2="203.83" y2="33.42" />
            <line className={styles.cls} x1="119.69" y1="117.57" x2="138.07" y2="49.68" />
            <line className={styles.cls} x1="89.99" y1="3.02" x2="137.37" y2="50.39" />
            <line className={styles.cls} x1="234.95" y1="150.8" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="151.15" y1="235.3" x2="169.54" y2="167.42" />
            <line className={styles.cls} x1="120.04" y1="119.33" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="120.75" y1="118.63" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="204.89" y1="34.48" x2="186.51" y2="102.36" />
            <line className={styles.cls} x1="236.01" y1="150.45" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="33.42" y1="205.25" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="119.33" y1="120.04" x2="100.95" y2="187.92" />
            <line className={styles.cls} x1="150.45" y1="236.01" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="117.21" y1="119.33" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="33.42" y1="203.83" x2="51.45" y2="135.6" />
            <line className={styles.cls} x1="1.96" y1="87.51" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="3.72" y1="86.45" x2="69.84" y2="69.13" />
            <line className={styles.cls} x1="87.51" y1="1.96" x2="69.13" y2="69.84" />
            <line className={styles.cls} x1="118.63" y1="117.92" x2="69.84" y2="69.13" />
            <circle cx="119.69" cy="118.27" r="17" />
            <polygon points="120.39 118.98 235.65 149.39 186.16 101.3 120.39 118.98" />
          </svg>
          <svg className={styles.a2} id="layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 237.96">
            <title>rotate2</title>
            <polygon
              className={styles.cls}
              points={points}
            />
            <line className={styles.cls} x1="1.6" y1="87.16" x2="234.95" y2="149.39" />
            <line className={styles.cls} x1="87.67" y1="0.95" x2="151" y2="236.31" />
            <line className={styles.cls} x1="204.35" y1="33.94" x2="33.32" y2="204.96" />
            <line className={styles.cls} x1="137.37" y1="50.39" x2="203.83" y2="33.42" />
            <line className={styles.cls} x1="119.69" y1="117.57" x2="138.07" y2="49.68" />
            <line className={styles.cls} x1="89.99" y1="3.02" x2="137.37" y2="50.39" />
            <line className={styles.cls} x1="234.95" y1="150.8" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="151.15" y1="235.3" x2="169.54" y2="167.42" />
            <line className={styles.cls} x1="120.04" y1="119.33" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="120.75" y1="118.63" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="204.89" y1="34.48" x2="186.51" y2="102.36" />
            <line className={styles.cls} x1="236.01" y1="150.45" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="33.42" y1="205.25" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="119.33" y1="120.04" x2="100.95" y2="187.92" />
            <line className={styles.cls} x1="150.45" y1="236.01" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="117.21" y1="119.33" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="33.42" y1="203.83" x2="51.45" y2="135.6" />
            <line className={styles.cls} x1="1.96" y1="87.51" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="3.72" y1="86.45" x2="69.84" y2="69.13" />
            <line className={styles.cls} x1="87.51" y1="1.96" x2="69.13" y2="69.84" />
            <line className={styles.cls} x1="118.63" y1="117.92" x2="69.84" y2="69.13" />
            <circle cx="119.69" cy="118.27" r="17" />
            <polygon points="120.39 118.98 204.96 33.97 186.16 101.3 120.39 118.98" />
          </svg>
          <svg className={styles.a3} id="layer_3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 237.96">
            <title>rotate3</title>
            <polygon
              className={styles.cls}
              points={points}
            />
            <line className={styles.cls} x1="1.6" y1="87.16" x2="234.95" y2="149.39" />
            <line className={styles.cls} x1="87.67" y1="0.95" x2="151" y2="236.31" />
            <line className={styles.cls} x1="204.35" y1="33.94" x2="33.32" y2="204.96" />
            <line className={styles.cls} x1="137.37" y1="50.39" x2="203.83" y2="33.42" />
            <line className={styles.cls} x1="119.69" y1="117.57" x2="138.07" y2="49.68" />
            <line className={styles.cls} x1="89.99" y1="3.02" x2="137.37" y2="50.39" />
            <line className={styles.cls} x1="234.95" y1="150.8" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="151.15" y1="235.3" x2="169.54" y2="167.42" />
            <line className={styles.cls} x1="120.04" y1="119.33" x2="168.83" y2="168.13" />
            <line className={styles.cls} x1="120.75" y1="118.63" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="204.89" y1="34.48" x2="186.51" y2="102.36" />
            <line className={styles.cls} x1="236.01" y1="150.45" x2="187.22" y2="101.66" />
            <line className={styles.cls} x1="33.42" y1="205.25" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="119.33" y1="120.04" x2="100.95" y2="187.92" />
            <line className={styles.cls} x1="150.45" y1="236.01" x2="101.66" y2="187.22" />
            <line className={styles.cls} x1="117.21" y1="119.33" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="33.42" y1="203.83" x2="51.45" y2="135.6" />
            <line className={styles.cls} x1="1.96" y1="87.51" x2="50.75" y2="136.31" />
            <line className={styles.cls} x1="3.72" y1="86.45" x2="69.84" y2="69.13" />
            <line className={styles.cls} x1="87.51" y1="1.96" x2="69.13" y2="69.84" />
            <line className={styles.cls} x1="118.63" y1="117.92" x2="69.84" y2="69.13" />
            <circle cx="119.69" cy="118.27" r="17" />
            <polygon points="234.96 148.97 204.96 33.97 186.16 101.3 234.96 148.97" />
          </svg>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  isActive: PropTypes.bool,
};

export default Loading;
