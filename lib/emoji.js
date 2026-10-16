// Emoji dekoratif dibungkus aria-hidden supaya pembaca layar tidak membacakan "sparkles", "artist palette", dst.
const EMOJI = /(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic})*)/u;

export function Emo({ children }) {
  if (typeof children !== 'string') return children;
  return children.split(EMOJI).map((part, i) =>
    i % 2 ? <span key={i} aria-hidden="true">{part}</span> : part
  );
}
