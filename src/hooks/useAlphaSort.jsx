import React, { useState } from "react";

export const useAlphaSort = (array, sortString) => {
  const [ sortArray, setSortArray ] = useState(array);
  const [ sortOrder, setSortOrder ] = useState(sortString);

  const stateHandler =(prevState) => {

    if(sortOrder === 'A-Z') {

      const arrayCopy = [...prevState];
      // Make a copy so as not to mutate old array. Try with toSort()

      arrayCopy.sort((a, b) => {
        const nameA = a.title.toUpperCase(); 
        const nameB = b.title.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return arrayCopy;
    }
    if(sortOrder === 'Z-A') {
      const arrayCopy = [...prevState];
      arrayCopy.sort((a, b) => {
        // Reverse sort conditions
        const nameA = a.title.toUpperCase(); 
        const nameB = b.title.toUpperCase(); 
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      return arrayCopy;
    }
  }
}