import React from 'react';
import ReactPlayer from 'react-player/youtube';

const YoutubePlaylist = () => {
  // Your playlist URL
  const playlistUrl = 'https://www.youtube.com/watch?v=Sou12pLJFCc&list=PL5qo1Sl2GW3cMiepxpnY3vjo7MPM-ejBh';

  return (
    <div className='mt-5'>
      {/* ReactPlayer with the playlist URL */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ReactPlayer
          url={playlistUrl}
          controls
          width="100%"
          height="400px"
          playing={true} // Automatically play the playlist
        />
      </div>
    </div>
  );
};

export default YoutubePlaylist;
