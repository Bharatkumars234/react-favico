import Favico from 'favico.js';
import * as React from 'react';

// @todo Move all interfaces to types.js

// Original options that can be passed to favico.js instance
interface FavicoJsOptions {
  bgColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontStyle?: string;
  type?: string;
  position?: string;
  animation?: string;
  elementId?: string;
  element?: HTMLElement;
  dataUrl?: (url: string) => any;
}

// Methods from original favico.js library
interface FavicoJs {
  badge(count: number, animation?: string): void;
  badge(count: number, opts: FavicoJsOptions): void;
  reset(): void;
  image(imageElement: HTMLElement): void;
  video(imageElement: HTMLElement): void;
  webcam(): void;
}

// Interface for react component props
interface FavicoProps extends FavicoJsOptions {
  counter: number;
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

    // this.favico = new Favico(props.options);
    this.favico = new Favico(props);
  }

  componentDidMount() {
    // @todo Implement props checking
    this.favico.badge(this.props.counter);
  }

  componentDidUpdate() {
    // @todo Implement mapping between props
    this.favico.badge(this.props.counter);
  }

  render() {
    return null;
  }
}
