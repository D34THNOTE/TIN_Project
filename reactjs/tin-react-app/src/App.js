import React from "react";
import Header from "./components/fragments/header";
import Navigation from "./components/fragments/navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/footer";
import ProductModelList from "./components/productModel/ProductModelList";
import ProductModelDetails from "./components/productModel/ProductModelDetails";
import ProductModelForm from "./components/productModel/ProductModelForm";
import OrderList from "./components/order/OrderList";
import OrderForm from "./components/order/OrderForm";
import OrderDetails from "./components/order/OrderDetails";
import OrderedProductsList from "./components/orderedProducts/OrderedProductsList";
import OrderedProductsDetails from "./components/orderedProducts/OrderedProductsDetails";
import OrderedProductsForm from "./components/orderedProducts/OrderedProductsForm";
import LoginForm from "./components/other/LoginForm";

import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom"


function handleLogin(user) {
    localStorage.setItem("user", user)
}

function handleLogout(user) {
    localStorage.removeItem("user")

    return (
        <Navigate to="/"  />
    )
}


function App() {
  return ( // "return" has to return one component, so we pack things in a "div"
      <Router>
          <div>
            <Header />
            <Navigation handleLogout={handleLogout} />
            <Routes>
                <Route exact path="/login"  render={(props) => (<LoginForm />)} element={<LoginForm handleLogin={handleLogin} />} />

                <Route exact path="/" element={<MainContent />} />
                <Route exact path="/ProductModel" element={<ProductModelList />} />
                <Route exact path="/ProductModel/details/:IDproduct" element={< ProductModelDetails />  } />
                <Route exact path="/ProductModel/add" element={< ProductModelForm />  } />
                <Route exact path="/ProductModel/edit/:IDproduct" element={< ProductModelForm />  } />

                <Route exact path="/Order" element={<OrderList />} />
                <Route exact path="/Order/add" element={<OrderForm />} />
                <Route exact path="/Order/edit/:IDorder" element={<OrderForm />} />
                <Route exact path="/Order/details/:IDorder" element={<OrderDetails />} />

                <Route exact path="/OrderedProducts" element={<OrderedProductsList />} />
                <Route exact path="/OrderedProducts/add" element={<OrderedProductsForm />} />
                <Route exact path="/OrderedProducts/edit/:IDordered" element={<OrderedProductsForm />} />
                <Route exact path="/OrderedProducts/details/:IDordered" element={< OrderedProductsDetails />  } />
            </Routes>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
