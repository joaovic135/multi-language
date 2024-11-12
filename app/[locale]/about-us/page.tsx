import Link from "next/link";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../../i18n";


const i18nNameSpaces = ['about-us','common'];


export default async function Home ({params: {locale}}: {params: {locale: string}}){

  const {t, resources} = await initTranslations(locale,i18nNameSpaces );


  return(
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNameSpaces}>
    <main className='items-center text-center justify-center flex h-svh flex-col'>
      <h1 className="text-black">{t('common:about_us')}</h1>
      <p>
        <b>{t('our_address')}</b>
      </p>
      <p>
        1234 Example Street
        <br/>
        Manaus
      </p>

      <Link href="/">{t('back')}</Link>

    </main>
    </TranslationsProvider>
  )
}