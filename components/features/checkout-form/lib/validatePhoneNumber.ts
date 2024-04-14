export const validatePhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^0-9]/g, "");
  if (phoneNumber.length < 11) {
    return false;
  }
  return true; 
};
