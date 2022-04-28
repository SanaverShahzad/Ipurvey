import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
class Video extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
    this.state = {
    paused: true,
    show: false
    };
  }
  playPause = () => {
    this.vidRef.current.paused ? this.vidRef.current.play() : this.vidRef.current.pause();
    this.setState({paused: this.vidRef.current.paused});
  }
  enterMouseHandle = () => {
    this.setState({...this.state,show: true});
  }
  leaveMouseHandle = () => {
    this.setState({...this.state,show: false});
  }
  render() {
    
    return (
       <div className="video">
        <video controls  width="100%" className="rounded-2xl" ref={this.vidRef} 
        onMouseEnter ={this.enterMouseHandle}
        onMouseLeave ={this.leaveMouseHandle}
        >
          <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" 
            type="video/mp4" />
          </video>
          {this.state.show && 
           <IconButton aria-label="Play/Pause" className="btn-play text-7xl" onMouseEnter ={this.enterMouseHandle}onClick={this.playPause}>
           {this.state.paused ? (<PlayArrowIcon />) : (<PauseIcon />)}
           </IconButton>
          }
       </div>
    );
  }
}

export default Video;