export const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const validatePhoneNumber = (inputtxt) => {
  var phoneno = /^\d{10}$/;
  if (inputtxt.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

export const getVisibleHeightPx = (element, viewportHeight) => {
  if (element) {
    var rect = element.getBoundingClientRect(),
      height = rect.bottom - rect.top,
      visible = {
        top: rect.top >= 0 && rect.top < viewportHeight,
        bottom: rect.bottom > 0 && rect.bottom < viewportHeight,
      },
      visiblePx = 0;

    if (visible.top && visible.bottom) {
      // Whole element is visible
      visiblePx = height;
    } else if (visible.top) {
      visiblePx = viewportHeight - rect.top;
    } else if (visible.bottom) {
      visiblePx = rect.bottom;
    } else if (height > viewportHeight && rect.top < 0) {
      var absTop = Math.abs(rect.top);

      if (absTop < height) {
        // Part of the element is visible
        visiblePx = height - absTop;
      }
    }

    return visiblePx;
  }
};
