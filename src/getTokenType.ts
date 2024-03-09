export const TOKEN_TYPE_PRONOUNCED = 'pronounced';
export const TOKEN_TYPE_NOT_PRONOUNCED = 'not_pronounced';

const tokenTypeRegex = /[a-zA-Z0-9äöüÄÖÜß']+/;

const getTokenType = (tokenString: string) =>
  tokenTypeRegex.test(tokenString) ? TOKEN_TYPE_PRONOUNCED : TOKEN_TYPE_NOT_PRONOUNCED;

export default getTokenType;
