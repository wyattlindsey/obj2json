const React = require('react');

export default class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button id="upload-button">Choose file</button>
      </div>
    );
  }
}