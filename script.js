// CONSTANT: loved one's name
const LOVED_ONE = "Jaan";

// Elements
const startJourneyBtn = document.getElementById("startJourneyBtn");
const secretHeart = document.getElementById("secretHeart");

const screenStart = document.getElementById("screen-start");
const screenGarden = document.getElementById("screen-garden");
const screenReasons = document.getElementById("screen-reasons");

const dynamicName = document.getElementById("dynamicName");
const roseGrid = document.getElementById("roseGrid");
const surpriseMessageEl = document.getElementById("surpriseMessage");
const shuffleMessageBtn = document.getElementById("shuffleMessageBtn");
const progressFill = document.getElementById("progressFill");
const nextToReasonsBtn = document.getElementById("nextToReasonsBtn");

const reasonsGrid = document.getElementById("reasonsGrid");
const openLetterBtn = document.getElementById("openLetterBtn");

const letterOverlay = document.getElementById("letterOverlay");
const closeLetterBtn = document.getElementById("closeLetterBtn");
const letterNameLine = document.getElementById("letterNameLine");
const letterBody = document.getElementById("letterBody");
const confettiBtn = document.getElementById("confettiBtn");

const secretNoteOverlay = document.getElementById("secretNoteOverlay");
const closeSecretNoteBtn = document.getElementById("closeSecretNoteBtn");

const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bg-music");
const petalLayer = document.getElementById("petal-layer");

// Data – personalised to Jaan
const surpriseMessages = [
  "Jaan, if I could show you my heart right now, it would look like a sky filled with soft pink roses all whispering your name.",
  "Every time my phone lights up with your name, Jaan, the whole day suddenly feels lighter and prettier.",
  "Jaan, somewhere between our random talks and shared silences, you quietly became my favourite feeling.",
  "You don’t just walk into my day, Jaan, you colour it. In your soft shades, everything suddenly feels warmer.",
  "If each heartbeat was a petal, Jaan, I’d still run out of petals trying to say how much you mean to me.",
  "You turned ordinary moments into memories I replay like my favourite song, Jaan.",
  "The safest place I know is anywhere your name, your voice, and your smile are, Jaan.",
];

const reasons = [
  "Because when you smile, Jaan, the whole world around me softens, and suddenly nothing feels that hard anymore.",
  "You listen – not just to my words, but to the quiet things I don’t know how to say, Jaan.",
  "Even on your bad days, you still somehow manage to be gentle with others. That softness is rare and beautiful, Jaan.",
  "You remember tiny things I mentioned once and bring them back like little surprises – that’s how carefully you hold me in your mind.",
  "Your laugh makes everything feel lighter. I could spend a lifetime trying to make you laugh again, Jaan.",
  "You never pretend to be perfect, but you always show up with a real heart – and that’s everything to me.",
  "On the days I feel lost, just hearing your voice feels like finally finding home again, Jaan.",
  "You make love feel like a calm, safe place instead of a storm, and I never knew it could feel like that before you.",
  "Because every version of my future that makes me smile has you in it, standing right there with me, Jaan.",
];

const letterParagraphs = [
  "Jaan, on this Rose Day, I didn’t want to just send you a picture of a flower and call it a wish. I wanted to build a tiny world for you – a little garden where every petal is a quiet confession of how much you mean to me.",
  "Somewhere between our random chats, shared jokes, late-night thoughts, and the way you say the simplest things – you became my comfort. My heart started saving moments with you like favourite photos, replaying them on silent evenings just to feel close to you again.",
  "You’ve carried your own storms, your own scars, your own battles, and still you choose to be kind. Watching you be strong without losing your softness is one of the most beautiful things I’ve ever seen, Jaan. You are proof that gentle doesn’t mean weak – it means unbelievably brave.",
  "With you, love doesn’t feel like a movie scene or some distant fantasy. It feels real. It feels like warm tea after a long day, like a message that arrives exactly when I need it, like the way my chest relaxes the moment I see your name on the screen. It feels like home, and that home is you.",
  "I don’t know exactly where life will take us, what we’ll go through, or how many seasons will pass. But I know this – I want you there with me. In my smallest victories and loudest laughs, in my tired days and my scared nights, I want to reach out and find you there, the way you’ve already found your way into my heart.",
  "So here is my quiet promise wrapped gently inside this digital rose garden, Jaan: I will keep choosing you. In your sunshine and in your rain, when your petals are in full bloom and even when you feel like you’re just trying to hold yourself together. I will be there, learning how to love you better, one day at a time.",
  "Happy Rose Day, Jaan. You are not just a part of my life – you are my favourite part of it. And no matter how many roses the world has, you will always be the most beautiful one to me.",
];

