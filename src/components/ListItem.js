import React, { PureComponent, Fragment } from "react";
import { string } from "prop-types";

const getVideoId = url => url.split("/")[3];
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`;

const VIEW_MODE = "VIEW_MODE";
const EDIT_MODE = "EDIT_MODE";

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired
  };

  state = {
    mode: VIEW_MODE,
    newTitle: this.props.title,
    newTags: this.props.tags
  };

  switchMode = () => {
    const updatedMode = this.state.mode === VIEW_MODE ? EDIT_MODE : VIEW_MODE;
    const { title, tags } = this.props;

    this.setState({ mode: updatedMode, newTitle: title, newTags: tags });
  };

  remove = () => {
    this.props.remove(this.props.id);
  };

  onChangeTitle = ({ target }) => {
    this.setState({ newTitle: target.value });
  };

  onChangeTags = ({ target }) => {
    this.setState({ newTags: target.value });
  };

  onEdit = () => {
    const { newTitle, newTags } = this.state;
    const { id, edit } = this.props;
    edit({ id, title: newTitle, tags: newTags });
    this.switchMode();
  };

  render() {
    const { url, title, tags } = this.props;
    const { newTitle, newTags } = this.state;

    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    return (
      <li className="listItem">
        {this.state.mode === VIEW_MODE ? (
          <div className="title">{title}</div>
        ) : (
          <Fragment>
            <input value={newTitle} onChange={this.onChangeTitle} />
            <button onClick={this.onEdit}>OK</button>
            <button onClick={this.switchMode}>Cancel</button>
          </Fragment>
        )}
        <iframe src={videoUrl} title={title} />
        {this.state.mode === VIEW_MODE ? (
          <div>{tags}</div>
        ) : (
          <input value={newTags} onChange={this.onChangeTags} />
        )}
        <span onClick={this.switchMode}>&#9998;</span>
        <button onClick={this.remove}>Remove</button>
      </li>
    );
  }
}
