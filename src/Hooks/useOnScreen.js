import { useEffect, useState } from 'react';

const useOnScreen = (elementRef, showAt = '0px') => {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		const ref = elementRef.current;
		if (ref === null) return;

		const observer = new IntersectionObserver(([entry]) => setIsShow(entry.isIntersecting), {
			showAt,
		});

		observer.observe(ref);

		return () => {
			if (ref === null) return;
			observer.unobserve(ref);
		};
	}, [elementRef, showAt]);

	return isShow;
};

export default useOnScreen;
