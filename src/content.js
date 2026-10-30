// Confirmed brand facts. Keep commercial details unset until supplied.
export const brand = {
  name: 'BAKLAVA MATE',
  location: 'London, UK',
  title: 'Baklava Mate | Baklava in London',
  description: 'Meet Baklava Mate. Fresh Turkish baklava arranged in generous trays for events and gatherings across the UK.',
  sizes: [],
};
export const copy = {
  navigation: ['SHOP', 'OUR BAKLAVA', 'ABOUT'],
  hero: [
    { title: 'SWEET. FLAKY.\nHELLO, MATE.', body: 'DELIVERY ACROSS THE UK', detail: '' },
    { title: 'A LITTLE TREAT.\nA LOT TO SHARE.', body: 'DELIVERY ACROSS THE UK', detail: 'FIND YOUR FAVOURITE BAKLAVA.' },
  ],
  productsHeading: 'FIND YOUR FAVOURITE',
  editorialHeading: 'THE SWEET SIDE',
  editorial: [
    { title: 'MEET BAKLAVA MATE', button: 'OUR STORY', body: 'A London-based baklava brand. A little sweetness, a lot to share.' },
    { title: 'YOUR KIND OF BAKLAVA', button: 'EXPLORE', body: 'Discover our baklava selection and find your favourite.' },
    { title: 'TRAYS FOR THE TABLE', button: 'PLAN YOUR EVENT', body: 'Generous trays, counted by slice and made for sharing.' },
    { title: '5% OFF YOUR FIRST ORDER', button: 'SIGN UP', body: 'Join the list for a little extra sweetness.' },
  ],
  newsletter: { title: '5% OFF YOUR FIRST ORDER', body: 'A LITTLE SWEETNESS IN YOUR INBOX. BAKLAVA NEWS, NEW FLAVOURS & UPDATES.', button: 'CLAIM MY 5%' },
};
export const products = [
  { id: 'pistachio', name: 'CLASSIC PISTACHIO BAKLAVA', slices: '86 slices', tray: 'Large rectangular tray', price: 90, image:'/assets/tray-rectangular-straight.png', description: 'Our classic Antep pistachio baklava, arranged fresh in a generous event tray.' },
  { id: 'sobiyet', name: 'CLOTTED CREAM ŞÖBİYET', slices: '34 slices', tray: 'Round tray', price: 70, image:'/assets/tray-sobiyet-real-clean-transparent.png', description: 'Folded pistachio şöbiyet with a rich kaymak-style centre, made for sharing.' },
  { id: 'mussel', name: 'CLOTTED CREAM MIDYE', slices: '68–72 pieces', tray: 'Round tray', price: 70, image:'/assets/tray-mussel-real-clean-transparent.png', description: 'Shell-shaped midye baklava with a creamy kaymak-style filling.' },
  { id: 'special', name: 'SPECIAL BAKLAVA', slices: '96 slices', tray: 'Large rectangular tray', price: 70, image:'/assets/tray-rectangular-straight.png', description: 'A generous special baklava tray for a full table and plenty of mates.' },
  { id: 'cold', name: 'PISTACHIO COLD BAKLAVA', slices: '84 slices', tray: 'Large rectangular tray', price: 120, image:'/assets/tray-pistachio-cold-landscape.png', description: 'Chilled, creamy cold baklava prepared fresh for celebrations and events.' },
  { id: 'cold-cocoa', name: 'COCOA COLD BAKLAVA', slices: '84 slices', tray: 'Large rectangular tray', price: 120, image:'/assets/tray-cocoa-cold-complete.png', description: 'Chilled cocoa cold baklava with creamy layers and pistachio, prepared fresh for celebrations and events.' },
];
export const priceFor = product => product.price;

export const merch = [
 {id:'nazar-keyring',name:'NAZAR KEYRING',price:5.99,image:'/assets/merch-keyring-cutout.png'},
];
export const contactEmail='love@baklavamate.com';
