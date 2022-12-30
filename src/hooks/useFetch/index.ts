import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null>(null);

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(url)
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => {
					setError(err);
				})
				.finally(() => {
					setLoading(false);
				});
		}, 1000);
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
