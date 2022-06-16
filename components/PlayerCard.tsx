import { Box, Flex, Text, Image, Heading, Skeleton} from "@chakra-ui/react";


export type Card = {
    name: string;
    age: number;
    position: string;
    rarity: string;
    createdAt: string;
    shirtNumber: number;
    slug: string;
    season: {
        name: string
    }
    player: {
        pictureUrl: string;
        firstName: string;
        lastName: string;
        activeClub: {
            pictureUrl: string;
        }
    };
} | null;

export type PlayerCardProps = { data? : Card, loading?: boolean }

const PlayerCard: React.FunctionComponent<PlayerCardProps> = ({data, loading }) => {
    const placeHolderImage = `https://sorare.com/assets/common-reward.0dcbd382.png`; 
    // if(loading) return <h1>Reveal animation...</h1>
    return (
        <Box as="article" display="flex" minH="290px" minW="180px" w="180px" flexDirection="column"
            p="0px" borderRadius="13px"  justifyContent="space-between" 
            color="black" background="white" 
            position="relative" overflow="hidden"
            backgroundImage="/pattern.svg"
            backgroundSize="contain"
            backgroundRepeat="repeat"
        >
        {data? 
            <>
                <Flex p="10px" justifyContent="space-between" alignItems="center"> 
                    <Flex flexDirection="column">
                        <Text textTransform="uppercase" fontSize="8px" opacity="0.5">{data.season.name}</Text>
                        <Text textTransform="uppercase" fontSize="9px" fontWeight="bold">{data.rarity}</Text>
                    </Flex>

                    <Flex flexDirection="column" position="relative" alignItems="center">
                        
                        <Image w="15px" src={data.player?.activeClub?.pictureUrl} alt="image of players club's logo" />
                        <Text position="absolute" top="20px" fontWeight="bold" fontSize="10px">{data.shirtNumber}</Text>
                    </Flex>
                </Flex>

                <Image top="15px" zIndex="9" position="absolute" paddingX="5px" 
                    src={data.player?.pictureUrl} alt={`${data.player?.firstName} ${data.player?.lastName} `} />

                <Flex flexDirection="column" zIndex="10" 
                    bgGradient='linear(transparent 0%, #ffffff 20%, #c6d5d9 70%)'
                >
                    <Heading textAlign="center" fontSize="20px" mb="0px">{data.player?.firstName}</Heading>
                    <Heading textAlign="center" fontSize="20px" mb="10px">{data.player?.lastName}</Heading>
                    <Flex paddingX="15px" paddingBottom="40px" justifyContent="space-between"> 
                        <Flex flexDirection="column"  justifyContent="center" alignItems="center" gap="5px" minW="32px">
                            <Text textTransform="uppercase" fontSize="6px" opacity="0.8">Age</Text>
                            <Text fontSize="9px" fontWeight="bold">{data.age}</Text>
                        </Flex>
                        <Flex flexDirection="column" justifyContent="center"  alignItems="center" gap="5px">
                            <Text textTransform="uppercase" fontSize="6px" opacity="0.8">Position</Text>
                            <Text fontSize="9px" fontWeight="bold">{data.position}</Text>
                        </Flex>
                        <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="5px" minW="32px">
                            <Text textTransform="uppercase" fontSize="6px" opacity="0.8">Country</Text>
                            <Image w="15px" src={data.player?.activeClub?.pictureUrl} alt="Flag of players country" /> 
                            {/* TODO - Figure out query for county flag */}
                        </Flex>
                    </Flex>
                </Flex>
            </>
            :<Image src={`${placeHolderImage}`} alt={`default sorare placeholder image`} borderRadius="13px" w="100%" h="100%" />
        }
        </Box>
    )
}
export const PlayerCardSkeleton = () => {
    return <Skeleton  startColor='white' endColor='gray.900' fadeDuration={1.2} w="180px" h="290px" borderRadius="13px"  bg='white'/>
}


export default PlayerCard;