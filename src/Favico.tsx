import Favico from 'favico.js';
import * as React from 'react';
import {FavicoProps} from './types';

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
    // @todo Implement props checking
    this.favico.badge(this.props.counter);
  }

  componentDidUpdate(prevProps: FavicoProps) {
    // @todo Implement mapping between props
    this.favico.badge(this.props.counter);
  }

  render() {
    return null;
  }
}
