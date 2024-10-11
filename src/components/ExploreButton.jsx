function ExploreButton({ showAuthForms }) {
    return (
      <div className="explore-button" id="explore-section">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and more.</p>
        <button onClick={showAuthForms}>Get Started</button>
      </div>
    );
  }
  
  export default ExploreButton;