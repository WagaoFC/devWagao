import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from "./styled";
import { BiMailSend } from 'react-icons/bi';

export function Contact() {
    const { register } = useForm()

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