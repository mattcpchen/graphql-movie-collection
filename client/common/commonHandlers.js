const getYearWeek = () => {
  let d = new Date();
  d.setHours(0,0,0,0);
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setDate(d.getDate() + 4 - (d.getDay()||7));
  // Get first day of year
  const yearStart = new Date(d.getFullYear(),0,1);
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  
  return d.getFullYear()+'_'+weekNo;
};










const handlers = {
  getYearWeek
};

export default handlers;