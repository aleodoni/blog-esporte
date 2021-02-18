import { format, parseISO } from 'date-fns';

export const formatSlug = (title: string): string => {
  const removedSpaces = title.replace(/\s+/g, '');
  const removeBar = removedSpaces.replace(/[//’]/g, '_');

  return removeBar;
};

export const formatDate = (date: string | null): string => {
  if (!date) return 'Atual';

  const parsedDate = parseISO(date);
  try {
    const formattedDate = format(parsedDate, "dd'/'MM'/'yyyy");

    return formattedDate;
  } catch {
    return 'Atual';
  }
};
