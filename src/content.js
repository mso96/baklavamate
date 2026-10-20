// Confirmed brand facts. Keep commercial details unset until supplied.
export const brand = {
  name: 'BAKLAVA MATE',
  location: 'London, UK',
  title: 'Baklava Mate | Baklava in London',
  description: 'Meet Baklava Mate. A London-based baklava brand, with a selection of baklava in 1 kg and 2 kg boxes.',
  sizes: ['1 kg', '2 kg'],
};
export const copy = {
  navigation: ['SHOP', 'OUR BAKLAVA', 'ABOUT'],
  hero: [
    { title: 'SWEET. FLAKY.\nHELLO, MATE.', body: 'BAKLAVA MATE. BASED IN LONDON.', detail: '' },
    { title: 'A LITTLE TREAT.\nA LOT TO SHARE.', body: 'GOOD COMPANY.\nGREAT BAKLAVA.', detail: 'FIND YOUR FAVOURITE BAKLAVA.' },
  ],
  productsHeading: 'FIND YOUR FAVOURITE',
  editorialHeading: 'THE SWEET SIDE',
  editorial: [
    { title: 'MEET BAKLAVA MATE', button: 'OUR STORY', body: 'A London-based baklava brand. A little sweetness, a lot to share.' },
    { title: 'YOUR KIND OF BAKLAVA', button: 'EXPLORE', body: 'Discover our baklava selection and find your favourite.' },
    { title: '1 KG OR 2 KG', button: 'PICK YOUR BOX', body: 'Two sizes. Choose 1 kg for the table or 2 kg for more mates.' },
    { title: 'BASED IN LONDON', button: 'MEET YOUR MATE', body: 'Baklava Mate calls London home.' },
  ],
  newsletter: { title: 'A LITTLE SWEETNESS IN YOUR INBOX', body: 'BAKLAVA NEWS, NEW FLAVOURS & UPDATES.', button: 'KEEP ME POSTED' },
};
export const products = [
  { id: 'pistachio', name: 'PISTACHIO BAKLAVA', pricePerKg: 30, description: 'Golden layers, a pistachio centre. Meet the classic.' },
  { id: 'walnut', name: 'WALNUT BAKLAVA', pricePerKg: 28, description: 'Flaky pastry with a rich walnut filling.' },
  { id: 'cold', name: 'COLD BAKLAVA', pricePerKg: 30, description: 'A milk-soaked favourite with a cocoa finish.' },
  { id: 'roll', name: 'PISTACHIO SARMA', pricePerKg: 30, description: 'Pistachio-filled rolls for your sweet moment.' },
  { id: 'sobiyet', name: 'ŞÖBİYET', pricePerKg: 30, description: 'Folded pastry with pistachio and a creamy centre.' },
];
export const priceFor = (product, grams) => product.pricePerKg * grams / 1000;

export const merch = [
 {id:'nazar-keyring',name:'NAZAR KEYRING',price:5.99,image:'/assets/merch-keyring-cutout.png'},
];
export const contactEmail='love@baklavamate.com';
