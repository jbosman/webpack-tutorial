// These imports are included here so webpack knows to pull them in
// import big from '../assets/big.jpg';
// import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
	const image = document.createElement('img');

	image.src = 'http://lorempixel.com/400/400';

	document.body.appendChild(image);
}