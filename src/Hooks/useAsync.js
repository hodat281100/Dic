import { useCallback, useEffect, useState } from 'react';

const useAsync = (callback, dependencies = []) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [value, setValue] = useState();

	const memory = useCallback(() => {
		setLoading(true);
		setError(null);
		setValue(null);
		callback()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [callback]);

	useEffect(memory, [...dependencies, memory]);

	return { loading, error, value };
};

export default useAsync;
