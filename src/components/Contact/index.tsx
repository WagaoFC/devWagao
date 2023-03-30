import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from "./styled";
import { BiMailSend } from 'react-icons/bi';

const contactFormSchema = z.object({
  name: z
    .string()
    .max(50, { message: 'Informe seu nome.' })
    .regex(/^[a-zA-ZÀ-ÿ]+$/, {message: 'O nome deve ter somente letras.',}),
  email: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido.' }),
  subject: z
    .string()
    .max(50, { message: 'Informe o assunto.' }),
  message: z
    .string()
    .max(200, { message: 'Informe sua mensagem.' })
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
    const { register } = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema),
    })

    return (
        <Container>
          <label>
            Nome
            <input
              type="text"
              placeholder="Informe seu nome"
              autoComplete="off"
              {...register('name')}
            />
          </label>

          <label>
            E-mail
            <input
              type="text"
              placeholder="Informe seu e-mail"
              autoComplete="off"
              {...register('email')}
            />
          </label>

          <label>
            Assunto
            <input
              type="text"
              placeholder="Informe o assunto"
              autoComplete="off"
              {...register('subject')}
            />
          </label>

          <label>
            Mensagem
            <textarea
              placeholder="Digite sua mensage"
              autoComplete="off"
              {...register('message')}
            />
          </label>

          <button type='submit'>
            <BiMailSend size="25" />
            Enviar
          </button>
        </Container>
    )
}