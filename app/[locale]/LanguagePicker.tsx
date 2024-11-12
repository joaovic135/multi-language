'use client'
import {useRouter } from 'next/navigation';

export function LanguagePicker({ params: { locale: initialLocale } }: { params: { locale: string } }) {
  const router = useRouter();

  const changeLocale = async (newLocale: string) => {
    router.push(`/${newLocale}`);
  };


  return (
    <div className='flex space-x-4'>
      <button onClick={() => changeLocale('en')}>EN</button>
      <button onClick={() => changeLocale('fr')}>FR</button>
      <button onClick={() => changeLocale('it')}>IT</button>
      <button onClick={() => changeLocale('pt')}>PT</button>
    </div>
  );
}