export function convertDate(date: string): string {
	const [year, monthNumber, day] = date.slice(0, 10).split('-');
	const month = getMonthName(+monthNumber);

	return `${month} ${day}th, ${year}`;
}

function getMonthName(monthNumber: number) {
	const date = new Date();
	date.setMonth(monthNumber - 1);

	return date.toLocaleString('en-US', { month: 'long' });
}
