import React from 'react';
import { render } from 'react-dom';
import Countdown from 'countdown';

const appRoot = document.getElementById('app-host');

render(<Countdown />, appRoot);