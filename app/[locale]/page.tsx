import ExampleClientComponent from './components/ExampleClientComponent';
import Link from 'next/link';
import initTranslations from '../i18n';
import TranslationsProvider from './components/TranslationsProvider';
import { LanguagePicker } from './LanguagePicker';

const i18nNameSpaces = ['home','common'];

export default async function Home({params: {locale}}: {params: {locale: string}}) {
  
  const {t, resources} = await initTranslations(locale,i18nNameSpaces);

  return (

  <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNameSpaces}>
    <main className='h-screen flex flex-col justify-center items-center bg-white'>
      <h1>{t('header')}</h1>
      <ExampleClientComponent />
      <Link href="about-us" className="text-black text-xl">{t('common:about_us')}</Link>
      <LanguagePicker params={
        {locale: locale}
      }/>
    </main>
  </TranslationsProvider>
  );
}