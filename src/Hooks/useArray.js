import { useState } from 'react';

const useArray = (initialValue) => {
	const [array, setArray] = useState(initialValue);

	const push = (element) => setArray((a) => [...a, element]);

	const unshift = (element) => setArray((a) => [element, ...a]);

	const filter = (callback) => setArray((a) => a.filter(callback));

	const update = (index, newElement) => {
		const a = [...array];
		a.splice(index, 1, newElement);
		setArray([...a]);
	};

	const remove = (index) => {
		const a = [...array];
		a.splice(index, 1);
		setArray([...a]);
	};

	const clear = () => setArray([]);

	return { array, push, unshift, filter, update, remove, clear };
};

export default useArray;
