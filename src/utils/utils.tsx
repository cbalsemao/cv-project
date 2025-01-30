export enum LANGUAGE_INDEX {
  SPANISH = 0,
  ENGLISH = 1,
  ITALIAN = 2,
}

interface TextSplitterProps {
  text: string;
  className?: string;
}

//similar functions. Change them

export const TextSplitter = ({ text, className }: TextSplitterProps) => {
  return text.split('').map((char, index) => (
    <span key={index} className={className}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};
