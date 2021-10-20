import Image from 'next/image'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/avatar.jpg" alt="profile photo" width={300} height={400} />
      </div>
      <h1>Hi, I'm Chris</h1>
      <p>
        This is my blog on web development and my learning journey into modern web frameworks like
        React.
      </p>
    </section>
  )
}

export default Hero
