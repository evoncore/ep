import { render } from 'react-dom';

// Styles
import css from '../public/stylus/main.styl';

// UI
import ui from '../public/js/ui';

import userSigned from './auth';
import { userRouter, guestRouter } from './router';

if (userSigned) {
  render(userRouter, document.querySelector('#root'));
} else {
  render(guestRouter, document.querySelector('#root'));
}