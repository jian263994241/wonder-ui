import $ from './dom'

// Size Navbars
export function sizeNavbars (viewContainer) {
    var navbarInner = viewContainer ? $(viewContainer).find('.navbar .navbar-inner:not(.cached)') : $('.navbar .navbar-inner:not(.cached)');
    navbarInner.each(function () {
        var n = $(this);
        if (n.hasClass('cached')) return;
        var left = n.find('.left'),
            right = n.find('.right'),
            center = n.find('.center'),
            subnavbar = n.find('.subnavbar'),
            noLeft = left.length === 0,
            noRight = right.length === 0,
            leftWidth = noLeft ? 0 : left.outerWidth(true),
            rightWidth = noRight ? 0 : right.outerWidth(true),
            centerWidth = center.outerWidth(true),
            navbarStyles = n.styles(),
            navbarWidth = n[0].offsetWidth - parseInt(navbarStyles.paddingLeft, 10) - parseInt(navbarStyles.paddingRight, 10),
            onLeft = n.hasClass('navbar-on-left'),
            currLeft, diff;

        if (noRight) {
            currLeft = navbarWidth - centerWidth;
        }
        if (noLeft) {
            currLeft = 0;
        }
        if (!noLeft && !noRight) {
            currLeft = (navbarWidth - rightWidth - centerWidth + leftWidth) / 2;
        }
        var requiredLeft = (navbarWidth - centerWidth) / 2;
        if (navbarWidth - leftWidth - rightWidth > centerWidth) {
            if (requiredLeft < leftWidth) {
                requiredLeft = leftWidth;
            }
            if (requiredLeft + centerWidth > navbarWidth - rightWidth) {
                requiredLeft = navbarWidth - rightWidth - centerWidth;
            }
            diff = requiredLeft - currLeft;
        }
        else {
            diff = 0;
        }

        // Center left
        var centerLeft = diff;

        center.css({left: centerLeft + 'px'});
    });
}

export function mounted(content, reactElement){
  if(!content) return null;
  return React.cloneElement(reactElement, null , content);
}
