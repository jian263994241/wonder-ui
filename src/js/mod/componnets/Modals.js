/*======================================================
************   Modals   ************
======================================================*/
import React from 'React'
import $ from '../utils/dom'
import device from '../utils/device'
import support from '../utils/support'

var app = {};
var _modalTemplateTempDiv = document.createElement('div');
app.modalStack = [];
app.modalStackClearQueue = function () {
    if (app.modalStack.length) {
        (app.modalStack.shift())();
    }
};
app.params = {
  modalButtonOk: '\u786e\u5b9a',
  modalButtonCancel: '\u53d6\u6d88',
  modalUsernamePlaceholder: '\u7528\u6237\u540d',
  modalPasswordPlaceholder: '\u5bc6\u7801',
  modalTitle: '',
  modalCloseByOutside: false,
  actionsCloseByOutside: true,
  popupCloseByOutside: false,
  modalPreloaderTitle: '\u8bf7\u7b49\u5f85... ',
  modalStack: true
};
app.root = $('.root');
app.device = device;

app.modal = function (params) {
    params = params || {};
    var modalHTML = '';

    var buttonsHTML = '';
    if (params.buttons && params.buttons.length > 0) {
        for (var i = 0; i < params.buttons.length; i++) {
            buttonsHTML += '<span class="modal-button' + (params.buttons[i].bold ? ' modal-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
        }
    }
    var titleHTML = params.title ? '<div class="modal-title">' + params.title + '</div>' : '';
    var textHTML = params.text ? '<div class="modal-text">' + params.text + '</div>' : '';
    var afterTextHTML = params.afterText ? params.afterText : '';
    var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-no-buttons' : '';
    var verticalButtons = params.verticalButtons ? 'modal-buttons-vertical': '';
    var modalButtonsHTML = params.buttons && params.buttons.length > 0 ? '<div class="modal-buttons modal-buttons-' + params.buttons.length + ' ' + verticalButtons + '">' + buttonsHTML + '</div>' : '';
    modalHTML = '<div class="modal ' + noButtons + ' ' + (params.cssClass || '') + '"><div class="modal-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div>' + modalButtonsHTML + '</div>';

    _modalTemplateTempDiv.innerHTML = modalHTML;

    var modal = $(_modalTemplateTempDiv).children();

    app.root.append(modal[0]);

    // Add events on buttons
    modal.find('.modal-button').each(function (index, el) {
        $(el).on('click', function (e) {
            if (params.buttons[index].close !== false) app.closeModal(modal);
            if (params.buttons[index].onClick) params.buttons[index].onClick(modal, e);
            if (params.onClick) params.onClick(modal, index);
        });
    });
    app.openModal(modal);
    return modal[0];
};

app.toast = function(text, timer, callbackOk) {
  if (typeof timer === 'function' || typeof timer === 'undefined') {
    callbackOk = arguments[1];
    timer = 2000;
  }
  var toast =  app.modal({
    text: text || '',
    cssClass: 'toast'
  });

  setTimeout(function(){
    app.closeModal(toast);
    callbackOk && callbackOk();
  }, timer);
};

app.alert = function(text, title, callbackOk) {
  if (typeof title === 'function') {
    callbackOk = arguments[1];
    title = undefined;
  }
  return app.modal({
    text: text || '',
    title: typeof title === 'undefined' ? app.params.modalTitle : title,
    buttons: [ {text: app.params.modalButtonOk, bold: true, onClick: callbackOk} ]
  });
};

app.confirm = function (text, title, callbackOk, callbackCancel) {
    if (typeof title === 'function') {
        callbackCancel = arguments[2];
        callbackOk = arguments[1];
        title = undefined;
    }
    return app.modal({
        text: text || '',
        title: typeof title === 'undefined' ? app.params.modalTitle : title,
        buttons: [
            {text: app.params.modalButtonCancel, onClick: callbackCancel},
            {text: app.params.modalButtonOk, bold: true, onClick: callbackOk}
        ]
    });
};

app.prompt = function (text, title, callbackOk, callbackCancel) {
    if (typeof title === 'function') {
        callbackCancel = arguments[2];
        callbackOk = arguments[1];
        title = undefined;
    }
    return app.modal({
        text: text || '',
        title: typeof title === 'undefined' ? app.params.modalTitle : title,
        afterText: '<div class="input-field"><input type="text" class="modal-text-input"></div>',
        buttons: [
            {
                text: app.params.modalButtonCancel
            },
            {
                text: app.params.modalButtonOk,
                bold: true
            }
        ],
        onClick: function (modal, index) {
            if (index === 0 && callbackCancel) callbackCancel($(modal).find('.modal-text-input').val());
            if (index === 1 && callbackOk) callbackOk($(modal).find('.modal-text-input').val());
        }
    });
};

app.showPreloader = function(title) {
  return app.modal({
        text: '<div class="preloader preloader-white"></div>',
        afterText: '<div class="modal-text" style="padding:5px 5px 0;">'+ (title || app.params.modalPreloaderTitle) + '</div>',
        cssClass: 'preloader-modal'
    });
};

app.hidePreloader = function () {
    app.closeModal('.modal.modal-in');
};

app.showIndicator = function() {
  if ($('.preloader-indicator-overlay').length > 0) return;
  app.root.append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-kq">' + (app.params.material ? app.params.materialPreloaderHtml : '') + '</span><i class="logo"></i></div>');
};

app.hideIndicator = function() {
  $('.preloader-indicator-overlay, .preloader-indicator-modal').remove();
};

// Action Sheet
app.actions = function (target, params, animated) {
    var toPopover = false, modal, groupSelector, buttonSelector;
    if (arguments.length === 1 || arguments.length === 2 && typeof arguments[1] === 'boolean') {
        // Actions
        params = arguments[0];
        animated = arguments[1];
    }
    else {
        // Popover
        if (app.device.ios) {
            if (app.device.ipad) toPopover = true;
        }
        else {
            if ($(window).width() >= 768) toPopover = true;
        }
    }
    if (typeof animated === 'undefined') animated = true;

    params = params || [];

    if (params.length > 0 && !$.isArray(params[0])) {
        params = [params];
    }
    var modalHTML;
    if (toPopover) {
        var actionsToPopoverTemplate = app.params.modalActionsToPopoverTemplate ||
            '<div class="popover actions-popover">' +
              '<div class="popover-inner">' +
                '{{#each this}}' +
                '<div class="list-block">' +
                  '<ul>' +
                    '{{#each this}}' +
                    '{{#if label}}' +
                    '<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>' +
                    '{{else}}' +
                    '<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>' +
                    '{{/if}}' +
                    '{{/each}}' +
                  '</ul>' +
                '</div>' +
                '{{/each}}' +
              '</div>' +
            '</div>';
        if (!app._compiledTemplates.actionsToPopover) {
            app._compiledTemplates.actionsToPopover = t7.compile(actionsToPopoverTemplate);
        }
        var popoverHTML = app._compiledTemplates.actionsToPopover(params);
        modal = $(app.popover(popoverHTML, target, true, animated));
        groupSelector = '.list-block ul';
        buttonSelector = '.list-button';
    }
    else {
        if (app.params.modalActionsTemplate) {
            if (!app._compiledTemplates.actions) app._compiledTemplates.actions = t7.compile(app.params.modalActionsTemplate);
            modalHTML = app._compiledTemplates.actions(params);
        }
        else {
            var buttonsHTML = '';
            for (var i = 0; i < params.length; i++) {
                for (var j = 0; j < params[i].length; j++) {
                    if (j === 0) buttonsHTML += '<div class="actions-modal-group">';
                    var button = params[i][j];
                    var buttonClass = button.label ? 'actions-modal-label' : 'actions-modal-button';
                    if (button.bold) buttonClass += ' actions-modal-button-bold';
                    if (button.color) buttonClass += ' color-' + button.color;
                    if (button.bg) buttonClass += ' bg-' + button.bg;
                    if (button.disabled) buttonClass += ' disabled';
                    buttonsHTML += '<div class="' + buttonClass + '">' + button.text + '</div>';
                    if (j === params[i].length - 1) buttonsHTML += '</div>';
                }
            }
            modalHTML = '<div class="actions-modal">' + buttonsHTML + '</div>';
        }
        _modalTemplateTempDiv.innerHTML = modalHTML;
        modal = $(_modalTemplateTempDiv).children();
        app.root.append(modal[0]);
        groupSelector = '.actions-modal-group';
        buttonSelector = '.actions-modal-button';
    }

    var groups = modal.find(groupSelector);
    groups.each(function (index, el) {
        var groupIndex = index;
        $(el).children().each(function (index, el) {
            var buttonIndex = index;
            var buttonParams = params[groupIndex][buttonIndex];
            var clickTarget;
            if (!toPopover && $(el).is(buttonSelector)) clickTarget = $(el);
            if (toPopover && $(el).find(buttonSelector).length > 0) clickTarget = $(el).find(buttonSelector);

            if (clickTarget) {
                clickTarget.on('click', function (e) {
                    if (buttonParams.close !== false) app.closeModal(modal);
                    if (buttonParams.onClick) buttonParams.onClick(modal, e);
                });
            }
        });
    });
    if (!toPopover) app.openModal(modal, animated);
    return modal[0];
};

// app.popover = function (modal, target, removeOnClose, animated) {
//     if (typeof removeOnClose === 'undefined') removeOnClose = true;
//     if (typeof animated === 'undefined') animated = true;
//
//     if (!React.isValidElement(modal)) return false;
//     var _modal = document.createElement('div');
//     ReactDOM.render(modal, _modal);
//     if (_modal.childNodes.length > 0) {
//         modal = _modal.childNodes[0];
//         if (removeOnClose) modal.classList.add('remove-on-close');
//         app.root.append(modal);
//     }
//     else return false; //nothing found
//
//     modal = $(modal);
//     target = $(target);
//
//     if (modal.length === 0 || target.length === 0) return false;
//     if (modal.parents('body').length === 0) {
//         if (removeOnClose) modal.addClass('remove-on-close');
//         app.root.append(modal[0]);
//     }
//     if (modal.find('.popover-angle').length === 0) {
//         modal.append('<div class="popover-angle"></div>');
//     }
//     modal.show();
//
//     function sizePopover() {
//         modal.css({left: '', top: ''});
//         var modalWidth =  modal.width();
//         var modalHeight =  modal.height(); // 13 - height of angle
//         var modalAngle, modalAngleSize = 0, modalAngleLeft, modalAngleTop;
//
//         modalAngle = modal.find('.popover-angle');
//         modalAngleSize = modalAngle.width() / 2;
//         modalAngle.removeClass('on-left on-right on-top on-bottom').css({left: '', top: ''});
//
//         var targetWidth = target.outerWidth();
//         var targetHeight = target.outerHeight();
//         var targetOffset = target.offset();
//         var targetParentPage = target.parents('.page');
//         if (targetParentPage.length > 0) {
//             targetOffset.top = targetOffset.top - targetParentPage[0].scrollTop;
//         }
//
//         var windowHeight = $(window).height();
//         var windowWidth = $(window).width();
//
//         var modalTop = 0;
//         var modalLeft = 0;
//         var diff = 0;
//         // Top Position
//         var modalPosition = 'top';
//
//         if ((modalHeight + modalAngleSize) < targetOffset.top) {
//             // On top
//             modalTop = targetOffset.top - modalHeight - modalAngleSize;
//         }
//         else if ((modalHeight + modalAngleSize) < windowHeight - targetOffset.top - targetHeight) {
//             // On bottom
//             modalPosition = 'bottom';
//             modalTop = targetOffset.top + targetHeight + modalAngleSize;
//         }
//         else {
//             // On middle
//             modalPosition = 'middle';
//             modalTop = targetHeight / 2 + targetOffset.top - modalHeight / 2;
//             diff = modalTop;
//             if (modalTop <= 0) {
//                 modalTop = 5;
//             }
//             else if (modalTop + modalHeight >= windowHeight) {
//                 modalTop = windowHeight - modalHeight - 5;
//             }
//             diff = diff - modalTop;
//         }
//
//         // Horizontal Position
//         if (modalPosition === 'top' || modalPosition === 'bottom') {
//             modalLeft = targetWidth / 2 + targetOffset.left - modalWidth / 2;
//             diff = modalLeft;
//             if (modalLeft < 5) modalLeft = 5;
//             if (modalLeft + modalWidth > windowWidth) modalLeft = windowWidth - modalWidth - 5;
//             if (modalPosition === 'top') {
//                 modalAngle.addClass('on-bottom');
//             }
//             if (modalPosition === 'bottom') {
//                 modalAngle.addClass('on-top');
//             }
//             diff = diff - modalLeft;
//             modalAngleLeft = (modalWidth / 2 - modalAngleSize + diff);
//             modalAngleLeft = Math.max(Math.min(modalAngleLeft, modalWidth - modalAngleSize * 2 - 13), 13);
//             modalAngle.css({left: modalAngleLeft + 'px'});
//
//         }
//         else if (modalPosition === 'middle') {
//             modalLeft = targetOffset.left - modalWidth - modalAngleSize;
//             modalAngle.addClass('on-right');
//             if (modalLeft < 5 || (modalLeft + modalWidth > windowWidth)) {
//                 if (modalLeft < 5) modalLeft = targetOffset.left + targetWidth + modalAngleSize;
//                 if (modalLeft + modalWidth > windowWidth) modalLeft = windowWidth - modalWidth - 5;
//                 modalAngle.removeClass('on-right').addClass('on-left');
//             }
//             modalAngleTop = (modalHeight / 2 - modalAngleSize + diff);
//             modalAngleTop = Math.max(Math.min(modalAngleTop, modalHeight - modalAngleSize * 2 - 13), 13);
//             modalAngle.css({top: modalAngleTop + 'px'});
//         }
//
//         // Apply Styles
//         modal.css({top: modalTop + 'px', left: modalLeft + 'px'});
//     }
//
//     sizePopover();
//
//     $(window).on('resize', sizePopover);
//
//     modal.on('popover:close', function () {
//       $(window).off('resize', sizePopover);
//     });
//
//     app.openModal(modal, animated);
//     return modal[0];
// };


// app.popup = function (modal, removeOnClose, animated) {
//     if (typeof removeOnClose === 'undefined') removeOnClose = true;
//     if (typeof animated === 'undefined') animated = true;
//     if (!React.isValidElement(modal)) return false;
//     var _modal = document.createElement('div');
//     ReactDOM.render(modal, _modal);
//     if (_modal.childNodes.length > 0) {
//         modal = _modal.childNodes[0];
//         if (removeOnClose) modal.classList.add('remove-on-close');
//         app.root.append(modal);
//     }
//
//     modal = $(modal);
//     if (modal.length === 0) return false;
//     if (modal.parents('body').length === 0) {
//         if (removeOnClose) modal.addClass('remove-on-close');
//         app.root.append(modal[0]);
//     }
//     modal.show();
//     $(window).trigger('resize');
//     app.openModal(modal, animated);
//     return modal[0];
// };

app.pickerModal = function (modal, removeOnClose, animated) {
    if (typeof removeOnClose === 'undefined') removeOnClose = true;
    if (typeof animated === 'undefined') animated = true;
    if (typeof modal === 'string' && modal.indexOf('<') >= 0) {
        modal = $(modal);
        if (modal.length > 0) {
            if (removeOnClose) modal.addClass('remove-on-close');
            app.root.append(modal[0]);
        }
        else return false; //nothing found
    }
    modal = $(modal);
    if (modal.length === 0) return false;
    if (modal.parents('body').length === 0) {
        if (removeOnClose) modal.addClass('remove-on-close');
        app.root.append(modal[0]);
    }
    if ($('.picker-modal.modal-in:not(.modal-out)').length > 0 && !modal.hasClass('modal-in')) {
        app.closeModal('.picker-modal.modal-in:not(.modal-out)');
    }
    modal.show();
    app.openModal(modal, animated);
    return modal[0];
};

app.openModal = function (modal, animated) {
    if (typeof animated === 'undefined') animated = true;
    modal = $(modal);
    modal[animated ? 'removeClass' : 'addClass']('not-animated');

    var isModal = modal.hasClass('modal');
    var isPopover = modal.hasClass('popover');
    var isPopup = modal.hasClass('popup');
    var isLoginScreen = modal.hasClass('login-screen');
    var isPickerModal = modal.hasClass('picker-modal');
    var isActions = modal.hasClass('actions-modal');

    // Modal Event Prefix
    var modalType = 'modal';
    if (isPopover) modalType = 'popover';
    if (isPopup) modalType = 'popup';
    if (isPickerModal) modalType = 'picker';
    if (isActions) modalType = 'actions';

    if ($('.modal.modal-in:not(.modal-out)').length && app.params.modalStack && isModal) {
        app.modalStack.push(function () {
            app.openModal(modal);
        });
        return;
    }

    // do nothing if this modal already shown
    if (true === modal.data('f7-modal-shown')) {
        return;
    }
    modal.data('f7-modal-shown', true);

    // Move modal
    var modalParent = modal.parent();
    if (app.params.modalsMoveToRoot && !modalParent.is(app.root)) {
        app.root.append(modal);
        modal.once(modalType + ':closed', function() {
           modalParent.append(modal);
        });
    }

    modal.once(modalType + ':close', function() {
       modal.removeData('f7-modal-shown');
    });

    if (isModal) {
        modal.show();
        modal.css({
            marginTop: - Math.round(modal.outerHeight() / 2) + 'px'
        });
    }

    var overlay;
    if (!isLoginScreen && !isPickerModal) {
        if ($('.modal-overlay').length === 0 && !isPopup) {
            app.root.append('<div class="modal-overlay"></div>');
        }
        if ($('.popup-overlay').length === 0 && isPopup) {
            app.root.append('<div class="popup-overlay"></div>');
        }
        overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
    }

    if (overlay) {
        overlay[animated ? 'removeClass' : 'addClass']('not-animated');
    }

    //Make sure that styles are applied, trigger relayout;
    var clientLeft = modal[0].clientLeft;

    // Trugger open event
    modal.trigger('open ' + modalType + ':open');

    // Picker modal body class
    if (isPickerModal) {
        $('body').addClass('with-picker-modal');
    }

    // Init Pages and Navbars in modal
    if (modal.find('.' + app.params.viewClass).length > 0) {
        modal.find('.page').each(function () {
            app.initPageWithCallback(this);
        });
        modal.find('.navbar').each(function () {
            app.initNavbarWithCallback(this);
        });
    }

    // Classes for transition in
    if (!isLoginScreen && !isPickerModal) overlay.addClass('modal-overlay-visible');

    if (animated) {
        modal.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
            if (modal.hasClass('modal-out')) modal.trigger('closed ' + modalType + ':closed');
            else modal.trigger('opened ' + modalType + ':opened');
        });
    }
    else {
        modal.removeClass('modal-out').addClass('modal-in');
        modal.trigger('opened ' + modalType + ':opened');
    }


    return true;
};

