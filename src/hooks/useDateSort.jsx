import React, { useState } from "react";

export const useDateSort = (unsortArray, sortOrder) => {

  if(!unsortArray || !sortOrder) {
    return console.log('missing function params')
  }

  let sortedArray = [...unsortArray];

  if(sortOrder === 'oldest') {
    sortedArray.sort((a, b) => {
      const dateA = new Date(a.updated).getTime(); 
      const dateB = new Date(b.updated).getTime(); 
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
  }

  if(sortOrder === 'newest') {
    sortedArray.sort((a, b) => {
      const dateA = new Date(a.updated).getTime(); 
      const dateB = new Date(b.updated).getTime(); 
      if (dateA > dateB) {
        return -1;
      }
      if (dateA < dateB) {
        return 1;
      }
      return 0;
    });
  }

  return sortedArray;
}