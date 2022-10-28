import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class Album extends React.Component {
    render() {
        return (
            <div className = "flex-container">
                {
                    entries.itemlist.map((photo) => {
                        return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
                    }
                    )
                }
            </div>
        )

        {/* <div className="photo-entry-block">
        <img className="photo-img" src="../images/photo1.png" />
        <img className="photo-img" src="../images/photo2.png" />
        <img className="photo-img" src="../images/photo3.png" />
        <img className="photo-img" src="../images/photo4.png" />
        <img className="photo-img" src="../images/photo5.png" />
        <img className="photo-img" src="../images/photo6.png" /> 
        </div> */}
    
}
}

export default Album;