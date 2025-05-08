
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import DoctorCard from '../components/DoctorCard';
import { getDoctors } from '../services/api';

const Index = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0
  });
  const [filters, setFilters] = useState({
    availability: '',
    gender: '',
    experience: '',
    location: '',
    specialty: 'General Physician',
    hospital: '',
    maxFee: '',
    rating: '',
    searchTerm: ''
  });

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await getDoctors(pagination.currentPage, 5, filters);
      setDoctors(response.doctors);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalCount: response.totalCount
      });
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [pagination.currentPage, filters]);

  const handlePageChange = (page) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const handleFilter = (newFilters) => {
    setPagination({ ...pagination, currentPage: 1 });
    setFilters({ ...filters, ...newFilters });
  };

  const handleSearch = (searchTerm) => {
    setPagination({ ...pagination, currentPage: 1 });
    setFilters({ ...filters, searchTerm });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">General Physician in Delhi</h1>
          <p className="text-gray-600 mt-2">
            Book appointments with the best General Physicians
          </p>
        </div>

        {/* Search Bar for Desktop */}
        <div className="hidden md:block">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="md:flex md:gap-6">
          {/* Filter Panel - Sidebar */}
          <div className="md:w-1/4">
            <FilterPanel onFilter={handleFilter} />
          </div>

          {/* Doctor Listing */}
          <div className="md:w-3/4">
            {/* Search Bar for Mobile */}
            <div className="block md:hidden mb-6">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            {/* Doctor Count */}
            <div className="mb-4">
              <p className="text-gray-700">
                {pagination.totalCount} doctors found
              </p>
            </div>
            
            {/* Doctors List */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-600"></div>
              </div>
            ) : doctors.length > 0 ? (
              <div>
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
                
                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center mt-6">
                    <nav className="flex items-center">
                      <button
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                        disabled={pagination.currentPage === 1}
                        className={`px-3 py-1 rounded-md mr-2 ${
                          pagination.currentPage === 1
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-white text-medical-600 hover:bg-medical-50'
                        }`}
                      >
                        Previous
                      </button>
                      
                      {[...Array(pagination.totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={`px-3 py-1 rounded-md mx-1 ${
                            pagination.currentPage === index + 1
                              ? 'bg-medical-600 text-white'
                              : 'bg-white text-medical-600 hover:bg-medical-50'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                        disabled={pagination.currentPage === pagination.totalPages}
                        className={`px-3 py-1 rounded-md ml-2 ${
                          pagination.currentPage === pagination.totalPages
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-white text-medical-600 hover:bg-medical-50'
                        }`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl text-gray-700">No doctors match your search criteria</h3>
                <p className="text-gray-600 mt-2">Try adjusting your filters or search term</p>
                <button
                  onClick={() => handleFilter({
                    availability: '',
                    gender: '',
                    experience: '',
                    location: '',
                    specialty: 'General Physician',
                    hospital: '',
                    maxFee: '',
                    rating: '',
                    searchTerm: ''
                  })}
                  className="mt-4 px-4 py-2 bg-medical-600 text-white rounded-md hover:bg-medical-700"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-medical-600">DoctorCompass</h2>
              <p className="mt-2 text-gray-600">Find the right doctor for your needs</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">For Patients</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Find Doctors</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Book Appointments</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Health Articles</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">For Doctors</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Join as a Doctor</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Doctor Resources</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-medical-600">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2025 DoctorCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
