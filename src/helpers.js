// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// session storage
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);   //return a state from the session storage 
  // if thereis a storage , otherwise null
  return sessionState && JSON.parse(sessionState)
};


