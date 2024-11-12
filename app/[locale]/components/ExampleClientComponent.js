'use client';
import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {

  const {t} =useTranslation()

  const userName= "Joao"

  return <h2 className="text-black">{t("subheader",{userName})}</h2>;
}