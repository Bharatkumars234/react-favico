import * as React from 'react';
import { FavicoProps } from './types';
/**
 * @class Favico
 * @classdesc React wrapper around favico.js
 * @see https://github.com/ejci/favico.js
 */
export default class Favico extends React.Component<FavicoProps> {
    private favico;
    constructor(props: FavicoProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: FavicoProps): void;
    render(): any;
}
