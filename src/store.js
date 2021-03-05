const userShows = [
  {
    aired_episodes: 40,
    imdb_id: "tt5460226",
    network: "HBO Max",
    overview: "A dark comedy about four self-absorbed twenty-somethings who become entangled in an ominous mystery when a former college acquaintance suddenly disappears.",
    slug: "search-party-2016",
    status: "returning series",
    title: "Search Party",
    tmdb_id: "67697",
    tmdb_image_path: "/eHnHrt05f7m7myGB10Z0UaKPHK3.jpg",
    trakt_id: 106717,
    updated_at: "2021-03-01T09:06:58.000Z",
    watch_status: "want",
    year: 2016
  },
  {
    aired_episodes: 15,
    imdb_id: "tt5607976",
    network: "BBC One",
    overview: "Lyra is an orphan who lives in a parallel universe in which science, theology and magic are entwined. Lyra's search for a kidnapped friend uncovers a sinister plot involving stolen children, and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As Lyra learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
    slug: "his-dark-materials",
    status: "returning series",
    title: "His Dark Materials",
    tmdb_id: "68507",
    tmdb_image_path: "/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg",
    trakt_id: 144668,
    updated_at: "2021-02-06T08:33:48.000Z",
    watch_status: "want",
    year: 2019
  },
  {
    aired_episodes: 0,
    imdb_id: "tt7049682",
    network: "HBO",
    overview: "A modern-day reimagining where superheroes are treated as outlaws and must embrace the nostalgia.",
    slug: "watchmen-2019",
    status: "ended",
    title: "Watchmen",
    tmdb_id: "79788",
    tmdb_image_path: "/m8rWq3j73ZGhDuSCZWMMoE9ePH1.jpg",
    trakt_id: 168170,
    updated_at: "2020-10-12T17:03:22.000Z",
    watch_status: "watched",
    year: 2019
  },
  {
    aired_episodes: 73,
    imdb_id: "tt0944947",
    network: "HBO",
    overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    slug: "game-of-thrones",
    status: "ended",
    title: "Game of Thrones",
    tmdb_id: "1399",
    tmdb_image_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    trakt_id: 1390,
    updated_at: "2021-03-04T08:48:40.000Z",
    watch_status: "watched",
    year: 2011
  },
  {
    aired_episodes: 138,
    imdb_id: "tt0496424",
    network: "NBC",
    overview: "Liz Lemon, the head writer of a live variety program's life is turned upside down when brash new network executive Jack Donaghy interferes with her show, bringing the wildly unpredictable Tracy Jordan into the cast. Now its up to Liz to manage the mayhem and still try to have a life.",
    slug: "30-rock",
    status: "ended",
    title: "30 Rock",
    tmdb_id: "4608",
    tmdb_image_path: "/k3RbNzPEPW0cmkfkn1xVCTk3Qde.jpg",
    trakt_id: 4584,
    updated_at: "2021-03-04T08:52:43.000Z",
    watch_status: "watched",
    year: 2006
  },
  {
    aired_episodes: 57,
    imdb_id: "tt1587678",
    network: "ABC",
    overview: "A fresh and funny take on modern friendship and what one urban family will do to stay friends after the perfect couple who brought them all together break up on their wedding day. The failed wedding forces them all to question their life choices. Then there are Alex and Dave themselves, who strike a truce and must learn to live with the changes their breakup has brought.",
    slug: "happy-endings",
    status: "canceled",
    title: "Happy Endings",
    tmdb_id: "32829",
    tmdb_image_path: "/hbRVugwVvrPzMQyy2XlwUW7U5gk.jpg",
    trakt_id: 32688,
    updated_at: "2021-03-04T11:46:10.000Z",
    watch_status: "watched",
    year: 2011
  },
  {
    aired_episodes: 28,
    imdb_id: "tt2699128",
    network: "HBO",
    overview: "When 2% of the world's population abruptly disappears without explanation, the world struggles to understand just what they're supposed to do about it. The drama series 'The Leftovers' is the story of the people who didn't make the cut.Based on the bestselling novel by Tom Perrotta, 'The Leftovers' follows Kevin Garvey, a father of two and the chief of police in a small New York suburb, as he tries to maintain some semblance of normalcy when the notion no longer applies.",
    slug: "the-leftovers",
    status: "ended",
    title: "The Leftovers",
    tmdb_id: "54344",
    tmdb_image_path: "/ri8xr223xBb2TeHX3GKypvQPV2B.jpg",
    trakt_id: 54001,
    updated_at: "2021-02-16T08:36:28.000Z",
    watch_status: "watched",
    year: 2014
  },
  {
    aired_episodes: 8,
    imdb_id: "tt8134186",
    network: "Hulu",
    overview: "Young computer engineer Lily Chan investigates the secretive development division of her employer, a cutting-edge tech company based in San Francisco, which she believes is behind the murder of her boyfriend.",
    slug: "devs",
    status: "ended",
    title: "Devs",
    tmdb_id: "81349",
    tmdb_image_path: "/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg",
    trakt_id: 147971,
    updated_at: "2021-01-22T03:03:54.000Z",
    watch_status: "want",
    year: 2020
  },
];

const showDetail = {
  aired_episodes: 73,
  imdb_id: "tt0944947",
  network: "HBO",
  overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  slug: "game-of-thrones",
  status: "ended",
  title: "Game of Thrones",
  tmdb_id: "1399",
  tmdb_image_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  trakt_id: 1390,
  updated_at: "2021-03-04T08:48:40.000Z",
  year: 2011
};

const searchResults = [
  {
    ids: {
      imdb: "tt0944947",
      slug: "game-of-thrones",
      tmdb: 1399,
      trakt: 1390,
      tvdb: 121361,
      tvrage: 24493,
    },
    title: "Game of Thrones",
    year: 2011
  }
];

export { userShows, showDetail, searchResults };