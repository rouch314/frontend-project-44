const randomNumber = (min, max) => {
  const varDigit = Math.floor(Math.random() * (max - min)) + min;
  return varDigit;
};

export default randomNumber;
