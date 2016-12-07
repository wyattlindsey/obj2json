const React = require('react');
const ReactDOM = require('react-dom');
import DropTarget from './components/drop-target/drop-target.react';
import UploadButton from './components/upload-button/upload-button.react';
import FileList from './components/file-list/file-list.react';

ReactDOM.render(
  <div id="upload-area">
    <DropTarget />
    <UploadButton />
    <FileList />
  </div>,
  document.getElementById('app-container')
);