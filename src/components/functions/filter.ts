const getFilteredArray = (array: any[], filter: string) => {
	return array.filter(({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
};

export default getFilteredArray;
