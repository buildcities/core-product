import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader'
import { motion, AnimateSharedLayout } from 'framer-motion'

type BaseLayoutProps = {
  children?: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

const BaseLayout = ({
  children,
  metaTitle,
  metaDescription,
}: BaseLayoutProps) => {
  return (
    <AnimateSharedLayout>
      <div className="w-full">
        <MetaTags description={metaDescription} title={metaTitle} />
        <LayoutHeader />
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.7,
            delay: 0.4,
          }}
        >
          {children}
        </motion.section>
      </div>
    </AnimateSharedLayout>
  )
}

export default BaseLayout
