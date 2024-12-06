import { Link } from "react-router-dom";
function Pagination() {
  return (
    <>
      <div className="pagination">
        <span className="paginationImg-left"></span>
        <Link className="paginationItem-red" to="/pagecatalog">
          1
        </Link>
        <Link to="/pagecatalog">2</Link>
        <Link to="/pagecatalog">3</Link>
        <Link to="/pagecatalog">4</Link>
        <Link to="/pagecatalog">5</Link>
        <Link to="/pagecatalog">6....</Link>
        <Link to="/pagecatalog">20</Link>
        <span className="paginationImg-right"></span>
      </div>
    </>
  );
}

export default Pagination;
