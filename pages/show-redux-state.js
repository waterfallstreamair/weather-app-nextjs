import { useSelector } from 'react-redux'

const ShowReduxState = () => {
  const state = useSelector((state) => state)

  return (
    <>
      <pre className="text-slate-400 bg-stone-700 p-1 overflow-y-scroll">
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
    </>
  )
}

export default ShowReduxState
