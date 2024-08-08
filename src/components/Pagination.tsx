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
  const normalStyles = "join-item btn";
  const disabledStyles = "join-item btn btn-disabled";
  return (
    <div className="join">
      <button
        className={activePage == 1 ? disabledStyles : normalStyles}
        onClick={() => setter(activePage - 1)}
      >
        «
      </button>

      {pagesArray.map((pageNumber) => (
        <button
          className={
            pageNumber == activePage
              ? `${normalStyles} btn-active`
              : normalStyles
          }
          onClick={() => setter(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={activePage == totalPages ? disabledStyles : normalStyles}
        onClick={() => setter(activePage + 1)}
      >
        »
      </button>
    </div>
  );
}
