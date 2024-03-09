import tokenizeString from './tokenizeString';
import { TOKEN_TYPE_PRONOUNCED, TOKEN_TYPE_NOT_PRONOUNCED } from './getTokenType';

const INPUT_STRING = 'Let\'s go to the well-known café at 123 Main St - Our friends are waiting! - said 50cent, his mother, and his friend';

const EXPECTED_TOKENS = [
  { value: "Let's", type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'go', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'to', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'the', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'well-known', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'café', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'at', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: '123', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'Main', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'St', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: '-', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'Our', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'friends', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'are', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'waiting', type: TOKEN_TYPE_PRONOUNCED },
  { value: '!', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: '-', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'said', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: '50cent', type: TOKEN_TYPE_PRONOUNCED },
  { value: ',', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'his', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'mother', type: TOKEN_TYPE_PRONOUNCED },
  { value: ',', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'and', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'his', type: TOKEN_TYPE_PRONOUNCED },
  { value: ' ', type: TOKEN_TYPE_NOT_PRONOUNCED },
  { value: 'friend', type: TOKEN_TYPE_PRONOUNCED }
];

describe('#tokenizeString', () => {
  it('returns array of tokens with right structure', () => {
    expect(tokenizeString(INPUT_STRING)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: expect.any(String),
          type: expect.any(String)
        })
      ])
    );
  });
  it('returns array of tokens from a right string split ', () => {
    expect(tokenizeString(INPUT_STRING)).toEqual(EXPECTED_TOKENS);
  });
});
