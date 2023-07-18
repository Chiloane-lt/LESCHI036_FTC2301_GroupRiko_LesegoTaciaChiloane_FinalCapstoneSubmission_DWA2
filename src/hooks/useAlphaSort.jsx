import React, { useState } from "react";

export const useAlphaSort = (unsortedArray, sortOrder) => {

  if(!unsortedArray){
    return undefined;
  }

  let sortedArray = [...unsortedArray];

  if(sortOrder === 'A-Z') {
    sortedArray.sort((a, b) => {
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
  }

  if(sortOrder === 'Z-A') {
    sortedArray.sort((a, b) => {
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
  }

  return sortedArray;
}