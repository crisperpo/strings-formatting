import getTokenType from './getTokenType';
import { Token } from './types';

const tokenSplitRegex = /([\s,.;:!¿?])/;

const tokenizeString = (inputText: string): Array<Token> =>
  inputText
    .split(tokenSplitRegex)
    .filter(tokenString => tokenString !== '')
    .map(
      (tokenString) => ({ value: tokenString, type: getTokenType(tokenString) })
    );

export default tokenizeString;