// Utilities
function getDisplayName() {
  return LOVED_ONE;
}

function switchPanel(from, to) {
  from.classList.remove("panel-active");
  to.classList.add("panel-active");
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Petal animation */
function spawnPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  const startLeft = Math.random() * 100;
  const fallDuration = 7 + Math.random() * 6;
  const delay = Math.random() * 3;

  petal.style.left = startLeft + "vw";

  const drift = (Math.random() - 0.5) * 40;
  const rotate = (Math.random() - 0.5) * 80;

  petal.animate(
    [
      { transform: "translate3d(0, -10vh, 0) rotate(0deg)", opacity: 0 },
      { opacity: 1 },
      {
        transform: `translate3d(${drift}vw, 110vh, 0) rotate(${rotate}deg)`,
        opacity: 0.1,
      },
    ],
    {
      duration: fallDuration * 1000,
      delay: delay * 1000,
      easing: "linear",
      fill: "forwards",
    }
  );

  petalLayer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (fallDuration + delay + 0.5) * 1000);
}

function startPetals(count = 18) {
  for (let i = 0; i < count; i++) {
    spawnPetal();
  }
  // Sustain gently
  setInterval(() => spawnPetal(), 2000);
}

/* Confetti */
function launchConfetti() {
  const colors = ["#ff4b7d", "#ff9bb8", "#ffd1e3", "#ffe55e", "#ff8a5c"];
  const pieces = 120;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const color = colors[i % colors.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 0.6;
    const fallDuration = 3 + Math.random() * 1.8;
    const rotate = (Math.random() - 0.5) * 360;

    piece.style.left = left + "vw";
    piece.style.top = "-2vh";
    piece.style.background = color;

    document.body.appendChild(piece);

    piece.animate(
      [
        { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 1 },
        {
          transform: `translate3d(${(Math.random() - 0.5) * 25}vw, 110vh, 0) rotate(${rotate}deg)`,
          opacity: 0.2,
        },
      ],
      {
        duration: fallDuration * 1000,
        delay: delay * 1000,
        easing: "cubic-bezier(0.2, 0.6, 0.4, 1)",
        fill: "forwards",
      }
    );

    setTimeout(() => piece.remove(), (fallDuration + delay + 0.5) * 1000);
  }
}

/* Garden setup */
function buildGarden() {
  const captions = [
    "Tap me, Jaan",
    "I’m hiding a whisper",
    "Hold me gently",
    "A secret for you",
    "Smell this moment",
    "Bloom with me, Jaan",
  ];

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "rose-card";

    const stem = document.createElement("div");
    stem.className = "rose-stem";

    const bud = document.createElement("div");
    bud.className = "rose-bud";

    const leafLeft = document.createElement("div");
    leafLeft.className = "leaf left";

    const leafRight = document.createElement("div");
    leafRight.className = "leaf right";

    const glow = document.createElement("div");
    glow.className = "rose-glow";

    const caption = document.createElement("div");
    caption.className = "rose-caption";
    caption.textContent = captions[i % captions.length];

    stem.appendChild(leafLeft);
    stem.appendChild(leafRight);

    card.appendChild(stem);
    card.appendChild(bud);
    card.appendChild(glow);
    card.appendChild(caption);

    card.addEventListener("click", () => {
      setSurpriseMessage(randomItem(surpriseMessages));
      highlightActiveRose(card);
    });

    roseGrid.appendChild(card);
  }
}

