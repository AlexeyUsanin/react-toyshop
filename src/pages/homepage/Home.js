import { Categories } from '../categories';
import { Welcome } from '../welcomePage';

export const Home = ({user}) => (
  user ? <Categories user={user} /> : <Welcome />
)
