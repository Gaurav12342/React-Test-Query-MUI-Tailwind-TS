import { FC } from "react";
import Router from "./router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <div data-testid="app">
      <QueryClientProvider contextSharing={true} client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
};

export default App;
