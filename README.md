[visit website](https://voice-toy-msus.vercel.app/)

# Tech Stack
- 📦 Next.js + Jest: out of box `Eslint`,  `Typescript`, `Jest` support. Easy to deploy the demo with Vercel.
- ⚙️ CI: husky + commitlint + eslint(next): Check code style and commit message style.
- 👂 Speech recognition: react-speech-cognition: Based on Web Speech Api, much more easy to use.
- 🚀 Deployed by Vercel



## Running

```bash
npm run dev
```


# Milestone
- [x] Basic CI: run unit tests when submit commit.
- [x] Basic UI and Responsive design.
- [X] Record function with Speech API.
- [x] Polish UI and a11y.
- [x] Code ESlint check when submit commit.
- [x] Offline recording solution



# Voice recognition
Implement voice recognition by [https://www.npmjs.com/package/react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition). 
Reason for choose it:
- Based on Web Speech Api, Free.
- Provide polyfill solution with [Speechly](https://github.com/speechly/speech-recognition-polyfill). Some browsers(firefox.) do not support [Web Speech Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility).

# Offline recording solution
- When online, using Web Speech API based lib `react-speech-recognition`. 
- When offline, fall back to record the speech, and try to send it to a third party API(e.g. [google speech-to-text](https://cloud.google.com/speech-to-text/docs/transcribe-api?hl=zh-cn)).
    - step 1: Check network status by `navigator.onLine`. If online, click record will trigger `react-speech-recognition` related method to record and recognize speech, while offline, it will fallback to record the speech.
    - step 2: To record the voice, use [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
    - step 3: When user finish recording, save it locally. It can be stored as a Blob File with a local URI.
    - step 4: Add event listener to listen to the `online` event. Once online, send the audio to backend server via an API. And the backend will try to send the audio to third party API. When get the result, send it back to user. Frontend will display the result.