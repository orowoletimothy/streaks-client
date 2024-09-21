import clsx from "clsx"

type Props = {
  text?: string;
  className?: string;
}

const Divider = ({ text, className = ''}: Props) => {
  return (
    <div className={clsx('flex items-center', className)}>
      <div className="flex-grow border-t border-gray-300"></div>
      {text && (
        <span className="flex-shrink mx-4 text-gray-600">
          {text}
        </span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  )
}

export default Divider