function highlightActiveRose(activeCard) {
  const all = Array.from(document.querySelectorAll(".rose-card"));
  all.forEach(card => card.classList.remove("active"));
  activeCard.classList.add("active");
}

/* Surprise message */
function setSurpriseMessage(text) {
  surpriseMessageEl.textContent = text;
}

/* Reasons grid */
function buildReasons() {
  reasonsGrid.innerHTML = "";
  reasons.forEach((reason, idx) => {
    const card = document.createElement("div");
    card.className = "reason-card locked";

    const label = document.createElement("div");
    label.className = "reason-label";
    label.textContent = `Reason ${idx + 1}`;

    const text = document.createElement("div");
    text.className = "reason-text";
    text.textContent = reason;

    card.appendChild(label);
    card.appendChild(text);

    card.addEventListener("click", () => {
      card.classList.remove("locked");
      card.classList.add("revealed");
      card.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.03)" },
          { transform: "scale(1)" },
        ],
        { duration: 180, easing: "ease-out" }
      );
    });

    reasonsGrid.appendChild(card);
  });
}

/* Music */
let musicOn = false;

musicToggle.addEventListener("click", async () => {
  if (!bgMusic) return;

  try {
    if (!musicOn) {
      await bgMusic.play();
      musicOn = true;
      musicToggle.textContent = "♫ Music On for Jaan";
      musicToggle.classList.remove("pill-muted");
    } else {
      bgMusic.pause();
      musicOn = false;
      musicToggle.textContent = "♫ Music Off";
      musicToggle.classList.add("pill-muted");
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
});

/* Journey buttons */
startJourneyBtn.addEventListener("click", () => {
  dynamicName.textContent = getDisplayName();
  switchPanel(screenStart, screenGarden);
  progressFill.style.width = "40%";
});

nextToReasonsBtn.addEventListener("click", () => {
  switchPanel(screenGarden, screenReasons);
  progressFill.style.width = "75%";
});

/* Shuffle surprise messages */
shuffleMessageBtn.addEventListener("click", () => {
  setSurpriseMessage(randomItem(surpriseMessages));
});

/* Letter overlay */
openLetterBtn.addEventListener("click", () => {
  progressFill.style.width = "100%";

  letterNameLine.textContent = `Dear ${LOVED_ONE},`;

  letterBody.innerHTML = "";
  openOverlay(letterOverlay);
  typeLetter(letterBody, letterParagraphs, 36 * 1000);
});

closeLetterBtn.addEventListener("click", () => {
  closeOverlay(letterOverlay);
});

/* Secret note overlay */
secretHeart.addEventListener("click", () => {
  openOverlay(secretNoteOverlay);
});

closeSecretNoteBtn.addEventListener("click", () => {
  closeOverlay(secretNoteOverlay);
});

function openOverlay(overlay) {
  overlay.classList.add("open");
}

function closeOverlay(overlay) {
  overlay.classList.remove("open");
}

/* Typewriter effect for letter */
function typeLetter(container, paragraphs, totalDurationMs = 40 * 1000) {
  const fullText = paragraphs.join("\n\n");
  const totalChars = fullText.length;
  const interval = Math.max(14, totalDurationMs / totalChars);

  let index = 0;
  container.textContent = "";

  function render() {
    const current = fullText.slice(0, index);
    const html = current
      .split("\n\n")
      .map(p => `<p>${p}</p>`)
      .join("");
    container.innerHTML = html;
  }

  function step() {
    if (!letterOverlay.classList.contains("open")) {
      return; // stop if user closed overlay
    }
    if (index <= totalChars) {
      index++;
      render();
      setTimeout(step, interval);
    }
  }

  step();
}

/* Confetti trigger */
confettiBtn.addEventListener("click", () => {
  launchConfetti();
});

/* Initialisation */
function init() {
  if (dynamicName) {
    dynamicName.textContent = getDisplayName();
  }

  buildGarden();
  buildReasons();
  setSurpriseMessage(randomItem(surpriseMessages));
  startPetals(22);
}

document.addEventListener("DOMContentLoaded", init);
