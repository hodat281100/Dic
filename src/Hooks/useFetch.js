import { useAsync } from '.';

const DEFAULT_OPTIONS = {
	hearders: { 'Content-Type': 'application/json' },
};

const useFetch = (url, options = {}, dependencies = []) =>
	useAsync(() => {
		fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(async (res) => {
			if (res.ok) return res.json();
			return res.json().then((json) => new Promise.reject(json));
		});
	}, dependencies);

export default useFetch;
