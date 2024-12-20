import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Monaco" invert={invert}>
          Roc Fleuri
          <br />
          1, Rue du Tenao
          <br />
          98000 Monaco
        </Office>
      </li>
      <li>
        <Office name="China" invert={invert}>
          D-903, No.350-5 XinGangZhong Road
          <br />
          Guangzhou
          <br />
          China
        </Office>
      </li>
    </ul>
  )
}
