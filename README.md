# 🧮 React Native Calculator

A clean and functional calculator built with **React Native**.
It handles all basic arithmetic operations, supports square roots, percentages, and powers — all inside a minimal dark-themed UI that feels smooth on both iOS and Android.

## 📸 Screenshot

|                Calculator UI               |
| :----------------------------------------: |
| ![Calculator Screenshot](asset/screenshot.jpg) |


## ✨ Features

* Real-time expression and result display
* Supports addition, subtraction, multiplication, division, square root, exponentiation, and percentage
* Includes **Clear (C)** and **Delete (⌫)** functions
* Handles invalid input gracefully
* Fully responsive layout — adapts to any screen size
* Modern dark interface with intuitive button design
* Built with clean, maintainable React Native code


## 🧠 How It Works

The calculator builds an expression dynamically as the user taps buttons.
When the **equals (=)** button is pressed, the expression is evaluated after replacing math symbols (`×`, `÷`, `√`, `^`) with valid JavaScript equivalents (`*`, `/`, `Math.sqrt`, `**`).
Invalid expressions are caught safely, displaying **"Error"** instead of breaking the app.


## 🛠️ Tech Stack

* **React Native** – Core framework
* **TypeScript** – For type-safe and scalable code
* **react-native-safe-area-context** – Ensures layout fits well across devices
* **React Hooks (useState, useColorScheme)** – Manage state and themes cleanly

---

## 📂 Folder Structure

```
react-native-calculator/
├── assets/
│   └── screenshot.png
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

Everything’s handled in `App.tsx` — a single component that manages logic, rendering, and styling for clarity and simplicity.


## ⚙️ Installation & Setup

Make sure you have Node.js and React Native CLI installed.
If not, follow [React Native’s official setup guide](https://reactnative.dev/docs/environment-setup).

Then run these commands:

```bash
# Clone this repository
git clone https://github.com/yourusername/react-native-calculator.git

# Move into the project directory
cd react-native-calculator

# Install dependencies
npm install
# or
yarn install
```


## ▶️ Run the App

### For Android

```bash
npx react-native run-android
```

### For iOS

```bash
npx react-native run-ios
```

Once it builds, you’ll see the calculator ready to use.


## 🧩 Code Overview

### Expression Handling

```js
const handlePress = (value: string) => {
  if (value === 'C') {
    setExpression('');
    setResult('');
    return;
  }

  if (value === '⌫') {
    setExpression(prev => prev.slice(0, -1));
    return;
  }

  if (value === '=') {
    try {
      const evalExpr = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**');

      const calcResult = eval(evalExpr);
      setResult(calcResult.toString());
    } catch (error) {
      setResult('Error');
    }
    return;
  }

  setExpression(prev => prev + value);
};
```

### Styling Example

```js
operatorButton: {
  backgroundColor: '#006400',
},
equalsButton: {
  backgroundColor: '#00A300',
},
```

The layout is built with `TouchableOpacity` buttons arranged in rows, with dynamic styling applied to operators, clear/delete, and equals buttons.


## 🎨 Customization

You can easily tweak:

* **Colors:** Edit them in the `styles` object inside `App.tsx`.
* **Button layout:** Modify the `buttons` array to add or remove operations.
* **Theme:** Add light/dark modes using `useColorScheme` for dynamic styling.


## 🧭 Future Enhancements

* Add a history log for previous calculations
* Support scientific operations (sin, cos, tan, log)
* Add haptic feedback and subtle animations
* Include theme switching and custom color palettes


## 🧑‍💻 Author

**Farhan Atif**
Undergraduate Student & Full Stack Developer
📍 [GitHub](https://github.com/farhxn)
📧 [farhanatif9990@gmail.com](mailto:farhanatif9990@gmail.com)



## 📜 License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute it as long as you include the license notice.
