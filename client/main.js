import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import './main.html';

Meteor.startup(() => {
  ReactDOM.render(<input type="checkbox"/>, document.getElementById('app'));
});


