export enum LANGUAGE_INDEX {
  SPANISH = 0,
  ENGLISH = 1,
  ITALIAN = 2,
}

export const TextSplitter = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className="section__title__char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};
