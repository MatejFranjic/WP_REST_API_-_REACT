import React from 'react';
import { Component } from 'react';
/*------------------*/
export default class App extends Component {
  render() {
    return (
      <div>
      <h4>This is only for educational purposes. And content is pulled from my log I write for a friend to show him how NOT to write a blog ;) !
			</h4>
			{ this.props.children }
    	</div>
    );
  }
}
