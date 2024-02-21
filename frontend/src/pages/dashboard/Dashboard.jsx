import React from 'react';
import Navegacao from '../../components/navegacao/Navegacao';
import Logo from '../../components/logo/Logo';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  opacity: 0.5,
};

function Dashboard() {
  return (
    <>
      <Navegacao />
      <div style={centerStyle}>
        <Logo />
      </div>
    </>
  );
}

export default Dashboard;
