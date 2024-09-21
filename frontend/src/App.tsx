import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from "./components/Orders/Orders";
import CreateOrderForm from "./components/orderForms/CreateOrderForm/CreateOrderForm";
import ViewOrderDetailsForm from './components/orderForms/ViewOrderDetailsForm/ViewOrderDetailsForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Orders></Orders>}></Route>
        <Route path="/create-order" element={<CreateOrderForm></CreateOrderForm>}></Route>
        <Route path="/see-order-detail" element={<ViewOrderDetailsForm></ViewOrderDetailsForm>}></Route>
      </Routes>
    </Router>
  )
}

export default App;