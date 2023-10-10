import React from 'react';
function PhotoList() {

const PhotoList = ({ photos }) => (
  <div>
    <h2>Liste de photos</h2>
    <ul>
      {photos.map((photo, index) => (
        <li key={index}>
          <img src={photo.url} alt={`Photo ${index}`} />
        </li>
      ))}
    </ul>
  </div>
);
}
export default PhotoList;





