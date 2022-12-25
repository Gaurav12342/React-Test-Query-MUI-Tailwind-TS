import { FC } from "react";
import Router from "./router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <div data-testid="app">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
