const makeSentence = (str, dict, memo = new Map()) => {
  if (memo.has(str)) return memo.get(str);

  if (str.length === 0) {
    memo.set(str, []);
    return [];
  }

  const result = [];

  for (let wrd of dict) {
    const index = str.indexOf(wrd);

    if (index === 0) {
      const newStr = str.slice(wrd.length);
      // eslint-disable-next-line no-unused-vars
      const values = makeSentence(newStr, dict, memo);

      if (values.length === 0 && newStr.length === 0) {
        result.push(wrd);
      } else {
        values.forEach((item) => {
          result.push(wrd + " " + item);
        });
      }
    }
  }

  memo.set(str, result);

  return result;
};

export default makeSentence;
