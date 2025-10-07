import { useTranslation } from "react-i18next";

interface EducationCardProps {
  educationType: 'highSchool' | 'bsc' | 'msc';
}

const EducationCard = ({ educationType }: EducationCardProps) => {
  const { t } = useTranslation();

  const educationData = t(educationType, { returnObjects: true }) as {
    title: string;
    degree: string;
    institution: string;
    year: string;
  };

  return (
    <div className="relative h-full w-full p-2 group">
        <div className="rounded-2xl border border-white/20 h-full w-full p-4 bg-bg hover:border-accent/60 relative z-10">
            <div className="relative z-50 pointer-events-none">
                <h2 className="text-xl font-bold mb-2">{educationData.degree}</h2>
                <h3 className="text-sm text-white/80 mb-12">{educationData.year}</h3>
                <p className="text-white/70 text-sm">{educationData.institution}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-bg group-hover:bg-accent/10 rounded-2xl z-0"></div>
        </div>
        <div className="absolute -top-3 -left-3 bg-bg border border-accent text-accent px-3 py-1 rounded-full text-sm font-semibold z-20 pointer-events-none">
            {educationData.title}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-bg group-hover:bg-accent/10 rounded-2xl z-0"></div>
    </div>
  )
}

export default EducationCard