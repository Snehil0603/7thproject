import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel.tsx';
import { useNavigate } from 'react-router-dom'; 

// Define the options for each dropdown
const options = {
  academicYear: ['Academic Year','2024', '2023', '2022'],
  course: ['Course','Math', 'Science', 'History'],
  semester: ['Semester','Fall', 'Spring', 'Summer'],
  updatedOn: ['Updated On','Today', 'Last Week', 'Last Month']
};

// Dummy data for the table
const data = [
  { academicYear: '2024', course: 'Math', semester: 'Fall', updatedOn: 'Today' },
  { academicYear: '2023', course: 'Science', semester: 'Spring', updatedOn: 'Last Week' },
  { academicYear: '2022', course: 'History', semester: 'Summer', updatedOn: 'Last Month' },
  { academicYear: '2024', course: 'Science', semester: 'Spring', updatedOn: 'Today' },
  { academicYear: '2024', course: 'History', semester: 'Fall', updatedOn: 'Last Week' }
];

const AcademicCalendar: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle click on "Updated On" column
  const handleRowClick = (row) => {
    setSelectedRow(row); // Set the clicked row data to state
    const pdfName = `./${row.academicYear}${row.course}${row.semester}${row.updatedOn}.pdf`;
    navigate('/pdf-viewer', { state: { pdfName } }); // Navigate to the new component with row data
  };

  const [selectedOptions, setSelectedOptions] = useState({
    academicYear: options.academicYear[0],
    course: options.course[0],
    semester: options.semester[0],
    updatedOn: options.updatedOn[0]
  });

  // Handle dropdown change
  const handleSelectChange = (column: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [column]: event.target.value
    }));
  };

  const filteredData = data.filter(row =>
    row.academicYear === selectedOptions.academicYear &&
    row.course === selectedOptions.course &&
    row.semester === selectedOptions.semester
  );

  return (
    <>
    <ImageCarousel/>
    <div className="academic-calendar bg-blue-50 rounded-lg shadow-lg">
      <table className="min-w-full bg-white border border-blue-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-blue-100 border-b">
            <th className="px-6 py-4 text-blue-800 font-semibold text-center">
              <select
                value={selectedOptions.academicYear}
                onChange={handleSelectChange('academicYear')}
                className="border border-blue-300 rounded p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.academicYear.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </th>
            <th className="px-6 py-4 text-blue-800 font-semibold text-center">
              <select
                value={selectedOptions.course}
                onChange={handleSelectChange('course')}
                className="border border-blue-300 rounded p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.course.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </th>
            <th className="px-6 py-4 text-blue-800 font-semibold text-center">
              <select
                value={selectedOptions.semester}
                onChange={handleSelectChange('semester')}
                className="border border-blue-300 rounded p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.semester.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </th>
            <th className="px-6 py-4 text-blue-800 font-semibold text-center">
              Updated On
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the filtered data */}
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr
                key={index}
                className="text-center border-t hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                onClick={() => handleRowClick(row)} // Set onClick event
              >
                <td className="px-6 py-4 text-gray-700">{row.academicYear}</td>
                <td className="px-6 py-4 text-gray-700">{row.course}</td>
                <td className="px-6 py-4 text-gray-700">{row.semester}</td>
                <td className="px-6 py-4 text-gray-700">{row.updatedOn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-8 text-blue-500">
                No records found for the selected criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AcademicCalendar;
