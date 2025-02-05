export const OFFSET = 55;
export const PAGES_NAMES = ['about me', 'projects', 'contact'];
export const formattedId = (page: string) =>
  page.toLowerCase().replace(' ', '-');
export enum LANGUAGE_INDEX {
  SPANISH = 0,
  ENGLISH = 1,
  ITALIAN = 2,
}

type TextSplitterProps = {
  text: string;
  className?: string;
};

export const TextSplitter = ({ text, className }: TextSplitterProps) => {
  return text.split('').map((char, index) => (
    <span key={index} className={className}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

export const handleScrollTo = (targetTop: number) => {
  window.scrollTo({
    top: targetTop,
    behavior: 'instant' as ScrollBehavior,
  });
};

export const getOffsetBySectionId = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const sectionPosition = section?.getBoundingClientRect().top || 0;
  const topSectionPosition = sectionPosition + window.scrollY - OFFSET;
  return topSectionPosition;
};
