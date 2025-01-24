export enum LANGUAGE_INDEX {
  SPANISH = 0,
  ENGLISH = 1,
  ITALIAN = 2,
}

//similar functions. Change them
export const TextSplitter = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('').map((char, index) => {
        return (
          <span key={index} className="section__title__char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </>
  );
};
