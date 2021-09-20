import CustomImage from '../elements/image'

const FeatureColumnsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12 align-top lg:flex-row lg:flex-wrap">
      {data.features.map((feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <CustomImage media={feature?.icon} className="w-10" />
          <h3 className="mt-4 mb-4 font-bold">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureColumnsGroup
