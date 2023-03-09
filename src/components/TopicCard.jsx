export default function TopicCard(props) {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p className="text">{props.text}</p>
      <p className="link">{props.link}</p>
    </div>
  );
}
