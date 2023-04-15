import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers.js';


function Navigation(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentPage.name);
  // }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Navigation;
// import React from 'react';


// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#about-me">About Me</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#resume">Resume</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
