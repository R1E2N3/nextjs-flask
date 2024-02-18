import "./globals.css";
import Nav from "/components/Nav";

export const metadata = {
  title: "Autinosis",
  description: "Easy autism screening for all.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;