/* eslint-disable no-unused-vars */
import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAplha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a front-end developer from Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Immanuel Williams Irsal
          </Heading>
          <p>Frontend Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAplha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/william-2.jpg"
            alt="profile picture"
          />
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          William is a frontend developer based in Jakarta. He recently
          graduated from Universitas Kristen Satya Wacana, in a small town in
          Central Java called Salatiga. He is currently working on a project
          called{' '}
          <Link href="https://metrodataacademy.id/" target="_blank">
            Metrodata Academy
          </Link>{' '}
          under PT. Mitra Integrasi Informatika, Tbk.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />}>My Works</Button>
          </NextLink>
        </Box> */}
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Brisbane, Australia.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Graduated High School.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed Bachelor&apos;s Degree in Informatics Engineering at
          Universitas Kristen Satya Wacana, Salatiga.
        </BioSection>
        <BioSection>
          <BioYear>2021 to Now</BioYear>
          Working at PT. Mitra Integrasi Informatika, Tbk.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
