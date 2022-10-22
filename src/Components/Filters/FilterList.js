import FilterInput from "./filter";
import TextField from "../TextField/TextField";
import "./filter.css";

const FilterList = ({ searchfield, categories, location }) => {
  return (
    <div className="card-filters">
      <div className="wrapper  search-field-wrapper">
        <TextField searchChange={searchfield} />
      </div>

      <div className="wrapper categories-wrapper ">
        <div className="categorias-wrapper">
          <p className="large heavy categorias-text">Categorias</p>

          {categories.map((category, i) => {
            return <FilterInput key={i} filter={category} />;
          })}
        </div>
      </div>
      <div className="wrapper categories-wrapper ">
        <div className="categorias-wrapper">
          <p className="large heavy categorias-text">Localização</p>

          {location.map((locations, i) => {
            return <FilterInput key={i} filter={locations} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterList;
