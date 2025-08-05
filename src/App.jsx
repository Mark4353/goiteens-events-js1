import events from "./upcoming-events.json";
import PageBoard from "./PageBoard";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard events={events} />
    </>
  );
}

export default App;