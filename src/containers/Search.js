import { connect } from "react-redux";

import Search from "../components/Search";
import { updateSearch } from "../reducers/search";

const mapDispatchToProps = dispatch => ({
  search: (searcField, value) => dispatch(updateSearch(searcField, value))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
