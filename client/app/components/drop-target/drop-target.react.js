const React = require('react');
const Dropzone = require('react-dropzone');
const upload = require('../../controllers/upload');

export default class DropTarget extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    // todo display error for rejected files
    upload(acceptedFiles);


      // .then((results) => {   // not sure about those params
      //   console.log('uploaded OBJ');
      // })
      // .catch((err) => {
      //   console.error(err);
      // });
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