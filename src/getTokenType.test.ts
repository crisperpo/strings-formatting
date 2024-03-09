import getTokenType, { TOKEN_TYPE_PRONOUNCED, TOKEN_TYPE_NOT_PRONOUNCED } from './getTokenType';

const TOKEN_TYPE_CASES = [
  {
    case: 'wordContraction',
    value: 'Let\'s',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordNormal',
    value: 'go',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordHyphen',
    value: 'well-known',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordNumber',
    value: '123',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordWithNumber',
    value: 'street123',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordUmlaut',
    value: 'tür',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'wordSpecialCharacters',
    value: 'café',
    type: TOKEN_TYPE_PRONOUNCED
  },
  {
    case: 'blankSpace',
    value: ' ',
    type: TOKEN_TYPE_NOT_PRONOUNCED
  },
  {
    case: 'punctuationSign',
    value: '?',
    type: TOKEN_TYPE_NOT_PRONOUNCED
  },
  {
    case: 'hyphen',
    value: '-',
    type: TOKEN_TYPE_NOT_PRONOUNCED
  }
];

describe('#tokenizeString', () => {
  it.each(TOKEN_TYPE_CASES)('For $case it returns right token type ', ({ value, type }) => {
    expect(getTokenType(value)).toEqual(type);
  });
});
