import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header stays on top */}
      <Header />
      FUCK YOU
      {/* Main content grows to fill space */}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default App;
