export const trimString = (string, length) => {
  if (string.length > length) {
    return string.substr(0, length) + ' . . .';
  } else {
    return string.substr(0, length);
  }
}