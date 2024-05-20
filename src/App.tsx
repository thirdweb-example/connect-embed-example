import { createThirdwebClient } from "thirdweb";
import "./App.css";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";

const client = createThirdwebClient({
  // If not using Vite, then use `process.env.NEXT_PUBLIC_CLIENT_ID`
  clientId: import.meta.env.VITE_CLIENT_ID,
});
function App() {
  const account = useActiveAccount();
  return (
    <div>
      {account ? <ConnectButton client={client} /> : <ConnectEmbed client={client} />}
    </div>
  );
}

export default App;
