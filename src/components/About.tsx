import { useTranslation } from "react-i18next"

const About = () => {
  const {t} = useTranslation()
  return (
    <div className="text-4xl">{t("greeting")}</div>
  )
}

export default About