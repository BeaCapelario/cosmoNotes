import React, { useState, useEffect } from 'react';

export default function HomeTopico() {
  // Estado para armazenar dados (opcional)
  const [data, setData] = useState(null);

  // Efeito executado ao carregar a página (opcional)
  useEffect(() => {
    // Código de inicialização ou chamadas de API ficam aqui
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Página em Branco</h1>
      <p style={styles.subtitle}>Pronta para você começar a criar seu layout.</p>
    </div>
  );
}

// Estilos básicos inline para organização limpa
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa',
    color: '#212529',
    fontFamily: 'system-ui, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#6c757d',
  },
};