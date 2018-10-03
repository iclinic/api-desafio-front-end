module.exports = (date, minutes) => {
  const dateObj = date instanceof Date ? date : new Date(`2017-09-02 ${date}:00`);
  const nextTime = new Date(dateObj.getTime() + minutes * 60000);

  const HH = nextTime.getHours().toString().padStart(2, '0');
  const MM = nextTime.getMinutes().toString().padStart(2, '0');

  return `${HH}:${MM}`;
};
