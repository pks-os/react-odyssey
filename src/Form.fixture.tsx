import React from 'react';
import { Button } from './Button';

import {
  FieldSet, FormHeaderWithTitle, TextInput, PasswordInput, CheckBox, TextArea, FormActions, FormFooter, Select
} from './Form';


const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
class FormDemo extends React.Component<{}, {msg: string; inputValue: string}> {
  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();
  ref3 = React.createRef<HTMLInputElement>();
  ref4 = React.createRef<HTMLTextAreaElement>();
  ref5 = React.createRef<HTMLSelectElement>();
  ref6 = React.createRef<HTMLButtonElement>();

  state = {
    msg: '',
    inputValue: '',
  };

  render () {
    const { msg, inputValue } = this.state;
    return <form className="ods-form" onSubmit={e => {
      e.preventDefault();
      const formValues = {
        [this.ref1.current.name]: this.ref1.current.value,
        'controlled input': inputValue,
        [this.ref2.current.name]: this.ref2.current.value,
        [this.ref3.current.name]: this.ref3.current.checked ? 'checked' : 'not checked',
        [this.ref4.current.name]: this.ref4.current.value,
        [this.ref5.current.name]: this.ref5.current.value,
        [this.ref6.current.name]: this.ref6.current.type,
      };
      this.setState({ msg: JSON.stringify(formValues, null, 2) });
    }
    }>
      <FormHeaderWithTitle>Title</FormHeaderWithTitle>
      <p>
        This is a form!
      </p>
      <FieldSet legend="I'm a FieldSet legend">
        <TextInput label="Text Input" defaultValue="default value" autoSave="off" autoComplete="off" autoFocus ref={this.ref1} name="TextInput" />
        <TextInput legend="I'm a TextInput legend" label={<h5>I&rsquo;m a text input React Node as Label (controlled input)</h5>} required={false} value={inputValue} onChange={e => this.setState({ inputValue: e.target.value })}/>
        <PasswordInput label="Password Input" ref={this.ref2} name="PasswordInput" required={false} />
      </FieldSet>
      <CheckBox label="Check Box" ref={this.ref3} name="CheckBox" id="asdf"/>
      <TextArea label="Text Area" ref={this.ref4} name="TextArea" required={false} />
      <Select label="Select me" ref={this.ref5} aside="This is a select thingy." name="Select">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>

      <TextInput label="Error Input" error="Oh no." aside={LoremIpsum} />
      <FormActions>
        <Button isSecondary onClick={() => this.setState({ msg: '' })}>Hide values</Button>
        <Button type="submit" ref={this.ref6} name="Button">Show values</Button>
      </FormActions>
      <pre>{ msg }</pre>
      <FormFooter className="special-extra">
        By clicking Button, you implicitly agree to this form footer.
        <br />
        <a href="#">Link</a>
        <br />
      </FormFooter>
    </form>;
  }
}

export default <FormDemo />;