interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children?: any
}

const useHeading = ({ level }: { level: HeadingProps['level'] }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const HEADING_DEFINITION = {
    1: 'font-bold text-5xl lg:text-7xl tracking-tighter',
    2: 'font-bold text-4xl lg:text-6xl tracking-tighter',
    3: 'font-bold text-3xl lg:text-5xl tracking-tighter',
    4: 'font-bold text-2xl lg:text-4xl tracking-tighter',
    5: 'font-bold text-xl lg:text-3xl tracking-tighter',
    6: 'font-bold text-lg lg:text-xl tracking-tighter'
  }[level]


  return { Tag, HEADING_DEFINITION }
}

const Heading = ({ level, className, children, ...props }: HeadingProps) => {
  const { Tag, HEADING_DEFINITION } = useHeading({
    level
  })

  return (
    <>
      {/* @ts-ignore */}
      <Tag
        className={`${HEADING_DEFINITION} ${className ? className : ''}`}
        {...props}
      >
        {children}
      </Tag>
    </>
  )
}

export default Heading
