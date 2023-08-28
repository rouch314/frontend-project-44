import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
  // Я так и не понял, почему здесь функция ничего не должна возвращать...
  // Ведь если она используется только в brain-games, в index.js нужно прописать идентичную функцию,
  // которая передает имя пользователя в общую логику, разве нет?
  // Почему тогда не проще просто импортировать из cli.js?
};

export default userName;
