import type { NextPage } from 'next'
import { Container, Heading, Text, Button, Flex , Image} from '@chakra-ui/react'
import NextLink from "next/link"
import { Link } from '@chakra-ui/react'

const Home: NextPage = () => {
  const mockSlug = `marco-verratti-2021-unique-1,aaron-long-2021-limited-283,jerome-roussillon-2021-rare-10,marco-verratti-2021-rare-1`;
  return (
    <Container w="100%" maxW="100%" margin="0" minH="100vh" background="#101010" display="flex"
    flexDirection="column" alignItems="center" justifyContent="center">
      <Flex flexDirection="column" maxW="375px" textAlign="center" color="white" alignItems="center">
        <Image src='https://sorare.com/assets/pack.143c6d88.png' alt='Placeholder Card Pack' w="176px" mb="40px"/>
        <Heading fontSize={["16px", "18px" ]} lineHeight="26px" letterSpacing=" -0.01em" fontWeight="700">
          You have unlocked your first Sorare cards!
        </Heading>
        <Text fontSize={["12px", "14px" ]}lineHeight="24px" fontWeight="400" mb="20px">You can use these cards to set your first lineup</Text>
        <NextLink href={`/cards/${mockSlug}`} passHref>
          <Button colorScheme='blue' size='lg' fontSize="15px" h="40px" padding="0px 16px" w="fit-content">Open Pack</Button>
        </NextLink>

        <Text mt="40px" fontSize={["12px", "14px" ]}lineHeight="24px" fontWeight="400" mb="20px">
          Made with ♥️ by <Link href="https://www.robneal.me/" target="_blank">Robert Neal</Link>
        </Text>
      </Flex>
     
    </Container>
  )
}

export default Home
