import React from 'react';
import './main.scss';

const Aside = () => (
  <aside className="aside">
    <h4>Aside</h4>
  </aside>
);

export const Main = () => (
  <main className='main'>
    <Aside />
    <div className="main-content">
      <h4>Content</h4>
    </div>
  </main>
);