# audio-oscilloscope

Audio [oscilloscope](http://en.wikipedia.org/wiki/Oscilloscope) in canvas.

[![NPM](https://nodei.co/npm/audio-oscilloscope.png)](https://nodei.co/npm/audio-oscilloscope)

# Demo

**[http://lab.moogs.io/audio-oscilloscope](http://lab.moogs.io/audio-oscilloscope)**

# Install

```bash
npm install audio-oscilloscope
```

```bash
bower install audio-oscilloscope
```

# Usage

```javascript
var oscilloscope = AudioOscilloscope(document.getElementById('canvas'), {
  canvas: {
    width: function() {
      return window.innerWidth;
    },
    height: 400
  },
  canvasContext: {
    lineWidth: 2,
    fillStyle: 'rgb(0,0,0)',
    strokeStyle: 'green'
  }
});

oscilloscope.draw();

navigator.getUserMedia({
  audio: true
}, function(stream) {
  var audioContext = new AudioContext();
  var source = audioContext.createMediaStreamSource(stream);
  oscilloscope.addSource(source);
}, function(error) {
  console.error(error);
});
```

# License

MIT
