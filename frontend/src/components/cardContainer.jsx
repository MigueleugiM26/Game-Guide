import React, { useState, useEffect, useRef } from "react";
import GuideCard from "./guideCard";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const observerRef = useRef();

  // Simulate loading cards (replace with API call)
  const loadMoreCards = () => {
    const newCards = Array.from({ length: 5 }, (_, i) => ({
      id: cards.length + i,
    }));
    setCards((prev) => [...prev, ...newCards]);
  };

  // Load initial cards
  useEffect(() => {
    loadMoreCards();
  }, []);

  // Infinite scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [cards]);

  return (
    <div className="cardContainer d-flex flex-column justify-content-center gap-3">
      <button className="sortButton btn btn-light">Sort</button>
      {cards.map((card) => (
        <GuideCard key={card.id} />
      ))}
      <div
        ref={observerRef}
        className="loader"
        style={{ height: "50px" }}
      ></div>
    </div>
  );
};

export default CardContainer;
