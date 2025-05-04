import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./scss/stylesBootstrap.scss";
import App from "./App.jsx";
import Header from "./components/header.jsx";
import CardContainer from "./components/cardContainer.jsx";
import GuideCard from "./components/guideCard.jsx";

createRoot(document.getElementById("react-header")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);

createRoot(document.getElementById("react-card-container")).render(
  <StrictMode>
    <CardContainer />
  </StrictMode>
);

createRoot(document.getElementById("react-guide-card")).render(
  <StrictMode>
    <GuideCard />
  </StrictMode>
);
