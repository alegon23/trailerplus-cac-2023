import React from "react";

const YoutubeVideo = ({ src }) => {
  return (
    <div>
    <iframe
      width="100%"
      height="500px"
      src={`${src}?controls=1`}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    </div>
  );
};

export default YoutubeVideo;
