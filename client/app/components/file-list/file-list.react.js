const React = require('react');
const fetch = require('../../controllers/fetch');

export default class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objects: [
        {
          id: 42
        }
      ]
    }

    fetch('files')
      .then((err, data) => {
        if (err) { console.error(err) };
        this.setState({
          objects: data
        });
      })

  }

  render() {
    return (
      <div id='file-list'>
        {this.state.objects.forEach((object) => {
          return (
            <li> Hello </li>
          );
        })}
      </div>
    )
  }
}