import { useState, useEffect } from 'preact/hooks';
import { themeChange } from 'theme-change';

export function ThemeToggler() {
  const [theme, setTheme] = useState('coffee');

  useEffect(() => {
    themeChange(false)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'coffee' ? 'caramellatte' : 'coffee')
  }

  return (
    <input type="checkbox"
      onClick={toggleTheme}
      checked={theme === 'caramellatte'}
      className="toggle"
      data-toggle-theme="coffee,caramellatte"
      data-act-class="ACTIVECLASS"
    />
  )

}
