import React from 'react';
import { classnames } from '../utils';
import SlideBar from './SlideBar';
import Search from './Search';
import { Provider } from './Context';

const ribbon = {
  url: 'https://github.com/jian263994241/wonder-ui'
};


/**
 * StyleGuideRenderer
 * @param {*} props 
 */
export default function StyleGuideRenderer(props){
  const {
    title,
    version,
    children,
    toc,
    hasSidebar
  } = props;
  
  return (
    <Provider>
      <div className="wonder-doc">
        <div className="wonder-doc-header">
          <div className="wonder-doc-header__top">
            <a href="#/" className="wonder-doc-header__logo">
              <span>{title}</span>
            </a>
            <Search placeholder="Filter by name"/>
            <ul className="wonder-doc-header__top-nav">
              <li className="wonder-doc-header__top-nav-item">
                <a href={ribbon.url} target="_blank" className="wonder-doc-header__logo-link">
                  <img src={require('../github.svg')}/>
                </a>
              </li>
              {version && (
                <li className="wonder-doc-header__top-nav-item">
                  <span className="wonder-doc-header__cube">{version}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        {hasSidebar && <SlideBar>{toc}</SlideBar>}
        <main className={classnames({
          'wonder-doc-container': true,
          'wonder-doc-row': true,
          'wonder-doc-has-slide-bar': hasSidebar
        })}>
          <div className="wonder-doc-content"> {children} </div>
        </main>
      </div>
    </Provider>
  )
}