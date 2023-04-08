import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import sgMail from '@sendgrid/mail'
import { Container } from "./styled"
import { BiMailSend } from 'react-icons/bi'

sgMail.setApiKey(import.meta.env.VITE_API_KEY)

const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty('É obrigatório informar seu nome.')
    .regex(/^[a-zA-ZÀ-ÿ]+$/, {message: 'O nome deve ter somente letras.',}),
  email: z
    .string()
    .nonempty('É obrigatório informar seu e-mail.')
    .email({ message: 'Por favor, insira um e-mail válido.' }),
  subject: z
    .string()
    .nonempty('É obrigatório informar qual o assunto.')
    .min(1, { message: 'Informe um assunto válido.' })
    .max(50, { message: 'Informe um assunto válido.' }),
  message: z
    .string()
    .nonempty('É obrigatório informar sua mensagem.')
    .min(5, { message: 'Informe pelo menos 5 caracteres.' })
    .max(200, { message: 'São permitidos somente 200 caracteres.' })
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema),
    })

    const name = watch('name')
    const email = watch('email')
    const subject = watch('subject')
    const message = watch('message')
    const isSubmitDisabled = name && email && subject && message

    function sendForm (data: ContactFormData) {

      const msg = {
        to: 'wagnerferreira_07@hotmail.com',
        from: data.email,
        subject: data.subject,
        text: data.message,
        html: data.name,
      }

      sgMail.send(msg)
        .then(() => {
          console.log('E-mail enviado com sucesso!');
        })
        .catch((error) => {
          console.error(error);
        })
    }

    return (
        <Container onSubmit={handleSubmit(sendForm)}>
          Estou trabalhando aqui 😅
          <label>
            Nome
            <input
              type="text"
              placeholder="Informe seu nome"
              autoComplete="off"
              {...register('name')}
            />
            {errors.name && 
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <span>{errors.name.message}</span>
              </ motion.div>
            }
          </label>

          <label>
            E-mail
            <input
              type="text"
              placeholder="Informe seu e-mail"
              autoComplete="off"
              {...register('email')}
            />
            {errors.email && 
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <span>{errors.email.message}</span>
              </ motion.div>
            }
          </label>

          <label>
            Assunto
            <input
              type="text"
              placeholder="Informe o assunto"
              autoComplete="off"
              {...register('subject')}
            />
            {errors.subject && 
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <span>{errors.subject.message}</span>
              </ motion.div>
            }
          </label>

          <label>
            Mensagem
            <textarea
              placeholder="Digite sua mensage"
              autoComplete="off"
              {...register('message')}
            />
            {errors.message && 
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <span>{errors.message.message}</span>
              </ motion.div>
            }
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