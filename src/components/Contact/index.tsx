import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from "./styled";

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
              disabled
            />
          </label>

          <label>
            Assunto
            <input
              type="text"
              placeholder="Informe o assunto"
              autoComplete="off"
              {...register('subject')}
              disabled
            />
          </label>

          <label>
            Mensagem
            <input
              type="text"
              placeholder="Digite sua mensage"
              autoComplete="off"
              {...register('message')}
              disabled
            />
          </label>
        </Container>
    )
}