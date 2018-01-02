var queryString = require('query-string')

var YTD_THUMBNAIL_TAGS = new Set(["YTD-THUMBNAIL", "YTD-PLAYLIST-THUMBNAIL"])
var processedVideoIds = new Set()


function getCategoryId(videoId, callback) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      var categoryId = JSON.parse(req.responseText).items[0].snippet.categoryId
      callback(Number(categoryId))
    }
  }
  req.open('GET', 'https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&key='+YOUTUBE_DATA_API_KEY+'&part=snippet', true);
  req.send(null) 
}


function process(videoElement, videoId) {
  if (!processedVideoIds.has(videoId)) {
    processedVideoIds.add(videoId)
    getCategoryId(videoId, function(categoryId) {
      if (!WHITE_LISTED_CATEGORY_IDS.has(categoryId)) {
        videoElement.remove()
      }
    })  
  }
}


document.addEventListener('DOMSubtreeModified', function(event) {
  for (var i = 0; i < document.links.length; i++) {
    var dad = document.links[i].parentElement
    if (YTD_THUMBNAIL_TAGS.has(dad.tagName)) {
      var video = dad.parentElement
      var query = document.links[i].getAttribute('href').split('?')[1]
      var videoId = queryString.parse(query)['v']
      process(video, videoId)
    }
  }
})



