import React from 'react';
import './App.css'; // Keep this if you have global styles for the app
import HomePageCardOne from './HomePageCardOneMain/HomePageCardOne'; // Import your component
import HomePageCardTwo from './HomePageCardTwo/HomePageCardTwo';
import HomepageCardThree from './HomePageCardThree/HomePageCardThree';
function App() {
  return (
    <div className="App">
      <HomePageCardOne /> {/* Your custom homepage card */}
      <HomePageCardTwo/>
      <HomepageCardThree/>
    </div>
  );
}

export default App;

