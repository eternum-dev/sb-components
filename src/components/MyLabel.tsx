import './myLabel.css'


interface Props {
  label: string;
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  allCaps?: boolean,
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
  fontColor?: string,
  /**
   * color personalizado para el fondo
   */
  backgroundColor?: string
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor = 'text-primary', backgroundColor = 'transparent' }: Props) => {

  return (
    <span
      className={
        `${size} 
        ${allCaps && 'allCaps'}
        ${color} `}
      style={{
        color: fontColor,
        padding: '1rem',
        backgroundColor,
        borderRadius: '.5rem'
      }}
    >
      {label}
    </span>
  )
}