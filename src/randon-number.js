const generateRandomNumber = (min, max) => {
  const randomDigit = Math.floor(Math.random() * (max - min)) + min;
  return randomDigit;
};

export default generateRandomNumber;
// comment
