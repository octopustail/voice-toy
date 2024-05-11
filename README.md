[visit website](https://voice-toy-msus.vercel.app/)
# Tech Stack
- 📦 Next.js + Jest
- ⚙️ CI: husky + commitlint + eslint(next)
- 👂 Speech recognition: react-speech-cognition
- 🚀 Deployed by Vercel



## Running

```bash
npm run dev
```


# Milestone
- [x] Basic CI: run unit tests when submit commit.
- [x] Basic UI
- [X] Record function with Speech API
- [x] Polish UI and a11y.
- [x] Code ESlint check when submit commit.
- [] Offline recording solution.


# react-speech-recognition
Implement voice recognition by [https://www.npmjs.com/package/react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition). 
Reason for choose it:
- Based on Web Speech Api.
- Provide polyfill solution with [Speechly](https://github.com/speechly/speech-recognition-polyfill). Some browsers(firefox.) do not support [Web Speech Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility).
