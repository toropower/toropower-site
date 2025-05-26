// app/layout.jsx
export const metadata = {
  title: 'Toro Power',
  description: 'AI-powered data modernization for industrial operations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
