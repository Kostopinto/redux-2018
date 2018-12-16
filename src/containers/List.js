import { connect } from "react-redux";

import List from "../components/List";
import { filteredVideos } from "../selectors";
import { removeVideo, editVideo } from "../reducers/videos";

const mapStateToProps = state => ({
  items: filteredVideos(state),
  total: state.videos.length
});
const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeVideo(id)),
  edit: data => dispatch(editVideo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
