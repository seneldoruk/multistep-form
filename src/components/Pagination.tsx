type PaginationProps = {
  activePage: number;
  totalPages: number;
};

export default function Pagination({
  activePage,
  totalPages,
}: PaginationProps) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="join">
      <button
        className={
          activePage == 1 ? "join-item btn btn-disabled" : "join-item btn"
        }
      >
        «
      </button>

      {pagesArray.map((pageNumber) =>
        pageNumber === activePage ? (
          <button className="join-item btn btn-active">{pageNumber}</button>
        ) : (
          <button className="join-item btn">{pageNumber}</button>
        )
      )}
      <button
        className={
          activePage == totalPages
            ? "join-item btn btn-disabled"
            : "join-item btn"
        }
      >
        »
      </button>
    </div>
  );
}
