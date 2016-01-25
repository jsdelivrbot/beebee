/* */ 
var id3 = require('../dist/id3');
id3({
  file: './track.mp3',
  type: 'local'
}, function(err, tags) {
  console.log(tags);
});
