export const trimString = (string, length) => {
  if (string.length > length) {
    return string.substr(0, length) + ' . . .';
  } else {
    return string.substr(0, length);
  }
}

export const getLastPage = totalResults => Math.ceil(totalResults/50);

export const getCurrentPage = offset =>  Math.ceil(offset/50) + 1;

export const getOffset = totalResults => totalResults - totalResults%50;
