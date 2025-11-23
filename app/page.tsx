import React from 'react';

const MaintenancePage = () => {
  // Styles are converted to a JS object for inline application.
  const pageStyle: React.CSSProperties = {
    fontFamily: "'DM Serif Display', serif",
    backgroundImage: "url('https://i.pinimg.com/originals/8a/9c/0b/8a9c0b7c2513f2a8f4c2eef9e5b5e7c8.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  };

  const quoteStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '2rem',
    maxWidth: '400px',
    fontStyle: 'italic',
    borderLeft: '3px solid white',
    padding: '10px 20px',
    margin: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  };

  // The body tag needs its margin removed globally.
  // We can inject a style tag for this specific case.
  const globalStyle = `
    body {
      margin: 0;
    }
  `;

  return (
    <>
      <style>{globalStyle}</style>
      <div style={pageStyle}>
        <div style={quoteStyle}>
          <p>currently under maintainence, i'll shortly re-open it</p>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
