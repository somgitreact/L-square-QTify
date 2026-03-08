import React from 'react'

const Loading = () => {
  

 return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin:'auto',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 10, pointerEvents: 'none'
    }}>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .spinnerStyle {
          width: 40px; height: 40px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}</style>
      <div className='spinnerStyle' />
    </div>
  );
}

export default Loading