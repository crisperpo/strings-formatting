import tokenizeString from './tokenizeString';

const inputString = 'Let\'s go to the well-known café at 123 Main St - Our friends are waiting! - said 50cent, his mother, and his friend';
const tokens = tokenizeString(inputString);

console.log(`Input:\n${inputString}\nTokens:\n`);
console.log(tokens);
