import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { persistor } from "./store";


export const App = () => {  
  return (
    <PersistGate persistor={persistor}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </Suspense>
    </PersistGate>
  );
};
