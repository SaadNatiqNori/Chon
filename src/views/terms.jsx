// A setting's name, written the way the app itself writes it. <bdi> isolates
// the Latin so it cannot disturb the Kurdish or Arabic around it, and nowrap
// holds it on one line: a two word name split across a line break leaves half
// of itself stranded at the far end of the line above, which in a right to
// left paragraph is the opposite end from where the eye is looking.
//
// Shared by the safety notes and the code panel, because both write the names
// of things the reader has to go and find on their own screen.
export function withTerms(text) {
  return String(text)
    .split(/(‘[^’]+’)/)
    .map((part, i) => (part.charAt(0) === '‘'
      ? <bdi key={i} className="term">{part}</bdi>
      : part));
}
