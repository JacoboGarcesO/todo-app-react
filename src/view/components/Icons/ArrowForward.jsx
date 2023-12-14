export const ArrowForward = ({ size = 32, callback }) => {
  return (
    <svg onClick={callback} xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-forward-up-double' width={size} height={size} viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M11 14l4 -4l-4 -4' />
      <path d='M16 14l4 -4l-4 -4' />
      <path d='M15 10h-7a4 4 0 1 0 0 8h1' />
    </svg>
  )
}
