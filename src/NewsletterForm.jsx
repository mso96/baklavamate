import React, {useState} from 'react';

export function NewsletterForm({buttonText, buttonClass, onSuccess, heading, body, privacyAction}) {
  const [feedback, setFeedback] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    setSubmitting(true);
    setFeedback(null);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Please try again.');
      setFeedback({kind: 'success', text: result.alreadySubscribed ? "You're already on the list, mate! Use this email to claim 5% off your first order." : "You're on the list, mate! Use this email to claim 5% off your first order."});
      form.reset();
      onSuccess?.();
    } catch (error) {
      setFeedback({kind: 'error', text: error.message || 'Please try again in a moment.'});
    } finally {
      setSubmitting(false);
    }
  }

  return <form onSubmit={submit}>
    {heading && <h2>{heading}</h2>}
    {body && <p>{body}</p>}
    <input name="email" required type="email" autoComplete="email" aria-label="Email address" placeholder="YOUR EMAIL ADDRESS" disabled={submitting}/>
    {privacyAction && <p className="terms">Use this email when you place your first order. We’ll confirm your 5% discount before payment and send you Baklava Mate updates. <button className="text-link" type="button" onClick={privacyAction}>Privacy information</button>.</p>}
    <button className={buttonClass} type="submit" disabled={submitting}>{submitting ? 'SIGNING YOU UP…' : buttonText}</button>
    {feedback && <p className={`newsletter-feedback ${feedback.kind}`} role={feedback.kind === 'error' ? 'alert' : 'status'} aria-live="polite">{feedback.text}</p>}
  </form>;
}
