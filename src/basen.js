module.exports = (seed, chars) => {
	const n = chars.length;

	if (seed === 0) {
		return chars[0];
	}

	let s = '';

	while (seed > 0) {
		s = chars[seed % n] + s;
		seed = Math.floor(seed / n);
	}

	return s;
}
