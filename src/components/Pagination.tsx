type PaginationProps = {
  activePage: number;
  totalPages: number;
  setter: (value: number) => void;
};

export default function Pagination({
  activePage,
  totalPages,
  setter,
}: PaginationProps) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="join">
      <button
        className={
          activePage == 1 ? "join-item btn btn-disabled" : "join-item btn"
        }
        onClick={() => setter(activePage - 1)}
      >
        «
      </button>

      {pagesArray.map((pageNumber) => (
        <button
          className={
            pageNumber == activePage
              ? "join-item btn btn-active"
              : "join-item btn"
          }
          onClick={() => setter(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={
          activePage == totalPages
            ? "join-item btn btn-disabled"
            : "join-item btn"
        }
        onClick={() => setter(activePage + 1)}
      >
        »
      </button>
    </div>
  );
}
