export const applyPagination = (
  documents: object[],
  page: number,
  rowsPerPage: number
) => {
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};
