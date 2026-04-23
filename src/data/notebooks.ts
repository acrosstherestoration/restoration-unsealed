export interface Notebook {
  title: string;
  description: string;
  url: string;
  icon: string;
  category?: string;
}

export const notebooks: Notebook[] = [
  {
    title: "The Historical Record (1830–1890)",
    description: "The primary source archive. Navigate multi-volume histories, early periodicals like the Evening and Morning Star, and personal memoirs from the era of Joseph Smith Jr. through the early Reorganization.",
    url: "https://notebooklm.google.com/notebook/f1ad7ef0-6e6f-4947-bee3-8090e51917c4",
    icon: "📜",
    category: "History"
  },
  {
    title: "The Living Faith: Our Beliefs & Modern Heritage",
    description: "The heart of the movement. Explore a century of sermons and testimonies. Understand the transition from the RLDS era to the modern Restoration Branches and current faith practice.",
    url: "https://notebooklm.google.com/notebook/58ebb36f-ebdc-4104-ba9d-a34a92f03893",
    icon: "🕊️",
    category: "Faith"
  },
  {
    title: "Restoration Scriptures & Doctrine",
    description: "The Standard of Truth. Direct access to the Three Standard Books (Inspired Version Bible, Book of Mormon, Doctrine & Covenants) and official doctrinal expositions.",
    url: "https://notebooklm.google.com/notebook/8b6b0633-d1e3-4480-97c7-1357bed6c970",
    icon: "📖",
    category: "Scripture"
  },
  {
    title: "The Case for the Reorganization",
    description: "Authority, Succession, and Law. A collection of legal history, including the Temple Lot Case transcripts and historical rebuttals of polygamy and other departures.",
    url: "https://notebooklm.google.com/notebook/a696492f-a5e7-4d0f-95aa-9ad382f62f92",
    icon: "🛡️",
    category: "History"
  },
];
