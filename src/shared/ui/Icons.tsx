
interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}

function BaseIcon ({ 
  width = 24, 
  height = 24, 
  fill = 'none', 
  stroke = 'currentColor', 
  strokeWidth = 2, 
  className = '', 
  children 
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' strokeWidth={strokeWidth} stroke={stroke} fill={fill} strokeLinecap='round' strokeLinejoin='round' className={className}>
      {children}
    </svg>
  )
}

export function AddToCartIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
      <path d='M15 6h6m-3 -3v6' />
    </BaseIcon>
  )
}

export function RemoveFromCartIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l8 .571m5.43 4.43l-.429 3h-13' />
      <path d='M17 3l4 4' />
      <path d='M21 3l-4 4' />
    </BaseIcon>
  )
}

export function ClearCartIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17a2 2 0 1 0 2 2' />
      <path d='M17 17h-11v-11' />
      <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
      <path d='M3 3l18 18' />
    </BaseIcon>
  )
}

export function CartIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l14 1l-1 7h-13' />
    </BaseIcon>
  )
}

export function ShoppingBagIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 7h-2a2 2 0 0 0 -2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2 -2v-11a2 2 0 0 0 -2 -2h-2' />
      <path d='M6 10a6 6 0 0 1 12 0' />
    </BaseIcon>
  )
}

export function WishlistIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 20l-7.5 -7.5a5 5 0 1 1 7.07 -7.07l.43 .44l.43 -.44a5 5 0 1 1 7.07 7.07l-7.5 7.5' />
    </BaseIcon>
  )
}

export function WishlistFilledIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 20l-7.5 -7.5a5 5 0 1 1 7.07 -7.07l.43 .44l.43 -.44a5 5 0 1 1 7.07 7.07l-7.5 7.5' fill='currentColor' />
    </BaseIcon>
  )
}

export function SearchIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='10' cy='10' r='7' />
      <line x1='21' y1='21' x2='15' y2='15' />
    </BaseIcon>
  )
}

export function CloseIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </BaseIcon>
  )
}

export function PreviewIcon ({ width, height, fill, stroke, strokeWidth, className }: IconProps) {
  return (
    <BaseIcon width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='12' cy='12' r='2' />
      <path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7' />
    </BaseIcon>
  )
}