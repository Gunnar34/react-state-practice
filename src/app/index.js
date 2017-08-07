import React from "react";
import ReactDOM from "react-dom";
import {
	render
} from "react-dom";

class App extends React.Component {
  state = {
    disabled: true,
  }
  onChange = (e) => {
    const length = e.target.value.length;
    if (length >= 8) {
      this.setState(() => ({ disabled: false }))
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }))
    }
  }
	submitWord = () => {
		alert(this.refs.myInput.value);
		this.refs.myInput.value = '';
		this.setState(() => ({ disabled: true }))
	}
  render() {
    const label = this.state.disabled ? 'Disabled' : 'Submit';
    return (
      <div className="App">
        <button
          style={Object.assign({}, styles.button, !this.state.disabled && styles.buttonEnabled)}
          disabled={this.state.disabled}
					onClick={this.submitWord}
        >{label}</button>
        <input
					ref="myInput"
          style={styles.input}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const styles = {
  input: {
    width: 200,
    outline: 'none',
    fontSize: 20,
    padding: 10,
    border: 'none',
    backgroundColor: '#ddd',
    marginTop: 10,
  },
  button: {
    width: 180,
    height: 50,
    border: 'none',
    borderRadius: 4,
    fontSize: 20,
    cursor: 'pointer',
    transition: '.25s all',
  },
  buttonEnabled: {
    backgroundColor: '#ffc100',
    width: 220,
  }
}

render( < App / > , window.document.getElementById("app"));
