

export namespace Resize {
  interface AppMethods {
    /** App width in px */
    width : number
    /** App height in px */
    height : number
    /** App left offset in px */
    left : number
    /** App top offset in px */
    top : number
  }
  interface AppParams {

  }
  interface AppEvents {
    /** Event will be fired on app resize (window resize). */
    'resize': () => void
    /** Event will be fired on app orientation change (window orientantion change). */
    'orientationchange': () => void
  }
}



export default ResizeModule;