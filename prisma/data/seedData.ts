export type Student = {
  firstName: string;
  lastName: string;
  motto: string;
  email: string;
  imgUrl: string;
  gpa: number;
};

export type School = {
  name: string;
  address: string;
  imgUrl: string;
  description: string;
};

export const studentSeed: Student[] = [
  {
    firstName: 'Homer',
    lastName: 'Simpson',
    motto: 'smiling politely',
    email: 'chunkylover53@aol.com',
    imgUrl: 'https://i.imgur.com/8yajkng.jpeg',
    gpa: 2.6,
  },
  {
    firstName: 'Abed',
    lastName: 'Nadir',
    motto: 'hello',
    email: 'ilikemovies@imdb.com',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0DxpIdmnswfz_WM48R5gYgHaGD%26pid%3DApi&f=1',
    gpa: 4.0,
  },
  {
    firstName: 'Troy',
    lastName: 'Barnes',
    motto: "I like football, but also like, I don't?",
    email: 'theothertroybarnes@greendalecc.edu',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v_Xmal_D9mDjZj92EtsjaQHaLH%26pid%3DApi&f=1',
    gpa: 3.3,
  },
  {
    firstName: 'Abe',
    lastName: 'Simpson',
    motto: '...so I tied an onion to my belt, which was the style at the time.',
    email: 'whatdoitypehere@springfieldcc.edu',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GlVsflaQOHzYeifcZrJkpgHaH_%26pid%3DApi&f=1',
    gpa: 2.0,
  },
  {
    firstName: 'Bender',
    lastName: 'Rodriguez',
    motto: 'Daffodils!',
    email: 'bender@ilovebender.com',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6X-DgjhX7tOPEwKWbnjzhgAAAA%26pid%3DApi&f=1',
    gpa: 1.1,
  },
  {
    firstName: 'Garret',
    lastName: 'Lambert',
    motto: '',
    email: 'glambert@greendalecc.edu',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KZnVVwH3ffo94L3v0fTdYwAAAA%26pid%3DApi&f=1',
    gpa: 3.8,
  },
];

export const schoolSeed: School[] = [
  {
    name: 'Bending School',
    address: '1010 Via Del Rio, Tijuana, Mexico',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aLfVE7Hb_z8K-1CR5srhCAAAAA%26pid%3DApi&f=1',
    description:
      'orem ipsum dolor sit amet, mel aliquam delicata consulatu ei. Vix debitis deseruisse at, nusquam posidonium necessitatibus ei est, ius duis legere commune eu. Stet temporibus ea est, virtute petentium disputando te cum. Graeci accusam pertinax sed ea. Eu duo persius mnesarchum dissentiet.',
  },
  {
    name: 'Greendale Community College',
    address: '6 Seasons Avenue',
    imgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._84xzw5BI9VtA7xQV_r0MwHaEx%26pid%3DApi&f=1',
    description:
      'Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Springfield Community College',
    address: '123 Fake St, Fake State 12345',
    imgUrl: 'https://i.imgur.com/lGdw4Ny.png',
    description:
      'Lorem ipsum dolor sit amet. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.',
  },
];
