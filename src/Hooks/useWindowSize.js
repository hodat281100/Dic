import { useState } from 'react';
import { useEventListener } from '.';

const useWindowSize = () => {
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEventListener('resize', () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	});

	return size;
};

export default useWindowSize;
