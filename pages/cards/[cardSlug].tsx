import { NextPage } from "next/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {  Button, Container, Flex, Link, Text } from '@chakra-ui/react'; 
import { gql, useQuery } from "@apollo/client"; 
import PlayerCard, { Card, PlayerCardSkeleton } from "../../components/PlayerCard";

const CARDS = gql`
    query cards ($slugs: [String!]) {
        cards(slugs: $slugs) {
            name
            age
            position
            rarity
            createdAt
            shirtNumber
            slug
            season {
                name
            }
            player {
                pictureUrl
                firstName
                lastName
                activeClub{
                    pictureUrl
                }
            }
        }
    }
`

const CardPage: NextPage = () => {
    const { cardSlug } = useRouter()?.query;
    const [cards, setCards ] = useState<Card[]>([]); 
    const [listOfCardSlugs, setListOfCardSlugs] = useState<string[]>([])
    const [showButton, setShowButton] = useState(true); 

    const [shouldSkip, setShouldSkip] = React.useState(true)
    const { loading, error, data } = useQuery(CARDS , {
        variables: { slugs: listOfCardSlugs},
        skip: shouldSkip // !router.isReady
    });
    
    
    // Effects ---> 
    useEffect(() => {
        if (cardSlug === undefined || Array.isArray(cardSlug)) return;   
        setListOfCardSlugs(cardSlug?.split(',')); 
    }, [cardSlug]);

    useEffect(() => {
        const updatedCards = data?.cards; 
        setCards(updatedCards); 
    }, [data]);


    // helper functions ---> 
    const getCardData = async () => {
        if (listOfCardSlugs.length !== 0) setShouldSkip(false)
        setShowButton(false); 
    }

    
    if(error) console.log(error); // Would probably render an error toast notification. 
    return (
        <Container as="section" w="100%" maxW="100%" margin="0" minH="100vh" background="#101010" color="white">
            <Flex flexDirection="column" alignItems="center" justifyContent="center" minH="100vh" >
                {!cardSlug? 
                <Flex gap="20px" maxW="100%" justifyContent="center" marginBottom="20px" overflow="scroll">
                    <PlayerCardSkeleton /> <PlayerCardSkeleton />
                </Flex>
                : 
                    <Flex gap="20px" maxW="100%" justifyContent="center" marginBottom="20px" overflow="scroll">
                        {   
                            cards? cards.map( (card) => <PlayerCard key={card?.slug} data={card} loading={loading}/> )
                            : listOfCardSlugs.map( (slug) => <PlayerCard key={slug} data={null}/> ) 
                        }
                    </Flex>
                }

                <Button display={showButton? 'block': 'none'} onClick={getCardData} colorScheme='blue' size='lg' fontSize="15px" h="40px" padding="0px 16px" w="fit-content"
                    textAlign="center" margin="0 auto">
                    Reveal Cards
                </Button>

                <Text mt="40px" fontSize={["12px", "14px" ]}lineHeight="24px" fontWeight="400" mb="20px">
                    Made with ♥️ by <Link href="https://www.robneal.me/" target="_blank">Robert Neal</Link> | <Link href="/"> back to home</Link>
                </Text>
            </Flex>
        
        </Container>
    )
}

export default CardPage; 