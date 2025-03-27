import React from "react";
import "./portfolio.css"; // Import the CSS file

const portfolioItems = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x300/?abstract",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x300/?technology",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x300/?laptop",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x300/?office",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/400x300/?toy",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
  {
    id: 6,
    image: "https://source.unsplash.com/400x300/?flower",
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>Viarums eleifend convallis ante, non pharetra libero molestie laoreet.</p>
              <a href="#" className="case-study">Case Study →</a>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <button>More Projects</button>
      </div>
    </section>
  );
};

export default Portfolio;
