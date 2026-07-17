import { type FormEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { business } from '../data/business'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import HERO_IMAGE from '../assets/images/hero-contact.jpg'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Hero
        height="half"
        image={HERO_IMAGE}
        eyebrow={t.pages.contact.heroEyebrow}
        title={t.pages.contact.heroTitle}
        subtitle={t.pages.contact.heroSubtitle}
      />

      <section className="mx-auto max-w-xl px-6 py-20">
        <SectionHeading eyebrow={t.pages.contact.sendNoteEyebrow} title={t.pages.contact.sendNoteTitle} align="left" />
        {submitted ? (
          <div className="rounded-2xl bg-sage/15 p-6 text-espresso">
            <p className="font-semibold">{t.pages.contact.thanksTitle}</p>
            <p className="mt-2 text-sm text-espresso-light">
              {t.pages.contact.thanksBody}{' '}
              <a href={`mailto:${business.email}`} className="text-rust hover:underline">{business.email}</a>.
            </p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formName}</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formEmail}</Form.Label>
              <Form.Control required type="email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="message">
              <Form.Label className="fw-semibold text-espresso">{t.pages.contact.formMessage}</Form.Label>
              <Form.Control required as="textarea" rows={5} />
            </Form.Group>
            <Button type="submit">{t.buttons.sendMessage}</Button>
          </Form>
        )}
      </section>
    </>
  )
}
