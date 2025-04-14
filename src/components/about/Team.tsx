"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db, storage } from "@/lib/firebase/firebase";
import "./Team.css";

// We'll keep these as constants since they're unlikely to change
const allBoardTypes = [
  "Executive Board", 
  "General Board", 
  "BLUE Leaders"
];

// Function to get glow color based on board type
const getGlowColor = (boardType: string) => {
  switch(boardType) {
    case "Executive Board":
      return "#FFA500"; // Orange for executive
    case "General Board":
      return "#FFFFFF"; // White for general
    case "BLUE Leaders":
      return "#1E90FF"; // Blue for BLUE leaders
    default:
      return "#FFFFFF"; // Default white glow
  }
};

// CSS styles are now imported from Team.css

// Helper function to get CSS class based on board type
const getGlowClass = (boardType: string) => {
  switch(boardType) {
    case "Executive Board":
      return "executive-glow";
    case "General Board":
      return "general-glow";
    case "BLUE Leaders":
      return "blue-leaders-glow";
    default:
      return "";
  }
};

// TypeScript interface for team members
interface TeamMember {
  name: string;
  role: string;
  boardType: string;
  imageUrl: string;
  order: number;
}

export default function Team() {
  // State for team members loaded from Firebase
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for selected board types (initially all types are selected)
  const [selectedBoardTypes, setSelectedBoardTypes] = useState<string[]>(allBoardTypes);
  // Filtered team members based on selected board types
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  // Dropdown open/closed state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Reference to the dropdown element
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Reference to the Swiper instance
  const swiperRef = useRef<any>(null);
  
  // Fetch team members from Firebase
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const teamMembersRef = collection(db, "BoardMembers");
        // Query with orderBy to sort by the order field
        const q = query(teamMembersRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        
        const members: TeamMember[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as TeamMember;
          members.push(data);
        });
        
        setTeamMembers(members);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    // Only add the event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  // Filter members when selected board types change or when teamMembers changes
  useEffect(() => {
    if (selectedBoardTypes.length === 0) {
      // If no board types selected, show all members
      setFilteredMembers(teamMembers);
    } else {
      // Filter members based on selected board types
      setFilteredMembers(
        teamMembers.filter(member => selectedBoardTypes.includes(member.boardType))
      );
    }
  }, [selectedBoardTypes, teamMembers]);

  // Add event listeners for mouse interactions
  useEffect(() => {
    // Function to handle mouse down
    const handleMouseDown = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.stop();
      }
    };

    // Function to handle mouse up
    const handleMouseUp = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        // Small delay to ensure smooth transition
        setTimeout(() => {
          swiperRef.current.swiper.autoplay.start();
        }, 100);
      }
    };

    // Add event listeners
    const swiperElement = document.querySelector('.swiper');
    if (swiperElement) {
      swiperElement.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    }

    // Clean up
    return () => {
      if (swiperElement) {
        swiperElement.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [filteredMembers]); // Re-add listeners when filtered members change

  // Toggle board type selection
  const toggleBoardType = (boardType: string) => {
    if (selectedBoardTypes.includes(boardType)) {
      setSelectedBoardTypes(selectedBoardTypes.filter(b => b !== boardType));
    } else {
      setSelectedBoardTypes([...selectedBoardTypes, boardType]);
    }
  };

  // Select all board types
  const selectAllBoardTypes = () => {
    setSelectedBoardTypes([...allBoardTypes]);
  };

  // Clear all selected board types
  const clearAllBoardTypes = () => {
    setSelectedBoardTypes([]);
  };

  return (
    <div className="sm:pt-6">
      <div className="grad h-32" />
      <div className="px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-7xl text-white">
          <h2 className="text-2xl sm:text-4xl">Meet Our Team</h2>
          <p className="pt-4 sm:pt-6 sm:text-lg text-balance opacity-80">
            Behind the Society of PC Building is a passionate team of officers
            who work hard to bring our community together, organize events, and
            foster a love for PC building.
          </p>

          {/* Board type filter dropdown */}
          <div className="mt-6 mb-4 relative">
            <div className="flex items-center gap-2">
              <h3 className="text-lg">Filter by Board:</h3>
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button 
                  type="button" 
                  className="inline-flex justify-between items-center w-48 rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="true" 
                  aria-expanded={isDropdownOpen}
                >
                  {selectedBoardTypes.length === 0 
                    ? "No boards selected" 
                    : selectedBoardTypes.length === allBoardTypes.length 
                      ? "All boards" 
                      : `${selectedBoardTypes.length} board(s) selected`}
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div 
                    className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                    role="menu" 
                    aria-orientation="vertical"
                  >
                    <div className="py-1 max-h-60 overflow-auto" role="none">
                      {/* Select/Clear All Controls */}
                      <div className="px-4 py-2 border-b border-gray-700 flex justify-between">
                        <button 
                          onClick={() => selectAllBoardTypes()}
                          className="text-xs text-blue-400 hover:text-blue-300"
                        >
                          Select All
                        </button>
                        <button 
                          onClick={() => clearAllBoardTypes()}
                          className="text-xs text-blue-400 hover:text-blue-300"
                        >
                          Clear All
                        </button>
                      </div>
                      
                      {/* Board type checkboxes */}
                      {allBoardTypes.map(boardType => (
                        <div 
                          key={boardType} 
                          className="px-4 py-2 hover:bg-gray-700"
                        >
                          <label className="flex items-center space-x-3 w-full cursor-pointer">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500"
                              checked={selectedBoardTypes.includes(boardType)}
                              onChange={() => toggleBoardType(boardType)}
                              onClick={(e) => e.stopPropagation()}
                            />
                            <span className="text-sm text-gray-200">{boardType}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Reset button - only show when not all board types are selected */}
              {selectedBoardTypes.length > 0 && selectedBoardTypes.length < allBoardTypes.length && (
                <button 
                  onClick={() => selectAllBoardTypes()}
                  className="ml-2 px-3 py-1 text-xs bg-blue-600 rounded text-white hover:bg-blue-700 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Responsive Box Structure for Carousel */}
          <div className="mt-4 py-4 sm:py-5 flex flex-col items-center">
            {loading ? (
              // Loading state
              <div className="py-12 text-center text-gray-400">
                <p>Loading team members...</p>
              </div>
            ) : filteredMembers.length > 0 ? (
              <div className="team-carousel-container">
                <Swiper
                  ref={swiperRef}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={40} // Reduced spacing between slides
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }, // Reduced from 4 to 3 to accommodate larger images
                  }}
                  slidesPerGroup={1}
                  pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                  }}
                  autoplay={{ 
                    delay: 4500, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true
                  }}
                  speed={800}
                  grabCursor={true}
                  allowTouchMove={true}
                  loop={filteredMembers.length > 3}
                  className="rounded-lg"
                  key={selectedBoardTypes.join('-')} // Force re-render when filters change
                  onTouchStart={(swiper) => {
                    // Pause autoplay when user starts touching/holding
                    swiper.autoplay.stop();
                  }}
                  onTouchEnd={(swiper) => {
                    // Resume autoplay when user releases
                    setTimeout(() => {
                      swiper.autoplay.start();
                    }, 100); // Small delay to ensure smooth transition
                  }}
                >
                  {filteredMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center">
                        {/* Image with glow effect - proper margin around to show glow */}
                        <div className="glow-wrapper">
                          <div className={`rounded-lg overflow-hidden ${getGlowClass(member.boardType)}`}>
                            <img
                              src={member.imageUrl} // Changed from member.image to member.imageUrl
                              alt={member.name}
                              className="w-full h-auto aspect-[4/5] object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Added member-info class for better spacing */}
                        <div className="mt-2 text-center member-info">
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-blue-400">{member.role}</p>
                          <p className="text-xs text-gray-400">{member.boardType}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="py-12 text-center text-gray-400">
                <p>No team members match the selected filters.</p>
                <button 
                  onClick={selectAllBoardTypes}
                  className="mt-4 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-all"
                >
                  Show All
                </button>
              </div>
            )}

            {/* Cuban bread-shaped pagination container */}
            <div className="flex justify-center">
              <div className="pagination-container">
                <div className="custom-swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grad h-32 -scale-y-[1]" />
    </div>
  );
}