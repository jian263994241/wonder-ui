import {
  allowScrollOnElement,
  disableBodyScroll,
  enableBodyScroll
} from '@wonder-ui/utils';

export interface ManagedModalProps {
  disableScrollLock?: boolean;
}

export function ariaHidden(element: Element, show: boolean): void {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function ariaHiddenSiblings(
  container: Element,
  mountElement: Element,
  currentElement: Element,
  elementsToExclude: Element[] = [],
  show: boolean
): void {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];

  [].forEach.call(container.children, (element: Element) => {
    if (
      blacklist.indexOf(element) === -1 &&
      blacklistTagNames.indexOf(element.tagName) === -1
    ) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf<T>(items: T[], callback: (item: T) => boolean): number {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}

function handleContainer(
  modal: Modal,
  containerInfo: Container,
  props: ManagedModalProps
) {
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    disableBodyScroll(container);
    allowScrollOnElement(modal.modalRef);
  }

  const restore = () => {
    enableBodyScroll(container);
  };

  return restore;
}

function getHiddenSiblings(container: HTMLElement): HTMLElement[] {
  const hiddenSiblings: HTMLElement[] = [];
  [].forEach.call(container.children, (element: HTMLElement) => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

export interface Modal {
  mount: HTMLElement;
  modalRef: HTMLElement;
}

interface Container {
  container: HTMLElement;
  hiddenSiblings: HTMLElement[];
  modals: Modal[];
  restore: null | (() => void);
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
export default class ModalManager {
  private containers: Container[];

  public modals: Modal[];

  constructor() {
    this.modals = [];
    this.containers = [];
  }

  add(modal: Modal, container: HTMLElement): number {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(
      container,
      modal.mount,
      modal.modalRef,
      hiddenSiblings,
      true
    );

    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.container === container
    );

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });

    return modalIndex;
  }

  mount(modal: Modal, props: ManagedModalProps): void {
    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.modals.indexOf(modal) !== -1
    );
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(modal, containerInfo, props);
    }
  }

  remove(modal: Modal): number {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.modals.indexOf(modal) !== -1
    );
    const containerInfo = this.containers[containerIndex];

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(
        containerInfo.container,
        modal.mount,
        modal.modalRef,
        containerInfo.hiddenSiblings,
        false
      );
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal: Modal): boolean {
    return (
      this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
    );
  }
}
