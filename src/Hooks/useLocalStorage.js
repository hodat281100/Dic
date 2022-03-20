import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || defaultValue);

	const remove = () => setValue(undefined);

	useEffect(() => {
		if (value === undefined) return localStorage.remove(key);
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue, remove];
};

export default useLocalStorage;
