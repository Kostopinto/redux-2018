const ADD_VIDEO = "ADD_VIDEO";
const EDIT_VIDEO = "EDIT_VIDEO";
const REMOVE_VIDEO = "REMOVE_VIDEO";

const INIT = [];

export default function videosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDEO:
      const newItem = {
        id: String(Math.random()),
        title: payload.title,
        url: payload.url,
        tags: payload.tags
      };

      return [newItem, ...state];
    case EDIT_VIDEO:
      const { title, tags, id } = payload;
      return state.map(video =>
        video.id !== id ? video : { ...video, title, tags }
      );
    case REMOVE_VIDEO:
      return state.filter(video => video.id !== payload);
    default:
      return state;
  }
}

export const addVideo = ({ title, url, tags }) => ({
  type: ADD_VIDEO,
  payload: { title, url, tags }
});

export const editVideo = data => ({
  type: EDIT_VIDEO,
  payload: data
});

export const removeVideo = id => ({
  type: REMOVE_VIDEO,
  payload: id
});
