import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "coin98",
                name: "Coin98",
                imageUrl: "https://coin98.s3.ap-southeast-1.amazonaws.com/SocialLogo/ninetyeight.png",
                aboutUrl: "https://trustwallet.com/about-us",
                bridgeUrl: "http://143.198.95.242:8080/bridge",
                // bridgeUrl: "https://bridge.tonapi.io/bridge",
                // bridgeUrl: "https://ton-bridge.coin98.tech/bridge",
                universalLink: "https://coin98.com/ton-conect",
                jsBridgeKey: "coin98",
                platforms: ["ios", "android", "chrome"]
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
      >
        <div className="app">
            <Header />
            <TxForm />
            <CreateJettonDemo />
            <TonProofDemo />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
