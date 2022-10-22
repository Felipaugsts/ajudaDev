import error from "../../Assets/images/error.gif";
import Card from "../../Components/JobCard/JobCard";
import Pagination from "../../Components/Pagination";

const CardList = ({ currentPosts, postsPerPage, filtered, paginate }) => {
  return (
    <div className="card-list">
      {currentPosts.length === 0 ? (
        <img className="error-image" src={error} alt="loading" />
      ) : (
        currentPosts.map((job, i) => {
          return <Card key={i} job={job} />;
        })
      )}

      <div className="pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filtered.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default CardList;
