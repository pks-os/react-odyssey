import React, { ReactNode, ComponentProps } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from './Button';
import { Omit } from './util';

export type ModalType = 'primary' | 'secondary' | 'danger';

type ModalEvent = React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.SyntheticEvent<HTMLButtonElement>;

export type ModalProps = Omit<ComponentProps<'div'>, 'title'> & {
  cancellable?: boolean;
  disabled?: boolean;
  onCancel?: Function;
  submitBtnTxt?: ReactNode;
  submit: Function;
  title?: ReactNode;
  type?: ModalType;
};

export class Modal extends React.Component<ModalProps> {
  public static setAppElement = ReactModal.setAppElement;

  public static defaultProps = {
    children: '',
    submitBtnTxt: 'Submit',
    type: 'primary',
  };

  public static propTypes = {
    cancellable: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onCancel: PropTypes.func,
    submitBtnTxt: PropTypes.node,
    submit: PropTypes.func.isRequired,
    title: PropTypes.node,
    type: PropTypes.string, // TODO: use oneOf() + ModalType here
  }

  public style = {
    content: { display: 'block' },
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  };

  public close = (e?: ModalEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  public submit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    this.props.submit();
  }

  public render () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cancellable, children, disabled, submitBtnTxt, title, type, className, submit, ...rest } = this.props;

    return <ReactModal isOpen shouldCloseOnOverlayClick onRequestClose={this.close} className="ods-modal" style={this.style}>
      <div className={classNames('modal--overlay', `is-modal-${type}`, className)}  {...rest}>
        <div className="ods-modal--dialog">
          <div className="ods-modal--header">
            <h1 className="ods-modal--title">{ title }</h1>
            <button className="ods-modal--close" aria-label="Close modal" data-micromodal-close onClick={this.close} />
          </div>
          <main className="ods-modal--content">
            { children }
          </main>
          <footer className="ods-modal--footer">
            <Button isSecondary={type === 'secondary'} isDanger={type === 'danger'} disabled={disabled} onClick={this.submit}>
              { submitBtnTxt }
            </Button>
            { cancellable && <Button isSecondary disabled={disabled} onClick={this.close}>
              Cancel
            </Button> }
          </footer>
        </div>
      </div>
    </ReactModal>;
  }
}


// <div className="ods-modal" id="ods-modal-standard" aria-hidden="true">
//   <div className="ods-modal--overlay" data-micromodal-close>
//     <div className="ods-modal--dialog" role="dialog" aria-modal="true" aria-labelledby="ods-modal-standard-title">
//       <header className="ods-modal--header">
//         <button className="ods-modal--close" aria-label="Close modal" data-micromodal-close></button>
//         <h1 className="ods-modal--title" id="ods-modal-standard-title">
//           This is a Modal
//         </h1>
//       </header>
//       <main className="ods-modal--content" id="ods-modal-standard-content">
//         <p>
//           Try hitting the <kbd>tab</kbd> key and notice how the focus stays within the modal itself. Also, <kbd>esc</kbd> to close modal.
//         </p>
//       </main>
//       <footer className="ods-modal--footer">
//         <button className="ods-button is-ods-button-clear" data-micromodal-close aria-label="Close this dialog window">Cancel</button>
//         <button className="ods-button">Continue</button>
//       </footer>
//     </div>
//   </div>
// </div>
