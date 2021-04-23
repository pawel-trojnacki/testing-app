import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

export default function NotFound(): ReactElement {
  const router = useRouter();

  const redirect = (): void => {
    setTimeout(() => router.push('/'), 2000);
  };

  useEffect(() => redirect(), []);

  return <h1>Page not found</h1>;
}
