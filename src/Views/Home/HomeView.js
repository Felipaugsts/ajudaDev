import React, { useEffect } from "react";
import "./Home.css";
import loader from "../../Assets/images/loader.gif";
import FilterList from "../../Components/Filters/FilterList";
import viewModel from "./HomeViewModel";
import CardList from "../../Components/JobCard/CardList";

export default function HomeController() {
  const {
    loading,
    jobs,
    onSearchChange,
    filtered,
    postsPerPage,
    fetchAllJobs,
    paginate,
    currentPosts,
    categories,
    location,
  } = viewModel();

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return jobs.length === 0 ? (
    <img className="loader-image" src={loader} alt="loading" />
  ) : (
    <div className="containers">
      <div className="text xlarge heavy ">
        Encontre seu emprego <br />
        <span className="hashtag heavier">#AjudaDev</span>
      </div>
      <div className="display-wrapper flex wrap justify-center">
        <CardList
          filtered={filtered}
          postsPerPage={postsPerPage}
          paginate={paginate}
          currentPosts={currentPosts}
        />
        <FilterList
          searchfield={onSearchChange}
          categories={categories}
          location={location}
        />
      </div>
    </div>
  );
}
