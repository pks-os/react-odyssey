import React, { FunctionComponent, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import errorSVG from '../img/callout-error.svg';
import infoSVG from '../img/callout-info.svg';
import pendingSVG from '../img/callout-pending.svg';
import warningSVG from '../img/callout-warning.svg';
import { Omit } from './util';

export type Callouts = "pending" | "info" | "warning" | "error";

type SVGs_ = { [K in Callouts]: string };

const SVGs: SVGs_ = {
  pending: pendingSVG,
  info: infoSVG,
  warning: warningSVG,
  error: errorSVG,
};

export type CalloutProps = Omit<ComponentProps<'aside'>, 'title'> & {
  kind: Callouts;
  title?: React.ReactNode;
};


export const Callout: FunctionComponent<CalloutProps> = ({ title, kind, children, className, ...rest }) => <aside
  className={classNames('ods-callout', className, {
    'is-ods-callout-help': kind === 'info',
    [`is-ods-callout-${kind}`]: kind !== 'info'
  })}
  aria-live={ kind !== 'error' ? "polite" : undefined}
  role={ kind === 'error' ? 'alert' : undefined}
  {...rest}
>
  <img alt={kind} src={ SVGs[kind] } style={{ height: 24, width: 24, marginRight: 8 }} />
  <div className="ods-callout--content">
    { title && <h1 className="ods-callout--title">
      { title }
    </h1> }
    { children }
  </div>
</aside>;

Callout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.oneOf(Object.keys(SVGs) as Callouts[]),
  style: PropTypes.object,
  title: PropTypes.node,
};
