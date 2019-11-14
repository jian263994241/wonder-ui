import React from 'react';
import cx from 'clsx';
import Context from './Context';
import { getHash } from 'rsg-components/../utils/handleHash';

export default function ComponentsListRenderer(props){
  const {items} = props;
  const {
    config: { pagePerSection },
  } = React.useContext(Context);
  
  const visibleItems = items.filter(item => item.visibleName);

	if (!visibleItems.length) {
		return null;
  }
  
  const { hash, pathname } = window.location;
  const windowHash = pathname + (pagePerSection ? hash : getHash(hash));
  
  return (
		<ul>
			{visibleItems.map((item) => {
        const { heading, visibleName, href, content, shouldOpenInNewTab, sections } = item;
				const isItemSelected = windowHash === href;
        console.log( item );

				return (
					<li
						key={href}
					>
						{
              heading ? (
                sections.length > 0 ? (
                  <div className="wonder-doc-nav__item">
                    <a>{visibleName}</a>
                  </div>
                ): (
                  <div className="wonder-doc-nav__group-title">{visibleName}</div>
                )
              ): (
                <div className="wonder-doc-nav__subitem">
                  <a
                    href={href}
                    target={shouldOpenInNewTab ? '_blank' : undefined}
                    className={cx(isItemSelected && 'active')}
                  >
                    {visibleName}
                  </a>
                </div>
              )
            }
						{content}
					</li>
				);
			})}
		</ul>
	);
}