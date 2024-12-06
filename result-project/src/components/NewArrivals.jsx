import { Link } from "react-router-dom";
function NewArrivals() {
  return (
    <>
      <div className="newArrivals">
        <div className="newArrivals-wrap limit__content">
          <div className="newArrivalsItem">NEW ARRIVALS</div>
          <div className="breadCrumb">
            <Link className="breadCrumbLink" to="/pagecatalog">
              HOME /
            </Link>
            <Link className="breadCrumbLink" to="/pagecatalog">
              MEN /
            </Link>
            <Link className="breadCrumbLink breadCrumbLink-last" to="/pagecatalog">
              NEW ARRIVALS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
