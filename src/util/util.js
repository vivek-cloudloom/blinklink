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
