import './sharedStyles/styles.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$1,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