app.closeModal = function (modal, animated) {
    if (typeof animated === 'undefined') animated = true;
    modal = $(modal || '.modal-in');
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    modal[animated ? 'removeClass' : 'addClass']('not-animated');
    var isModal = modal.hasClass('modal');
    var isPopover = modal.hasClass('popover');
    var isPopup = modal.hasClass('popup');
    var isLoginScreen = modal.hasClass('login-screen');
    var isPickerModal = modal.hasClass('picker-modal');
    var isActions = modal.hasClass('actions-modal');

    // Modal Event Prefix
    var modalType = 'modal';
    if (isPopover) modalType = 'popover';
    if (isPopup) modalType = 'popup';
    if (isLoginScreen) modalType = 'loginscreen';
    if (isPickerModal) modalType = 'picker';
    if (isActions) modalType = 'actions';

    var removeOnClose = modal.hasClass('remove-on-close');

    // For Actions
    var keepOnClose = modal.hasClass('keep-on-close');

    var overlay;

    if (isPopup) overlay = $('.popup-overlay');
    else {
        if (isPickerModal && app.params.material) overlay = $('.picker-modal-overlay');
        else if (!isPickerModal) overlay = $('.modal-overlay');
    }

    if (isPopup){
        if (modal.length === $('.popup.modal-in').length) {
            overlay.removeClass('modal-overlay-visible');
        }
    }
    else if (overlay && overlay.length > 0) {
        overlay.removeClass('modal-overlay-visible');
    }
    if (overlay) overlay[animated ? 'removeClass' : 'addClass']('not-animated');

    modal.trigger('close ' + modalType + ':close');

    // Picker modal body class
    if (isPickerModal) {
        $('body').removeClass('with-picker-modal');
        $('body').addClass('picker-modal-closing');
    }

    if (animated) {
        modal.removeClass('modal-in').addClass('modal-out').transitionEnd(function (e) {
            if (modal.hasClass('modal-out')) modal.trigger('closed ' + modalType + ':closed');
            else {
                modal.trigger('opened ' + modalType + ':opened');
                if (isPopover) return;
            }

            if (isPickerModal) {
                $('body').removeClass('picker-modal-closing');
            }
            if (isPopup || isLoginScreen || isPickerModal || isPopover) {
                modal.removeClass('modal-out').hide();
                if (removeOnClose && modal.length > 0) {
                    modal.remove();
                }
            }
            else if (!keepOnClose) {
                modal.remove();
            }
        });
    }
    else {
        modal.trigger('closed ' + modalType + ':closed');
        modal.removeClass('modal-in modal-out');
        if (isPickerModal) {
            $('body').removeClass('picker-modal-closing');
        }
        if (isPopup || isLoginScreen || isPickerModal || isPopover) {
            modal.hide();
            if (removeOnClose && modal.length > 0) {
                modal.remove();
            }
        }
        else if (!keepOnClose) {
            modal.remove();
        }
    }
    if (isModal && app.params.modalStack) {
        app.modalStackClearQueue();
    }

    return true;
};

