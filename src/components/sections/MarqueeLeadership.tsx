'use client';
import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useAnimation } from 'motion/react';
import Link from 'next/link';
import styles from './MarqueeLeadership.module.scss';

const leaders = [
  {
    name: 'Igor',
    title: 'Chairman, Chief Executive Officer, Chairman of the Office of the CIO, Head of Research',
    image: '/igor_leader_chairman_1778669350284.png',
    slug: 'igor'
  },
  {
    name: 'Paul Griffin',
    title: 'Co-Chief Investment Officer and Chief Science Officer',
    image: '/paul_griffin_leader_1778668987914.png',
    slug: 'paul-griffin'
  },
  {
    name: 'Nitish Maini',
    title: 'Chief Strategy Officer',
    image: '/nitish_maini_leader_1778669247851.png',
    slug: 'nitish-maini'
  },
  {
    name: 'Marcus Thorne',
    title: 'Managing Director, Risk Management',
    image: '/leadership_1_ceo_1778663528218.png',
    slug: 'marcus-thorne'
  },
  {
    name: 'Sarah Chen',
    title: 'Head of Quantitative Technology',
    image: '/leadership_2_cto_1778663812483.png',
    slug: 'sarah-chen'
  },
  {
    name: 'Julian Ross',
    title: 'Head of Systematic Alpha',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1000',
    slug: 'julian-ross'
  },
  {
    name: 'Elena Kostic',
    title: 'Director of Machine Learning',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000',
    slug: 'elena-kostic'
  },
  {
    name: 'Thomas Wu',
    title: 'Head of Execution Engineering',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000',
    slug: 'thomas-wu'
  }
];

const Row = ({ leaders, direction = 1, speed = 40, onHover }: { leaders: any[], direction?: number, speed?: number, onHover: (img: string | null) => void }) => {
  const controls = useAnimation();

  const duplicatedLeaders = [...leaders, ...leaders, ...leaders, ...leaders];

  const startAnimation = () => {
    controls.start({
      x: direction > 0 ? [0, -1000] : [-1000, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: speed,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div
      className={styles.marqueeRow}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => {
        startAnimation();
        onHover(null);
      }}
    >
      <motion.div
        className={styles.rowContent}
        animate={controls}
      >
        {duplicatedLeaders.map((leader, i) => (
          <Link 
            key={`${leader.slug}-${i}`} 
            href={`/leadership/${leader.slug}`}
            className={styles.leaderItem}
            onMouseEnter={() => onHover(leader.image)}
          >
            <span className={styles.name}>{leader.name},</span>
            <span className={styles.title}>{leader.title}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeLeadership = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our leaders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creative thinkers, technically trained
        </motion.p>
      </div>

      <div className={styles.marqueeContainer}>
        <Row leaders={leaders} direction={1} speed={50} onHover={setActiveImage} />
        <Row leaders={leaders} direction={-1} speed={60} onHover={setActiveImage} />
        <Row leaders={leaders} direction={1} speed={55} onHover={setActiveImage} />
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div 
            className={styles.cursorFollower}
            style={{ 
              x: smoothX, 
              y: smoothY,
              translateX: '-50%',
              translateY: '-50%'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <img src={activeImage} alt="Leader" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MarqueeLeadership;
