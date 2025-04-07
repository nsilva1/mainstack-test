export const formatNumber = (num: number): string => {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(num);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  };
  const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  return dateFormatter.format(date);
};

export const getInitials = (firstName: string, lastName: string): string => {
  if (firstName || lastName) {
    return `${firstName.trim().charAt(0).toUpperCase()}${lastName.trim().charAt(0).toUpperCase()}`;
  } else {
    return '';
  }
};
