const between = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = () => {
  const HH = between(8, 18).toString().padStart(2, '0');
  const MM = between(0, 59).toString().padStart(2, '0');
  return `${HH}:${MM}`;
};
