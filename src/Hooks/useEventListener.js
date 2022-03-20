import { useEffect, useRef } from 'react';

const useEventListener = (type, callback) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const event = (e) => callbackRef.current(e);
		window.addEventListener(type, event);
		return () => window.removeEventListener(type, event);
	}, [type]);
};

export default useEventListener;
