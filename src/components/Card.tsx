type CardProps = {
  topic: string
  tags: string[]
}

type TagProps = {
  name: string
}

const Tag = (props: TagProps) => {
  const { name } = props
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {name}
    </span>
  )
}

export default function Card(props: CardProps) {
  const { topic, tags } = props
  return (
    <div className="rounded shadow-lg">
      <img
        className="w-full h-80 object-cover"
        src={`https://source.unsplash.com/random?${topic}`}
        alt={topic}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{topic}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </div>
    </div>
  )
}
