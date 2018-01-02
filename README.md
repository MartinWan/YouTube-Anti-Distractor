# YouTube-Anti-Distractor
*A browser extension that makes YouTube less distracting by hiding videos from selected categories*

## Demo
Extension removing videos not from Science & Technology / Education category  
<p align="center">
  <img src="/doc/after.gif" width="800" align="left"/>
</p>
##
## Installation

Install node modules
```bash
npm install
```

Install webpack
```bash
npm install --global webpack
```

Bundle JavaScript with webpack
```bash
webpack
```

Configure Settings
1. Get a YouTube Data API Key by following instructions here https://developers.google.com/youtube/v3/getting-started
2. In ```config.js``` replace ```YOUR_API_KEY_HERE``` with the key obtained in previous step.
3. In ```config.js``` uncomment categories in ```WHITE_LISTED_CATEGORY_IDS``` you'd like to allow. (Default is Education, Science & Technology)

Add to Chrome
1. In the Chrome navigation bar go to "chrome://extensions"
2. Select the ```Developer mode``` checkbox
3. Select ```Load unpacked extension```
4. Select this project's folder

## Todos
- [ ] Simplify installation
- [ ] UI for configuring categories
- [ ] Properly align video icons in rows after video removal  
- [ ] Remove suggested channels if all videos are removed
- [ ] UI displaying info about videos hidden
- [ ] Investigate removing videos based on different metrics
