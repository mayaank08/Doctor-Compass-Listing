
import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { specialties, cities, hospitals } from '../data/mockDoctors';

const FilterPanel = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    availability: '',
    gender: '',
    experience: '',
    location: '',
    specialty: 'General Physician',  // Default to match our listing
    hospital: '',
    maxFee: '',
    rating: ''
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      availability: '',
      gender: '',
      experience: '',
      location: '',
      specialty: 'General Physician',
      hospital: '',
      maxFee: '',
      rating: ''
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={toggleFilterVisibility}
          className="w-full flex items-center justify-center space-x-2 bg-medical-100 text-medical-600 py-2 px-4 rounded-md hover:bg-medical-200"
        >
          <Filter size={18} />
          <span>{isFilterVisible ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>

      {/* Filter Panel - Hidden on mobile until toggled */}
      <div className={`${isFilterVisible ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-medical-600 hover:text-medical-800"
          >
            Clear All
          </button>
        </div>

        {/* Availability Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Availability</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="availability"
                value="today"
                checked={filters.availability === 'today'}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Available Today</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="availability"
                value=""
                checked={filters.availability === ''}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Any Day</span>
            </label>
          </div>
        </div>

        {/* Gender Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Gender</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={filters.gender === 'Male'}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={filters.gender === 'Female'}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value=""
                checked={filters.gender === ''}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Any</span>
            </label>
          </div>
        </div>

        {/* Experience Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Experience</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="5"
                checked={filters.experience === '5'}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">5+ Years</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="10"
                checked={filters.experience === '10'}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">10+ Years</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="15"
                checked={filters.experience === '15'}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">15+ Years</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value=""
                checked={filters.experience === ''}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Any</span>
            </label>
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Location</h4>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-medical-500 focus:border-medical-500"
          >
            <option value="">All Locations</option>
            {cities.map(city => (
              <option key={city.id} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>

        {/* Specialty Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Specialty</h4>
          <select
            value={filters.specialty}
            onChange={(e) => handleFilterChange('specialty', e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-medical-500 focus:border-medical-500"
          >
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty.id} value={specialty.name}>{specialty.name}</option>
            ))}
          </select>
        </div>

        {/* Hospital Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Hospital</h4>
          <select
            value={filters.hospital}
            onChange={(e) => handleFilterChange('hospital', e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-medical-500 focus:border-medical-500"
          >
            <option value="">All Hospitals</option>
            {hospitals.map(hospital => (
              <option key={hospital.id} value={hospital.name}>{hospital.name}</option>
            ))}
          </select>
        </div>

        {/* Consultation Fee Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Consultation Fee</h4>
          <select
            value={filters.maxFee}
            onChange={(e) => handleFilterChange('maxFee', e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-medical-500 focus:border-medical-500"
          >
            <option value="">Any Fee</option>
            <option value="500">Up to ₹500</option>
            <option value="750">Up to ₹750</option>
            <option value="1000">Up to ₹1000</option>
            <option value="1500">Up to ₹1500</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Rating</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="rating"
                value="4"
                checked={filters.rating === '4'}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">4+ Stars</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rating"
                value="4.5"
                checked={filters.rating === '4.5'}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">4.5+ Stars</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rating"
                value=""
                checked={filters.rating === ''}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="h-4 w-4 text-medical-600 focus:ring-medical-500"
              />
              <span className="ml-2 text-sm text-gray-700">Any</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
