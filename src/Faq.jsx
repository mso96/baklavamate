import {contactEmail} from './content';

const email=<a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
const sections=[
  {
    label:'THE GOOD STUFF',
    title:'POPULAR QUESTIONS.',
    items:[
      ['What baklava can I choose from?',<>Our event tray menu includes classic pistachio, clotted cream şöbiyet, clotted cream midye, special baklava, pistachio cold baklava and cocoa cold baklava. <a href="/#baklava">Explore the trays</a> for the current slice counts and prices.</>],
      ['Is your baklava prepared fresh?',<>Yes. Our ingredients come from Türkiye, and Turkish baklava masters prepare and bake our baklava fresh for events. We confirm the preparation and handover arrangements when we reply to your enquiry.</>],
      ['Are your products nut-free?',<>Please do not assume any baklava is nut-free or suitable for a particular allergy. Contact us before ordering for the current ingredient, allergen and cross-contact information for your chosen tray. You can also read our <a href="/allergens">allergen information</a>.</>],
      ['Can I get nutritional information?',<>Please email {email} with the exact tray you’re interested in. We’ll check what current information is available rather than give you figures for a different recipe.</>],
      ['How should I store my baklava?',<>Storage depends on the variety, especially for chilled cold baklava and kaymak-style fillings. Ask us for the instructions for your chosen tray when we confirm your order; please follow those instructions rather than a general storage rule.</>],
    ],
  },
  {
    label:'THE PRACTICAL BITS',
    title:'ORDERS & DELIVERY.',
    items:[
      ['How do I place an order?',<>Choose a tray and send us an <a href="/events">event enquiry</a> with your date, guest count and preferred quantity. We’ll reply to confirm availability, the final details and how to arrange payment. Adding a tray to your enquiry basket does not place an order.</>],
      ['Do I need to order in advance?',<>Please enquire as early as you can, especially for a particular event date or several trays. We’ll tell you what we can prepare when we reply; availability is confirmed individually.</>],
      ['Do you deliver across the UK?',<>Yes, we arrange delivery across the UK for confirmed event orders. Send us your location and event date so we can confirm the timing and any charge. Collection arrangements can also be discussed.</>],
      ['Can I pay on the website?',<>Not yet. There is no online checkout, and the website does not collect card details. We’ll discuss payment after confirming your enquiry.</>],
      ['Can I change or cancel my enquiry?',<>Yes, email {email} as soon as possible with your name and event details. If your order has already been confirmed, we’ll tell you what changes are still possible.</>],
      ['How does the first-order 5% offer work?',<>Sign up for Baklava Mate updates, then use the same email address when you enquire about your first order. We’ll check your registration and confirm the 5% discount before payment. It is not an automatic checkout code.</>],
    ],
  },
  {
    label:'MORE MATES, MORE BAKLAVA',
    title:'EVENTS & EXTRAS.',
    items:[
      ['Can you prepare baklava for a wedding, office or large group?',<>That’s what our event trays are for. Tell us the occasion, date, number of guests, approximate number of trays and your preferred baklava through the <a href="/events">event form</a>. We’ll reply to discuss quantities and arrangements.</>],
      ['Can I mix different trays?',<>You can tell us which varieties you have in mind. We’ll confirm the available selection and quantities for your event when we respond.</>],
      ['Can I include a gift message or make a special request?',<>Add your request to the event form or email {email}. We’ll let you know what we can accommodate before your order is confirmed.</>],
      ['Can you send trays to more than one address?',<>Please send the addresses and quantities in your enquiry. We’ll discuss each delivery with you; the website does not have a multi-address checkout.</>],
      ['Do you work with businesses or other brands?',<>For workplace events, partnerships or larger supply requests, email {email} with what you have in mind. We’ll reply to discuss what’s possible.</>],
      ['What merchandise do you have?',<>At the moment, our <a href="/products/nazar-keyring">nazar keyring</a> is listed at £5.99 each. It is sold individually. Ask us about availability and delivery arrangements before ordering.</>],
    ],
  },
];

export function Faq(){return <div className="faq-page"><p className="faq-intro">Everything you need to know before bringing baklava to the table. Still have a question? Write to {email}.</p>{sections.map(section=><section className="faq-section" key={section.title}><div className="faq-section-heading"><span className="eyebrow">{section.label}</span><h2>{section.title}</h2></div><div className="faq-list">{section.items.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div></section>)}<div className="faq-contact"><span className="eyebrow">STILL WONDERING?</span><h2>ASK YOUR MATE.</h2><p>Tell us what you’re planning and we’ll help you find the right tray.</p><a className="pill" href={`mailto:${contactEmail}?subject=Baklava%20Mate%20question`}>EMAIL US</a></div></div>}
