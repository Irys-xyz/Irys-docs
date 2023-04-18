interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children?: any
}

const useHeading = ({ level }: { level: HeadingProps['level'] }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const HEADING_DEFINITION = {
    1: 'text-5xl lg:text-7xl',
    2: 'text-4xl lg:text-6xl',
    3: 'text-3xl lg:text-5xl',
    4: 'text-2xl lg:text-4xl',
    5: 'text-xl lg:text-3xl',
    6: 'text-lg lg:text-xl'
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
