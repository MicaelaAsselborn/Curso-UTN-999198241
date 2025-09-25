import { useParams, useSearchParams } from 'react-router-dom';

export default function UserProfile() {
  const { userId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  console.log('searchParams', Array.from(searchParams.entries()));
  const query = searchParams.get('q');
  const category = searchParams.get('category');

  console.log('query', query);
  console.log('category', category);

  console.log('userId', userId);
  return (
    <div>
      {userId === undefined ? (
        <h1>Mi Perfil</h1>
      ) : (
        <h1>Perfil del Usuario {userId}</h1>
      )}

      {/* Lógica para mostrar datos del usuario */}
    </div>
  );
}
