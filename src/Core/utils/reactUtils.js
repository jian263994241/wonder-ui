import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import utils from './utils';

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
export function createRootElement(id) {
  const rootContainer = document.createElement('div');
  id && rootContainer.setAttribute('id', id);
  return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem 
 */
function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling,
  );
}

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
export function usePortal(id) {
  const rootElemRef = useRef(null);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return function createPortal(component) {
    return ReactDOM.createPortal(component, getRootElem());
  }
}

/**
 * render react element function
 * 
 * @param {function} Component 
 * @param {object} defaultProps 
 * @returns {function} render
 */
export function createContainer(Component){
  const container = createRootElement();
  let timeoutfn = null;
  const prevProps = {};
  /**
   * render
   * @param {string} id
   * @param {object} props
   * @param {number} timeout
   * @param {function} callback
   * @returns {function} destroy
   */
  return function render (id, props, timeout, callback){
    prevProps[id] = Object.assign({}, prevProps[id], props);
    clearTimeout(timeoutfn);
    utils.nextTick(()=>{
      ReactDOM.render(<Component {...prevProps[id]}/>, container, ()=>{
        callback && callback();
        if(timeout){
          setTimeout(() => { destroy() }, timeout);
        }
      });
    })

    function destroy(){
      ReactDOM.unmountComponentAtNode(container);
    }

    return destroy;
  }; 
}


export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

export function isUiElement(element, uiName) {
  return React.isValidElement(element) && muiNames.indexOf(element.type.uiName) !== -1;
}

export function styledTag(ele, uiProps = []){
  return (props)=> {
    const _props = Object.assign({}, props);
    uiProps.forEach((removePropName)=>{
      delete _props[removePropName]
    })
    return React.createElement(ele, _props)
  };
}