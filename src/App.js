import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var {MenuBar, MenuItem, Menu, Separator} = require('react-menu-bar');
 
var MyMenuBar = React.createClass({
  render: function () {
    return (
      <MenuBar onSelect={this.onSelect}>
        <MenuItem label="File">
          <Menu>
            <MenuItem command="new-window">New Window</MenuItem>
            <MenuItem command="new-file">New File</MenuItem>
          </Menu>
        </MenuItem>
 
        <MenuItem label="Edit">
          <Menu>
            <MenuItem command="undo">Undo</MenuItem>
            <MenuItem command="redo">Redo</MenuItem>
            <Separator />
            <MenuItem label="Find">
              <Menu>
                <MenuItem command="find">Find…</MenuItem>
                <MenuItem command="find-next">Find Next</MenuItem>
                <MenuItem command="find-previous">Find Previous</MenuItem>
                <MenuItem command="use-selection-for-find">Use Selection For Find</MenuItem>
              </Menu>
            </MenuItem>
          </Menu>
        </MenuItem>
 
        <MenuItem label="Help">
          <Menu>
            <MenuItem command="terms-of-use">Terms of Use</MenuItem>
            <MenuItem command="documentation">Documentation</MenuItem>
            <Separator />
            <MenuItem command="release-notes">Release Notes</MenuItem>
          </Menu>
        </MenuItem>
      </MenuBar>
    );
  },
 
  onSelect: function (command) {
    console.log('Selected: %s', command);
  }
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get fuck, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

