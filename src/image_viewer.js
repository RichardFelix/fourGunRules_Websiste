import big from './img/big.jpg';
const small = require('./img/small.jpg');
import './sass/image_viewer.scss';

export default() => {
  const bigImage = document.createElement('img');
  bigImage.src = big;

  document.body.appendChild(bigImage);

  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
}
