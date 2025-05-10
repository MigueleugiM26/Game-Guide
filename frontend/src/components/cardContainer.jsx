import React, { useState, useEffect, useRef } from "react";
import GuideCard from "./guideCard";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;
  const observerRef = useRef();

  const loadMoreCards = async () => {
    if (!hasMore) return;

    try {
      const response = await fetch(
        `http://localhost:8000/api/guides/?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      setCards((prev) => {
        const existingIds = new Set(prev.map((card) => card.id));
        const newCards = data.results.filter(
          (card) => !existingIds.has(card.id)
        );
        return [...prev, ...newCards];
      });

      setOffset(offset + limit);
      setHasMore(!!data.next);
    } catch (err) {
      console.error("Failed to fetch guides:", err);
    }
  };

  useEffect(() => {
    loadMoreCards();
  }, []);

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
  }, [offset, hasMore]);

  return (
    <div className="cardContainer d-flex flex-column justify-content-center gap-5">
      <button className="sortButton btn btn-light">Sort</button>

      {cards.map((card) => (
        <GuideCard
          key={card.id}
          title={card.title}
          game={card.game}
          tags={card.tags}
          image={card.image}
          nsfw={card.nsfw}
        />
      ))}

      <div
        ref={observerRef}
        className="loader"
        style={{ height: "50px" }}
      ></div>

      {!hasMore && (
        <div className="text-center text-muted" style={{ marginTop: "1rem" }}>
          No more posts.
        </div>
      )}
    </div>
  );
};

export default CardContainer;
