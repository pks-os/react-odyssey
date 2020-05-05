import React from 'react';

import { Modal } from './Modal';
import { Button } from './Button';

Modal.setAppElement('body');

class ModalDemo extends React.Component<{}, { submitted: boolean; open: boolean }> {
  state = {
    submitted: false,
    open: false,
  };

  submit = () => this.setState({ submitted: true, open: false });

  render () {
    return <>
      {this.state.open && <Modal
        cancellable
        title="Example Modal"
        submitBtnTxt="Submit!"
        onCancel={() => this.setState({ open: false })}
        submit={this.submit.bind(this)}>
        <p>
          Example modal text?
        </p>
      </Modal>}
      <Button onClick={() => this.setState({ open: true })}>Open modal</Button>
      { this.state.submitted && <h4>SUBMITTED</h4>}
    </>;
  }
}

export default <>
  <ModalDemo />
</>;