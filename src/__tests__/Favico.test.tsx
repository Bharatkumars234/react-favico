import {render, shallow} from 'enzyme';
import FavicoJs from 'favico.js';
import * as React from 'react';
import Favico from '../Favico';
import {FavicoJsOptions, Type} from '../types';

const mockedBadge = jest.fn();

jest.mock('favico.js', () => {
  return {
    default: () => ({
      badge: mockedBadge,
    }),
  };
});

const getFavico = (props?: FavicoJsOptions) => (
  <Favico counter={1} {...props} />
);

describe('Favico', () => {
  it('Should render nothing', () => {
    expect(render(getFavico()).html()).toBeNull();
  });

  it('Should call vendor favico.js on render', () => {
    shallow(
      getFavico({
        type: Type.Rectangle,
      }),
    );

    expect(mockedBadge).toHaveBeenCalledTimes(1);
    expect(mockedBadge).toHaveBeenCalledWith(1, {type: 'rectangle'});
  });

  it('Should call internal favico.js methods only if required props will change', () => {
    const wrap = shallow(getFavico());

    wrap
      .setProps({
        type: Type.Rectangle,
      })
      .update();

    // Because first call was on mount
    expect(mockedBadge).toHaveBeenCalledTimes(2);

    wrap
      .setProps({
        type: Type.Rectangle,
      })
      .update();

    // Not called
    expect(mockedBadge).toHaveBeenCalledTimes(2);

    wrap
      .setProps({
        type: Type.Circle,
      })
      .update();

    expect(mockedBadge).toHaveBeenCalledTimes(3);
  });
});
