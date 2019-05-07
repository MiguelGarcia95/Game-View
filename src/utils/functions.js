import moment from 'moment';

export const getLastPage = totalResults => Math.ceil(totalResults/50);

export const getCurrentPage = offset =>  Math.ceil(offset/50) + 1;

export const getOffset = totalResults => totalResults - totalResults%50;

export const setBackgroundImage = image => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
}

export const setBackgroundImageFixed = image => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
  }
}

export const trimString = (string, length) => {
  if (string.length > length) {
    return string.substr(0, length) + ' . . .';
  } else {
    return string.substr(0, length);
  }
}

export const getDate = (original_date, expected_date) => {
  if (original_date !== null) {
    return moment(original_date).format('LL');
  } else if (expected_date) {
    return expected_date;
  } else {
    return 'N/A';
  }
}
