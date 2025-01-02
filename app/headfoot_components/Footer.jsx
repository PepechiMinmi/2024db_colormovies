export default function Footer() {
  return (
      <footer style={footerStyle}>
          <p>&copy; 2024 Color Movie Database. All rights reserved.</p>
      </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: 'auto', // 高さを自動に調整
  backgroundColor: '#88bfbf',//'#66cccc',//'#80aba9',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column', // 縦並びに設定
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};
