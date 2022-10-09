// see if two strings are anagrams - so you can take letters from one word and form another with it
// anagram("rat", "tar") // true

const anagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();
  const frequency1 = {};
  const frequency2 = {};

  for (d of firstWord) {
    frequency1[d] = (frequency1[d] ?? 0) + 1;
  }
  for (d of secondWord) {
    frequency2[d] = (frequency2[d] ?? 0) + 1;
  }

  for (key in frequency1) {
    if (frequency1[key] !== frequency2[key]) return false;
  }
  return true;
};
