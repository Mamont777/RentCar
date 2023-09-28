import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../shared/hooks';

function Switcher() {
  const [colorTheme, setTheme] = useTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleTheme = checked => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };

  return (
    <DarkModeSwitch
      checked={darkTheme}
      onChange={toggleTheme}
      size={26}
      moonColor="#fbbf24"
      sunColor="#fbbf24"
    />
  );
}

export default Switcher;
