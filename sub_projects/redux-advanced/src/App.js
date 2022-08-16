import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShowModal = useSelector(state=> state.ui.isShowModal);
  return (
    <Layout>
      {isShowModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
