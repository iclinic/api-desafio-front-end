module.exports = () => {
  const date = new Date();
  const day = date.getDay();

  const end_date = new Date(new Date().setDate(
    date.getDate() + ((12 - date.getDay()) % 7)
  ));
  const start_date = new Date(new Date().setDate(
    date.getDay() === 0 ? date.getDate() - 7 : date.getDate() - 7 - day
  ));

  return {
    start_date: `${start_date.getFullYear()}-${start_date.getMonth()+1}-${start_date.getDate()}`,
    end_date: `${end_date.getFullYear()}-${end_date.getMonth()+1}-${end_date.getDate()}`
  };
};
