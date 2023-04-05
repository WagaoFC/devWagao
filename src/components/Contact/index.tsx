import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from "./styled";
import { BiMailSend } from 'react-icons/bi';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Informe seu nome.' })
    .max(50, { message: 'Informe seu nome.' })
    .regex(/^[a-zA-ZÀ-ÿ]+$/, {message: 'O nome deve ter somente letras.',}),
  email: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido.' }),
  subject: z
    .string()
    .min(5, { message: 'Informe o assunto.' })
    .max(50, { message: 'Informe o assunto.' }),
  message: z
    .string()
    .min(10, { message: 'Informe sua mensagem.' })
    .max(200, { message: 'Informe sua mensagem.' })
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
    const { register, watch } = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema),
    })

    const name = watch('name')
    const email = watch('email')
    const subject = watch('subject')
    const message = watch('message')
    const isSubmitDisabled = name && email && subject && message

    return (
        <Container>
          Estou trabalhando aqui 😅
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

          <button 
            type='submit'
            disabled={!isSubmitDisabled}
            title={!isSubmitDisabled ? 'Preencha todos os campos para enviar' : ''}
          >
            <BiMailSend size="25" />
            Enviar
          </button>
        </Container>
    )
}