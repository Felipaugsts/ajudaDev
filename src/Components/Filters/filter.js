import "./filter.css";

const filterField = (fil) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <img
          className="icon"
          src={require(`../../Assets/Icons/${fil.filter.icon}.gif`)}
          alt="icon"
        />
        <span className="text medium black">{fil.filter.name}</span>
      </div>
      <input
        className="form-check-input shadow black"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        disabled
      />
    </div>
  );
};
export default filterField;
