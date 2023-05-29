export const resources = {
  resources: {
    en: {
      zod: {
        errors: {
          invalid_string: {
            email: 'Invalid {{validation}}',
          },
          too_small: {
            string: {
              inclusive: '{{path}} must contain at least {{minimum}} character(s)',
            },
          },
          too_big: {
            string: {
              inclusive: '{{path}} must contain at most {{maximum}} character(s)',
            },
          },
        },
        login: 'Login',
        email: 'Email',
        password: 'Password',
        repeatPassword: 'Repeat password',
        validations: {
          email: 'email',
        },
      },
      custom: {
        repeat: `Passwords don't match`,
        passwordRules: `Password must contain at least 1 letter, 1 digit, 1 special character`,
      },
    },
    ru: {
      zod: {
        errors: {
          invalid_string: {
            email: 'Неверный {{validation}}',
          },
          too_small: {
            string: {
              inclusive: '{{path}} должен содержать не менее {{minimum}} символа(ов)',
            },
          },
          too_big: {
            string: {
              inclusive: '{{path}} должнен содержать не более {{maximum}} символа(ов)',
            },
          },
        },
        login: 'Логин',
        email: 'Электронный адрес',
        password: 'Пароль',
        repeatPassword: 'Повторный пароль',
        validations: {
          email: 'электронный адрес',
        },
      },
      custom: {
        repeat: 'Пароли не совпадают',
        passwordRules: `Пароль должен содержать не менее 1 буквы, 1 цифры, 1 специального символа`,
      },
    },
  },
};
