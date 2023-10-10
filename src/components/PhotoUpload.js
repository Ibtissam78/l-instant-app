import React, { Component } from 'react';

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ file });
  };

  handleUpload = () => {
    // Ici, vous pouvez implémenter la logique de téléchargement de la photo
    // Utilisez une API ou une autre méthode de stockage
  };

  render() {
    return (
      <div>
        <h2>Télécharger une photo</h2>
        <input type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>Télécharger</button>
      </div>
    );
  }
}

export default PhotoUpload;
