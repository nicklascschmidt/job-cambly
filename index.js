/**
 * @summary - prints a list of unique words and their frequencies in a given string
 *          - formats string and splits into array of words
 *          - turns array of words into an obj with the word and its frequency (e.g. { [word]: freq } )
 *          - sorts the unique words first alphabetically (asc), then by frequency (desc)
 *          - logs each word to the console
 * @param {string} string - sentences that contain alphanumeric chars and standard punctuation
 *          - assumes that strings with hyphens (-) and underscores (_) are valid
 *          - assumes only single spaces are used (i.e. no tabs, line breaks, etc.)
 * @returns {void}
 */
const printUniqueWords = (str) => {
  const getUniqueWords = (arr) => {
    return arr.reduce((acc, word) => {
      if (!acc[word]) {
        acc[word] = 1;
      } else {
        acc[word]++;
      }
      return acc;
    }, {});
  };

  const sortUniqueWords = (obj) => {
    return Object.entries(obj)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .sort((a, b) => b[1] - a[1]);
  };

  const words = str
    .replace(/[^0-9a-z\ \-\_]/gi, '')
    .toLowerCase()
    .split(' ');
  const uniques = getUniqueWords(words);
  const sortedUniques = sortUniqueWords(uniques);
  sortedUniques.map(([word, freq]) => console.log(word, freq));
  return;
};

const input = 'This is a test. That is not a test. Test';
const input2 = 'This is a te!@#$st. Th%^&*(at is not a te)[];,./st. Test';
const input3 = 'test with a hyphen-word. test with under_score. test';
const inputFinal = 'From the moment the first immigrants arrived on these shores, generations of parents have worked hard and sacrificed whatever is necessary so that their children could have the same chances they had; or the chances they never had. Because while we could never ensure that our children would be rich or successful; while we could never be positive that they would do better than their parents, America is about making it possible to give them the chance. To give every child the opportunity to try. Education is still the foundation of this opportunity. And the most basic building block that holds that foundation together is still reading. At the dawn of the 21st century, in a world where knowledge truly is power and literacy is the skill that unlocks the gates of opportunity and success, we all have a responsibility as parents and librarians, educators and citizens, to instill in our children a love of reading so that we can give them the chance to fulfill their dreams.';

printUniqueWords(inputFinal);
