import bgVideo from './assets/earth-bg.mp4'

const App = () => {
  return (
    <div>
    <div className='h-[700px] relative'>
      <video
      autoPlay
      loop
      muted 
      className='fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]'
      >
        <source src={bgVideo} type='video/mp4' />
      </video>
    </div>
    </div>
  )
}

export default App
