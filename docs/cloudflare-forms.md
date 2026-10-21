# Event enquiry integration

Live resources are provisioned for the event enquiry endpoint. The mailto fallback remains available if the API is unavailable. Newsletter remains separate and inactive; transactional Email Service must not be used for marketing campaigns.

## Provisioned resources
- D1 database `baklavamate-enquiries` (ID `a8a0a753-bdcf-45b0-a89d-222a803e7a3c`).
- Email Sending subdomain `notifications.baklavamate.com`, enabled in Cloudflare Email Service.
- Verified Email Routing destination `sefa9620@gmail.com`, with enabled rule `love@baklavamate.com` → this address.

## Binding configuration

```json
{
  "d1_databases": [{"binding":"ENQUIRIES","database_name":"baklavamate-enquiries","database_id":"a8a0a753-bdcf-45b0-a89d-222a803e7a3c","migrations_dir":"migrations"}],
  "send_email": [{"name":"EMAIL"}],
  "ratelimits": [{"name":"FORM_RATE_LIMIT","namespace_id":"1001","simple":{"limit":5,"period":60}}],
  "vars": {
    "NOTIFICATION_TO":"love@baklavamate.com",
    "NOTIFICATION_FROM":"forms@notifications.baklavamate.com"
  }
}
```

Migration `migrations/0001_enquiries.sql` is applied remotely. Build and deploy with explicit project `--config ./wrangler.jsonc`. `enabled: true` at `/api/forms-status` confirms all bindings are present. Do not mark sent as delivered to inbox; it means the email provider accepted the send.

## Tracking
Cloudflare dashboard → Workers & Pages → D1 → baklavamate-enquiries → Console:

```sql
SELECT id, created_at, payload, status, notification_status
FROM enquiries ORDER BY created_at DESC;
```

`status`: new (owner may change to replied/confirmed/closed). `notification_status`: pending/sent/failed. Review failed/pending notifications in D1 and reply manually. No automated retry has been configured. Customer receives success only after durable save. Request IDs prevent repeated clicks/network retries creating duplicate records. IP rate limits, origin validation, bounded bodies, field validation and a honeypot protect the endpoint. No enquiry data appears in application logs. There is no public list endpoint.

## Local development
Run `wrangler dev --config ./wrangler.jsonc --port 8787` alongside Vite (4173); Vite proxies `/api`. Without bindings the status endpoint returns disabled and the email-draft fallback stays available. Mocked tests do not send real email.

## Privacy / retention
The privacy notice describes direct form storage when the send option is enabled. Retention is manual until a business retention period is agreed; do not silently retain data indefinitely. D1 access is restricted to the Cloudflare account. Use IDs for support, do not paste personal payloads into logs/issues.
