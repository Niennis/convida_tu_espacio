const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 m-4 rounded hover:cursor-pointer transition-colors">
      {text}
    </button>
  )
}

export default Button
