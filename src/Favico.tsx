import Favico from 'favico.js';
import * as React from 'react';
import {FavicoProps} from './types';

/**
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
function isEqual(a: object, b: object): boolean {
  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different, objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (const propName of aProps) {
    // If values of same property are not equal, objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects are considered equivalent
  return true;
}

/**
 * @class Favico
 * @classdesc React wrapper around favico.js
 * @see https://github.com/ejci/favico.js
 */
export default class Favico extends React.Component<FavicoProps> {
  private favico: Favico;

  constructor(props: FavicoProps) {
    super(props);
    this.favico = new Favico(props);
  }

  componentDidMount() {
    const {counter, ...other} = this.props;
    this.favico.badge(counter, other);
  }

  componentDidUpdate(prevProps: FavicoProps) {
    const {counter, ...other} = this.props;

    if (!isEqual(this.props, prevProps)) {
      this.favico.badge(counter, other);
    }
  }

  render() {
    return null;
  }
}
