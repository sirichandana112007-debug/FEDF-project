function TourismHome() {
  return (
    <>
      <header className="navbar">
        <h2>🌍 Wander Diary</h2>

        <nav>
  <a href="#home">Home</a>
  <a href="#places">Places</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Explore Beautiful Destinations</h1>

          <p>
            Travel opens your heart, broadens your mind, and fills your life
            with unforgettable memories.
          </p>

          
            <button>✈️ Start Exploring</button>
          
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Our Travel Blog</h2>

        <p>
          Welcome to Wander Diary! We share destination guides and travel
          stories from around the world.
        </p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>50+</h2>
          <p>Countries</p>
        </div>

        <div className="stat-card">
          <h2>200+</h2>
          <p>Travel Guides</p>
        </div>

        <div className="stat-card">
          <h2>100K+</h2>
          <p>Travelers</p>
        </div>
      </section>
    </>
  );
}

export default TourismHome;
