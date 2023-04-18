import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import { Container } from "./styled"
import { BiMailSend } from 'react-icons/bi'

const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty('É obrigatório informar seu nome.'),
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
    const [loader, setLoader] = useState(false)
    const [countText, setCountText] = useState('')

    const { register, watch, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema),
    })

    const name = watch('name')
    const email = watch('email')
    const subject = watch('subject')
    const message = watch('message')
    const isSubmitDisabled = name && email && subject && message
    
    function sendForm (data: ContactFormData) {
      const msg = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        subject: data.subject,
      }

      emailjs.send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        msg,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then((response: EmailJSResponseStatus) => {
        console.log('Email enviado com sucesso!', response.status, response.text)
        setLoader(false)
        reset()
      }, (error) => {
          console.error('Ocorreu um erro ao enviar o email:', error)
          setLoader(false)
        }
      )
    }

    function handleTextareaChange(event: any) {
      const value = event.target.value
      
      setValue('message', value)
      setCountText(event.target.value)
    }

    return (
        <Container onSubmit={handleSubmit(sendForm)}>
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
              onChange={handleTextareaChange}
            />
            <p>{countText.length}/200</p>
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
            onClick={() => setLoader(true)}
            disabled={!isSubmitDisabled}
            title={!isSubmitDisabled ? 'Preencha todos os campos para enviar' : ''}
          >
          {loader ? 
            <div>
              <span className="loader" />
              Aguarde
            </div>
            :
            <div>
              <BiMailSend size="25" />
              Enviar
            </div>
          }
          </button>
        </Container>
    )
}