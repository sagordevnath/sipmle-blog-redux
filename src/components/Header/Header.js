import React from 'react';
import logoImage from '../../assets/alert-logo.png';

const Header = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="#">
          <img className="h-10 w-30" src={logoImage} alt="HashNode" />
        </a>
        <label for="add-blog" className="btn modal-button btn-outline btn-accent">
          Add Blog
        </label>
      </div>
    </nav>
  );
}

export default Header