const touchEvents = {
    start: support.touch ? 'touchstart' : 'mousedown',
    move: support.touch ? 'touchmove' : 'mousemove',
    end: support.touch ? 'touchend' : 'mouseup'
};

// $(document).on(touchEvents.start, '.modal-overlay, .popup-overlay, .picker-modal-overlay', handleClicks);

function handleClicks(e) {
  /*jshint validthis:true */
  var clicked = $(this);
  // var url = clicked.attr('href');
  // var isLink = clicked[0].nodeName.toLowerCase() === 'a';

  // Collect Clicked data- attributes
  // var clickedData = clicked.dataset();

  // Smart Select
  // if (clicked.hasClass('smart-select')) {
  //     if (app.smartSelectOpen) app.smartSelectOpen(clicked);
  // }

  // Popover
  // if (clicked.hasClass('open-popover')) {
  //     var popover;
  //     if (clickedData.popover) {
  //         popover = clickedData.popover;
  //     }
  //     else popover = '.popover';
  //     app.popover(popover, clicked);
  // }
  // if (clicked.hasClass('close-popover')) {
  //     app.closeModal('.popover.modal-in');
  // }
  // Popup
  // var popup;
  // if (clicked.hasClass('open-popup')) {
  //     if (clickedData.popup) {
  //         popup = clickedData.popup;
  //     }
  //     else popup = '.popup';
  //     app.popup(popup);
  // }
  // if (clicked.hasClass('close-popup')) {
  //     if (clickedData.popup) {
  //         popup = clickedData.popup;
  //     }
  //     else popup = '.popup.modal-in';
  //     app.closeModal(popup);
  // }

  // Close Modal
  if (clicked.hasClass('modal-overlay')) {
      if ($('.modal.modal-in').length > 0 && app.params.modalCloseByOutside)
          app.closeModal('.modal.modal-in');
      if ($('.actions-modal.modal-in').length > 0 && app.params.actionsCloseByOutside)
          app.closeModal('.actions-modal.modal-in');

      if ($('.popover.modal-in').length > 0) app.closeModal('.popover.modal-in');
  }
  if (clicked.hasClass('popup-overlay')) {
      if ($('.popup.modal-in').length > 0 && app.params.popupCloseByOutside)
          app.closeModal('.popup.modal-in');
  }
  if (clicked.hasClass('picker-modal-overlay')) {
      if ($('.picker-modal.modal-in').length > 0)
          app.closeModal('.picker-modal.modal-in');
  }

  // Picker
  // if (clicked.hasClass('close-picker')) {
  //     var pickerToClose = $('.picker-modal.modal-in');
  //     if (pickerToClose.length > 0) {
  //         app.closeModal(pickerToClose);
  //     }
  //     else {
  //         pickerToClose = $('.popover.modal-in .picker-modal');
  //         if (pickerToClose.length > 0) {
  //             app.closeModal(pickerToClose.parents('.popover'));
  //         }
  //     }
  // }
  // if (clicked.hasClass('open-picker')) {
  //     var pickerToOpen;
  //     if (clickedData.picker) {
  //         pickerToOpen = clickedData.picker;
  //     }
  //     else pickerToOpen = '.picker-modal';
  //     app.pickerModal(pickerToOpen, clicked);
  // }

}
//
function preventScrolling(e) {
  e.preventDefault();
}
if (support.touch && !device.android) {
  $(document).on(touchEvents.move, '.panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay', preventScrolling);
}

export default app;
