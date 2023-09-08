import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

function Header() {
  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center' }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/characters">Characters</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
}

export default Header;
