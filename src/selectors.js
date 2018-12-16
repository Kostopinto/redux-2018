import { createSelector } from "reselect";

const videoSelector = state => state.videos;
const searchSelector = state => state.search;

export const filteredVideos = createSelector(
  [videoSelector, searchSelector],
  (videos, search) =>
    videos.filter(video => {
      const criteriaKeys = Object.keys(search);

      return criteriaKeys.every(criteriaKey => {
        const criteriaValue = search[criteriaKey];

        if (criteriaValue.length < 2) {
          return true;
        }

        return video[criteriaKey].includes(criteriaValue);
      });
    })
);
