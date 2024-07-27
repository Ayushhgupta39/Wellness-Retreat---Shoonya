import { useEffect, useState } from "react";
import axios from "axios";
import { Retreat } from "../types/Retreat";
import FilterSection from "../components/FilterSection";
import RetreatCard from "../components/RetreatCard";
import Pagination from "../components/Pagination";
const API_URL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

function Home() {
  const [filteredRetreats, setFilteredRetreats] = useState<Retreat[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateFilter, setDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, [currentPage, dateFilter, typeFilter, searchQuery]);

  const fetchRetreats = async () => {
    setLoading(true);
    try {
      let url = `${API_URL}`;

      if (searchQuery) {
        url += `?page=${currentPage}`;
        if (dateFilter) url += `&date=${dateFilter}`;
        if (typeFilter) url += `&type=${typeFilter}`;
        url += `&search=${searchQuery}`;
      } else {
        if (dateFilter) url += `?date=${dateFilter}`;
        if (typeFilter) url += `${dateFilter ? "&" : "?"}type=${typeFilter}`;
      }

      const response = await axios.get(url);
      const allRetreats = response.data;

      if (searchQuery) {
        setFilteredRetreats(allRetreats);
        setTotalPages(
          Math.ceil(response.headers["x-total-count"] / itemsPerPage)
        );
      } else {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setFilteredRetreats(allRetreats.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(allRetreats.length / itemsPerPage));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDateChange = (date: string) => {
    setDateFilter(date);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="hidden sm:flex flex-col bg-custom_brown opacity-100 m-4 p-4 rounded-lg shadow-lg">
        <img src="/assets/images/yoga.png" alt="" />

        <div className="my-2 mt-4">
          <p className="text-lg font-semibold">Discover Your Inner Peace</p>
          <p className="text-[#374151] tracking-tight">
            Join us for a series of wellness retreats designed to help you find
            tranquility and rejuvenation.
          </p>
        </div>
      </div>

      <div>
        <FilterSection
          onDateChange={handleDateChange}
          onTypeChange={handleTypeChange}
          onSearch={handleSearch}
        />
      </div>

      {filteredRetreats.length === 0 && !loading && (
        <p className="text-center my-10">No Retreats Found.</p>
      )}

      {!loading ? (
        <div className="sm:grid grid-cols-3">
          {filteredRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      ) : (
        <p className="text-center my-10">Loading...</p>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
