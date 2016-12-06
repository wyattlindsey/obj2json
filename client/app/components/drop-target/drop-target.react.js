const React = require('react');
var Dropzone = require('react-dropzone');

export default class DropTarget extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    // todo display error for rejected files

    console.log('dropping');
  }

  render() {
    return (
      <div >
        <Dropzone id="drop-target" onDrop={this.onDrop}>
          Drop .OBJ file
        </Dropzone>
      </div>
    );
  }
}