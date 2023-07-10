export const validateFullName = (fullName) => {
    return fullName.trim().length > 0;
  };
  
  export const validateEmail = (email) => {
    // A simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  export const validateEmailVerification = (emailVerification, email) => {
    return emailVerification === email;
  };
  
  export const validatePassword = (password) => {
    // Validate password requirements (e.g., minimum length)
    return password.length >= 8;
  };
  
  export const validatePasswordVerification = (passwordVerification, password) => {
    return passwordVerification === password;
  };
  
  export const validateCpf = (cpf) => {
    // Remove any non-digit characters from the CPF
    const cleanCpf = cpf.replace(/\D/g, '');
  
    // CPF must have 11 digits
    if (cleanCpf.length !== 11) {
      return false;
    }
  
    // Check if all digits are the same
    if (/^(\d)\1+$/.test(cleanCpf)) {
      return false;
    }
  
    // Validate the CPF using the algorithm
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanCpf[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cleanCpf[9])) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanCpf[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cleanCpf[10])) {
      return false;
    }
  
    return true;
  };
  
  
  export const validatePhone = (phone) => {
    // Remove any non-digit characters from the phone number
    const cleanPhone = phone.replace(/\D/g, '');
  
    // Phone number must have 11 or 12 digits
    if (cleanPhone.length !== 11 && cleanPhone.length !== 12) {
      return false;
    }
  
    // Check if all digits are the same
    if (/^(\d)\1+$/.test(cleanPhone)) {
      return false;
    }
  
    return true;
  };
  
  