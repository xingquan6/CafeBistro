import { type FormEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'
import { business } from '../data/business'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { useLanguage } from '../i18n/LanguageContext'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [contactMethodMissing, setContactMethodMissing] = useState(false)
  const { t } = useLanguage()

  function clearContactMethodError() {
    if (contactMethodMissing) setContactMethodMissing(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    const formData = new FormData(form)
    const phone = (formData.get('phone') as string).trim()
    const email = (formData.get('email') as string).trim()

    if (!phone && !email) {
      setContactMethodMissing(true)
      return
    }
    setContactMethodMissing(false)

    if (!ACCESS_KEY) {
      // No key configured yet (see .env.example) — fail gracefully instead
      // of sending a doomed request.
      setStatus('error')
      return
    }

    setStatus('sending')
    const payload = {
      access_key: ACCESS_KEY,
      subject: `New message from the ${business.name} website`,
      name: formData.get('name'),
      company: formData.get('company'),
      phone,
      email,
      message: formData.get('message'),
    }

    try {
      // Web3Forms' fetch-based flow requires an explicit JSON content type —
      // posting as FormData with no headers gets rejected without CORS
      // headers on their end, which surfaces as an opaque browser CORS error.
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        toast.success(
          <div>
            <strong>{t.pages.contact.thanksTitle}</strong>
            <div>{t.pages.contact.thanksBody}</div>
          </div>,
        )
        form.reset()
        setStatus('idle')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-20">
      <SectionHeading eyebrow={t.pages.contact.sendNoteEyebrow} title={t.pages.contact.sendNoteTitle} align="left" />

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formName}</Form.Label>
          <Form.Control name="name" required type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="company">
          <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formCompany}</Form.Label>
          <Form.Control name="company" type="text" />
        </Form.Group>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formEmail}</Form.Label>
            <Form.Control name="email" type="email" isInvalid={contactMethodMissing} onChange={clearContactMethodError} />
            <Form.Control.Feedback type="invalid">{t.pages.contact.contactMethodRequired}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formPhone}</Form.Label>
            <Form.Control name="phone" type="tel" isInvalid={contactMethodMissing} onChange={clearContactMethodError} />
          </Form.Group>
        </div>
        <Form.Group className="mb-4" controlId="message">
          <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formMessage}</Form.Label>
          <Form.Control name="message" required as="textarea" rows={5} />
        </Form.Group>

        {status === 'error' && (
          <p className="mb-3 text-sm text-rust">
            {t.pages.contact.errorBody}{' '}
            <a href={`mailto:${business.email}`} className="text-rust hover:underline">{business.email}</a>.
          </p>
        )}

        <Button type="submit">
          {status === 'sending' ? t.pages.contact.sending : t.buttons.sendMessage}
        </Button>
      </Form>
    </section>
  )
}
