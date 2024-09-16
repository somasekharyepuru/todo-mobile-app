export const getFullName = (
  firstName: string | undefined | null,
  lastName: string | undefined | null
) => {
  return `${firstName || ''} ${lastName || ''}`.trim();
};
