import "./globals.css";

import Provider from "/components/Provider";
import NavBar from "/components/Navbar";

export const metadata = {
  title: "Autinosis",
  description: "Easy autism screening for all.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <NavBar />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;