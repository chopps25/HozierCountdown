type Lyric = {
  text: string;
  song: string;
};

const lyrics: Lyric[] = [
  {
    text: "Honey, just put your sweet lips on my lips. We should just kiss like real people do.",
    song: "Like Real People Do"
  },
  {
    text: "I was born sick, but I love it. Command me to be well.",
    song: "Take Me To Church"
  },
  {
    text: "When the evening pulls the sun down, and the day is almost through, oh, the whole world it is sleeping, but my world is you.",
    song: "In the Woods Somewhere"
  },
  {
    text: "No grave can hold my body down, I'll crawl home to her.",
    song: "Work Song"
  },
  {
    text: "That looks like freedom but it feels like death. It's something in between, I guess.",
    song: "Nina Cried Power"
  },
  {
    text: "I slithered here from Eden just to sit outside your door.",
    song: "From Eden"
  },
  {
    text: "What a way to make a living, what a way to make it work. What a way to begin, when it feels like we're ending.",
    song: "Movement"
  },
  {
    text: "I had a thought, dear, however scary about that night, the bugs and the dirt. Why were you digging? What did you bury before those hands pulled me from the earth?",
    song: "Like Real People Do"
  },
  {
    text: "The days are all empty, the nights are unreal. The love that I'm givin' is no longer free. I'm bound and determined to finally be me.",
    song: "Dinner & Diatribes"
  },
  {
    text: "Wasteland, baby, I'm in love with you.",
    song: "Wasteland, Baby!"
  }
];

export function getRandomLyrics(): Lyric {
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  return lyrics[randomIndex];
}