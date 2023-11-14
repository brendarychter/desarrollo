import { useRouter } from 'next/router';

const Contacto = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Página de Contacto</h1>
      <p>Información de contacto aquí.</p>
      <button onClick={() => router.push('/')}>Volver a Inicio</button>
    </div>
  );
};

export default Contacto;