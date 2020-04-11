import Header from '../components/Header'

export default function Layout(props) {
  return (
    <div>
      <Header title={props.title} />
      {props.children}
    </div>
  )
}
