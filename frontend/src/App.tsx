import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from "./components/Orders/Orders";
import CreateOrderForm from "./components/orderForms/CreateOrderForm/CreateOrderForm";
import ViewOrderDetailsForm from './components/orderForms/ViewOrderDetailsForm/ViewOrderDetailsForm';
import EditOrderForm from './components/orderForms/EditOrderForm/EditOrderForm';
import { Urls } from './types/Urls';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={Urls.HomePage} element={<Orders></Orders>}></Route>
        <Route path={Urls.CreateOrder} element={<CreateOrderForm></CreateOrderForm>}></Route>
        <Route path={`${Urls.SeeDetail}/:orderId`} element={<ViewOrderDetailsForm />} />
        <Route path={`${Urls.EditOrder}/:orderId`} element={<EditOrderForm />} />
        </Routes>
    </Router>
  )
}

export default App;