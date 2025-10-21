import { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supportedLngs, SupportedLanguage } from '../i18n';

interface LocaleWrapperProps {
  children: React.ReactNode;
}

const LocaleWrapper = ({ children }: LocaleWrapperProps) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  // Check if language is valid
  const isValidLang = lang && supportedLngs.includes(lang as SupportedLanguage);

  useEffect(() => {
    if (isValidLang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, isValidLang]);

  // If no language in URL, redirect to default language
  if (!lang) {
    const defaultLang = localStorage.getItem('i18nextLng') || 'en';
    // Only redirect if we're at the root path
    if (location.pathname === '/') {
      return <Navigate to={`/${defaultLang}`} replace />;
    }
    // For other paths without a language, redirect with language prefix
    return <Navigate to={`/${defaultLang}${location.pathname}${location.search}`} replace />;
  }

  // If invalid language, redirect to 404 with default language
  if (!isValidLang) {
    const defaultLang = localStorage.getItem('i18nextLng') || 'en';
    return <Navigate to={`/${defaultLang}/404`} replace />;
  }

  return <>{children}</>;
};

export default LocaleWrapper;
