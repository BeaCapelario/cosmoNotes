import React from 'react';
import PropTypes from 'prop-types';
import './herobanner.css';


export default function HeroBanner({
  title,
  description,
  variant = 'surface', // 'surface', 'magic', 'primary', 'dark'
  breadcrumbs = [],
  children
}) {
  return (
    <section className={`hero-banner hero-variant-${variant}`}>
      <div className="hero-container">
        
        {/* Breadcrumbs de Navegação */}
        {breadcrumbs.length > 0 && (
          <nav className="hero-breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="hero-separator">/</span>}
                {crumb.link ? (
                  <a href={crumb.link} className="hero-link">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="hero-current">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Título com a fonte expressiva */}
        <h1 className="hero-title">{title}</h1>

        {/* Descrição do Tópico */}
        {description && (
          <p className="hero-description">{description}</p>
        )}

        {/* Ações, Tags ou Badges */}
        {children && (
          <div className="hero-actions">
            {children}
          </div>
        )}

      </div>
    </section>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['surface', 'magic', 'primary', 'dark']),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
  children: PropTypes.node,
};
