# NovaPulse Analytics — API Documentation

## POST /api/contact

Submit a contact form enquiry.

### Request Body

```json
{
  "name": "string (required, max 200)",
  "email": "string (required, valid email)",
  "department": "string (required, max 100)",
  "message": "string (required, 10–5000 chars)",
  "teamSize": "string (optional)",
  "newsletterOptIn": "boolean (optional, default false)",
  "termsAccepted": "boolean (required, must be true)"
}
```

### Responses

**200 OK** — Success
```json
{ "success": true, "message": "Message sent successfully. We'll get back to you soon." }
```

**400 Bad Request** — Validation error
```json
{
  "success": false,
  "message": "Please check your input.",
  "errors": {
    "name": "Name is required",
    "email": "Invalid email address"
  }
}
```

**429 Too Many Requests** — Rate limited (5 requests/minute per IP)
```json
{ "success": false, "message": "Too many requests. Please try again later." }
```

**500 Internal Server Error**
```json
{ "success": false, "message": "Something went wrong. Please try again." }
```

### Rate Limit Headers

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Max requests per window (5) |
| `X-RateLimit-Remaining` | Remaining requests |
| `Retry-After` | Seconds until reset (on 429) |

### Curl Example

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "department": "Engineering",
    "message": "I would like to learn more about your analytics platform.",
    "teamSize": "10-50",
    "newsletterOptIn": true,
    "termsAccepted": true
  }'
```

---

## POST /api/newsletter

Subscribe an email to the newsletter.

### Request Body

```json
{
  "email": "string (required, valid email)"
}
```

### Responses

**200 OK** — Success
```json
{ "success": true, "message": "Successfully subscribed to the newsletter." }
```

**400 Bad Request** — Validation error
```json
{
  "success": false,
  "message": "Please check your input.",
  "errors": { "email": "Invalid email address" }
}
```

**429 Too Many Requests** — Rate limited (5 requests/minute per IP)
```json
{ "success": false, "message": "Too many requests. Please try again later." }
```

**500 Internal Server Error**
```json
{ "success": false, "message": "Something went wrong. Please try again." }
```

### Curl Example

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "jane@example.com"}'
```

---

## Once UI Integration Notes

All API responses follow a consistent shape for use with Once UI's `<Feedback>` component:

- `success: boolean` — controls success/error display
- `message: string` — user-facing feedback text
- `errors: Record<string, string>` (optional) — per-field validation messages, keyed by field name

Frontend forms should POST JSON and display the response `message` in a Feedback component. Use the `errors` object to show inline validation on individual form fields.
