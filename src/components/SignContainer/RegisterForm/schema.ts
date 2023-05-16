import z from 'zod';

export const schema = z
  .object({
    login: z
      .string()
      .min(1, 'Login is required')
      .min(3, 'Login should have more than 3 characters')
      .max(15, 'Login should not be longer than 10 characters'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password should have more than 8 characters')
      .max(15, 'Password should not be longer than 15 characters'),
    repeatPassword: z.string().min(1, 'You should repeat your password'),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
    message: 'Passwords do not match',
  });
