import React, { Component } from "react";
import HomeList from "./HomeList";
import "./Home.css";
import api from "../../Model/API.js";
import loader from "../../Assets/images/loader.gif";
import error from "../../Assets/images/error.gif";
import TextField from "../../Components/TextField/TextField";
import FilterInput from "../../Components/Filters/filter";

import Pagination from "../../Components/Pagination";

class HomeController extends Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      searchfield: "",
      filtered: [],
      currentPage: 1,
      postsPerPage: 5,
    };
  }
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };
  filterJobs() {
    const filtered = [];
    const filteredTitles = this.state.jobs.filter((jobs) => {
      if (
        jobs.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
      ) {
        filtered.push(jobs);
      }
    });
    return filtered;
  }
  fetchJobs = () => {
    api.FetchJobs().then((job) =>
      this.setState({
        jobs: job,
      })
    );
  };

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    const filtered = this.filterJobs();
    console.log(
      "page",
      this.state.currentPage,
      "post",
      this.state.postsPerPage
    );
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    console.log(filtered);
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber,
      });
      window.scrollTo(0, 0);
    };

    const categories = [
      { name: "Development", icon: "code" },
      { name: "Cloud", icon: "cloud" },
      { name: "QA & Testing", icon: "qa" },
      { name: "UX/UI Design", icon: "design" },
    ];
    const location = [
      { name: "São Paulo, BR", icon: "sp" },
      { name: "Curitiba, BR", icon: "curitiba" },
      { name: "Mundo", icon: "world" },
      { name: "Remoto, MN", icon: "remote" },
    ];

    if (this.state.jobs.length === 0) {
      console.log("loading");
      return <img className="loader-image" src={loader} alt="loading" />;
    } else {
      return (
        <div className="containers">
          <div className="text xlarge heavy ">
            Encontre seu primeiro emprego <br />
            <span className="hashtag heavier">#AjudaDev</span>
          </div>
          <div className="display-wrapper flex wrap justify-center">
            <div className="card-list">
              {currentPosts.length === 0 ? (
                <img className="error-image" src={error} alt="loading" />
              ) : (
                <HomeList jobs={currentPosts} />
              )}

              <div className="pagination">
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={filtered.length}
                  paginate={paginate}
                />
              </div>
            </div>

            <div className="card-filters">
              <div className="wrapper  search-field-wrapper">
                <TextField searchChange={this.onSearchChange} />
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
          </div>
        </div>
      );
    }
  }
}
export default HomeController;
