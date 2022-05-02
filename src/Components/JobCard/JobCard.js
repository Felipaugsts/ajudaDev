import "./card.css";
import edit from "../../Assets/Icons/editable.gif";
import { Link } from "react-router-dom";
import { useState } from "react";

const Jobcard = ({ job }) => {
  const userUid = sessionStorage.getItem("uid");
  const [expended, Expand] = useState(false);

  const handleExpand = () => {
    Expand(!expended);
  };

  return (
    <div
      onClick={handleExpand}
      className={
        expended
          ? "card-wrapper-expended flex wrapper"
          : "card-wrapper flex wrapper"
      }
    >
      <div className="image-wrapper">
        <div className={expended ? "logo-wrapper" : "logo-wrapper wrapper"}>
          <img className="image" src={job.url} alt="logo"></img>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="header">
          <span className="link medium description-address black capitalize">
            {job.location.toLowerCase()}
          </span>
          {userUid === job.uid ? (
            <Link to={`/list/${job.jobID}`}>
              <img className="icon-edit" alt="edit" src={edit} />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="large heavy description-title capitalize">
          {job.title.toLowerCase()}
        </div>

        <div className="description-informations flex spaced">
          <div className="flex centered">
            <div className="characteristic small">{job.field}</div>
            <div className="characteristic black small">
              {job.remote ? "REMOTE" : "PRESENTIAL"}
            </div>
            <i
              className={!expended ? "bi bi-caret-down" : "bi bi-caret-up"}
            ></i>
          </div>

          <div className="medium date black">
            {job.created.toDate().toDateString()}
          </div>
        </div>

        <p
          className={
            expended
              ? "small black light description show"
              : "small black light description hidden"
          }
        >
          <span>Descrição: </span>
          {job.description}
        </p>
      </div>
    </div>
  );
};
export default Jobcard;
