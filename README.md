# KrushiMitra AI

KrushiMitra AI is a smart farmer assistant built with HTML, CSS, JavaScript, and Firebase.

## Features
- Farmer dashboard
- Crop health overview
- AI crop doctor mock interface
- Crop recommendation
- Irrigation cost and water requirement calculator
- Fertilizer advisor
- Market tracker and chart
- Multilingual voice assistant
- Community hub
- Firebase Firestore record saving

## Setup
1. Create a Firebase project in the Firebase Console.
2. Enable Firestore Database.
3. Replace the placeholder values in `firebase-config.js` with your project config.
4. Run a local server:

```bash
python -m http.server 8000
```

5. Open:
`http://localhost:8000`

## Files
- `index.html`
- `styles.css`
- `firebase-config.js`
- `app.js`

## Firebase Security
For testing, you can use:
- Firestore rules: allow read/write if true (only for local demo)
- or use Firebase Emulator if you want a safer dev environment.

## Notes
This is the MVP version built for demo and frontend flow. The next upgrade can include:
- TensorFlow crop disease model
- real weather API
- market data API
- auth system
- fully responsive mobile app workflow
