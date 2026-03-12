import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) router.push('/admin');
  }, [router]);
  return children;
}
