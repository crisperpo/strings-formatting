import tokenizeString from './tokenizeString';

const INPUT_STRING = 'Let\'s go to the well-known café at 123 Main St - Our friends are waiting! - said 50cent, his mother, and his friend';
const TOKEN_TYPE = 'token_type';

const EXPECTED_TOKENS = [
  { value: "Let's", type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'go', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'to', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'the', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'well-known', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'café', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'at', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: '123', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'Main', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'St', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: '-', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'Our', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'friends', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'are', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'waiting', type: TOKEN_TYPE },
  { value: '!', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: '-', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'said', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: '50cent', type: TOKEN_TYPE },
  { value: ',', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'his', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'mother', type: TOKEN_TYPE },
  { value: ',', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'and', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'his', type: TOKEN_TYPE },
  { value: ' ', type: TOKEN_TYPE },
  { value: 'friend', type: TOKEN_TYPE }
];

describe('#tokenizeString', () => {
  it('returns array of tokens with right structure', () => {
    expect(tokenizeString(INPUT_STRING)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: expect.anything(),
          type: expect.anything()
        })
      ])
    );
  });
  it('returns array of tokens from a right string split ', () => {
    expect(tokenizeString(INPUT_STRING)).toEqual(EXPECTED_TOKENS);
  });
});
