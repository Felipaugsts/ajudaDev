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
      className={
        expended
          ? "card-wrapper-expended flex wrapper"
          : "card-wrapper flex wrapper"
      }
    >
      <div className="image-wrapper">
        <div className="logo-wrapper wrapper">
          <img className="image" src={job.url} alt="logo"></img>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="header">
          <span className="link medium description-address black capitalize">
            {job.location.toLowerCase()}, {job.country.toUpperCase()}
          </span>
          {userUid === job.uid ? (
            <Link to={`/list/${job.jobID}`}>
              <img className="icon-edit" alt="edit" src={edit} />
            </Link>
          ) : (
            ""
          )}
        </div>
        <a
          href={job.link}
          target="_blank"
          className="large heavy description-title black capitalize"
          rel="noreferrer"
        >
          {job.title.toLowerCase()}
        </a>

        <div className="description-informations flex spaced">
          <div className="flex centered">
            <div className="characteristic black small">
              {job.remote ? "REMOTE" : "PRESENTIAL"}
            </div>
            <div className="characteristic black small">
              {job.level.toUpperCase()}
            </div>
            <i
              onClick={handleExpand}
              className={
                !expended ? "bi bi-caret-down icons" : "bi bi-caret-up icons"
              }
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
