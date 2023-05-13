import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db, auth } from '../../firebase/firebase';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const register = async (login: string, email: string, password: string) => {
    try {
      setError('');
      setIsLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        login,
        authProvider: 'local',
        email,
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
