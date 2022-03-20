import { useEffect } from 'react';
import { useTimeout } from '.';

const useDebounce = (callback, time, dependencies) => {
	const { clear, reset } = useTimeout(callback, time);
	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, [clear]);
};

export default useDebounce;
