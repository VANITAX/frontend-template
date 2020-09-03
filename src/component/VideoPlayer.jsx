import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import videojs from "video.js";

class VideoPlayer extends PureComponent {
  playerRef = createRef();
  player = null;

  componentDidMount() {
    this.instanceVideoPlayer();
  }

  instanceVideoPlayer() {
    const { mediaSrc } = this.props;
    this.player = videojs(
      this.playerRef.current,
      {
        controls: false,
        autoplay: "muted",
        loop: true,
        techOrder: ["html5"],
        children: {
          mediaLoader: true, // minimal children
          posterImage: true,
          controlBar: {
            children: []
          } // minimal children
        },
        html5: {
          nativeAudioTracks: false,
          nativeVideoTracks: false
        }
      },
      () => {
        this.player.src(mediaSrc);
      }
    );
  }

  render() {
    return <video playsInline ref={this.playerRef} />;
  }
}

VideoPlayer.propTypes = {
  mediaSrc: PropTypes.string
};

VideoPlayer.defaultProps = {
  mediaSrc: ""
};

export default VideoPlayer;
