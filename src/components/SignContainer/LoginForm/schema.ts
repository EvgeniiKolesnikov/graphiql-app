import z from 'zod';

export const schema = z.object({
  password: z.string().min(1, 'Password is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
});
