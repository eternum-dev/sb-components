import './myLabel.css'


interface Props {
  label: string;
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  allCaps?: boolean,
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
  fontColor?: string
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor = 'text-primary' }: Props) => {

  return (
    <span
      className={
        `${size} 
        ${allCaps && 'allCaps'}
        ${color} `}
      style={{ background: fontColor, padding: '1rem,  1.5rem' }}
    >
      {label}
    </span>
  )
}