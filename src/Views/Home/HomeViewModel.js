import { useState } from "react";
import { fetchJobs } from "../../Components/Repository/JobsRepository";

export default function HomeController() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchfield, setSearchfield] = useState("");
  const [error, setError] = useState();
  const postsPerPage = 6;

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

  const fetchAllJobs = async () => {
    const { result, error } = await fetchJobs();
    setJobs(result);
    setError(error);
    setLoading(false);
  };

  const filterJobs = () => {
    const filtered = [];
    jobs.filter((jobs) => {
      if (jobs.title.toLowerCase().includes(searchfield.toLowerCase())) {
        filtered.push(jobs);
      }
    });
    return filtered;
  };

  const filtered = filterJobs();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  return {
    loading,
    jobs,
    onSearchChange,
    filtered,
    currentPage,
    postsPerPage,
    filterJobs,
    paginate,
    fetchAllJobs,
    currentPosts,
    categories,
    location,
  };
}
