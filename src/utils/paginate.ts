export type TPaginate = {
  totalFound: number;
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
  lastPage: number;
  skip: number;
  limit: number;
};

export function paginationDetails(page: number, limit: number, totalFound: number): TPaginate {
  const _limit = limit > totalFound ? totalFound : limit;
  
  const lastPage = Math.ceil(totalFound / _limit);
  if (page > lastPage) page = lastPage;
  
  const hasNextPage = _limit * page < totalFound;
  const hasPrevPage = page > 1;
  
  const nextPage = hasNextPage ? page + 1 : null;
  const prevPage = hasPrevPage ? page - 1 : null;
  
  const skip = totalFound >= 1 ? (page - 1) * _limit : 0;

  return { totalFound, currentPage: page, prevPage, nextPage, lastPage, skip, limit: _limit };
}