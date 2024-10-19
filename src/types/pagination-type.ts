export interface PaginationProp {
  currentPage: number;
  handleNextPage: (e: React.SyntheticEvent) => void;
  handlePreviousPage: (e: React.SyntheticEvent) => void;
}
