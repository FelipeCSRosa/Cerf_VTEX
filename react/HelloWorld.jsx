const HelloWorld = (props) => {
  const {title} = props;
  return (
    <div className="hello-world">{title}</div>
  )
}

HelloWorld.defaultProps = {
  "title": "Teste"
}

HelloWorld.schema = {
  title: 'Hello World',
  description: 'Componente de Hello World',
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'Titulo'
    }
  }
}

export default HelloWorld