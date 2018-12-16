import { connect } from "react-redux";

import Form from "../components/Form";
import { addVideo, removeVideo } from "../reducers/videos";

const mapDispatchToProps = dispatch => {
  return {
    add: data => dispatch(addVideo(data)),
    remove: data => dispatch(removeVideo(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
