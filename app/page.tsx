import React from 'react';

const MaintenancePage = () => {
  const pageStyle: React.CSSProperties = {
    fontFamily: "'DM Serif Display', serif",
    // Use the local image from the public folder
    backgroundImage: "url('/maintenance-bg.jpg')",
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
