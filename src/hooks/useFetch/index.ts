import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null>(null);

	useEffect(() => {
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
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
