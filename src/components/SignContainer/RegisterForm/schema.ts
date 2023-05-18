import z from 'zod';

export const schema = z
  .object({
    login: z.string().min(3).max(15),
    password: z
      .string()
      .min(8)
      .max(15)
      .refine((str) => /([a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(str), {
        params: {
          i18n: 'passwordRules',
        },
      }),
    repeatPassword: z.string().min(1),
    email: z.string().email().min(1),
  })
  .refine((data) => data.password === data.repeatPassword, {
    params: {
      i18n: 'repeat',
    },
    path: ['repeatPassword'],
  });
