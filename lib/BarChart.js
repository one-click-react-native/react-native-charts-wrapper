import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';

import BarLineChartBase from './BarLineChartBase';
import {barData} from './ChartDataConfig';
import MoveEnhancer from './MoveEnhancer'
import ScaleEnhancer from "./ScaleEnhancer";
import HighlightEnhancer from "./HighlightEnhancer";
import ScrollEnhancer from "./ScrollEnhancer";
import { Platform } from 'react-native';

class BarChart extends React.Component {
  getNativeComponentName() {
    return Platform.OS=='android' ? 'RNBarChart' : 'RNBarChartView'
  }

  getNativeComponentRef() {
    return this.nativeComponentRef
  }

  render() {
    return <RNBarChart {...this.props} ref={ref => this.nativeComponentRef = ref} />

  }
}

BarChart.propTypes = {
  ...BarLineChartBase.propTypes,

  drawValueAboveBar: PropTypes.bool,
  drawBarShadow: PropTypes.bool,
  highlightFullBarEnabled: PropTypes.bool,

  data: barData
}

var RNBarChart = requireNativeComponent(Platform.OS=='android' ? 'RNBarChart' : 'RNBarChartView', BarChart, {
  nativeOnly: {onSelect: true, onChange: true}
})

export default ScrollEnhancer(HighlightEnhancer(ScaleEnhancer(MoveEnhancer(BarChart))))
