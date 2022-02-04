import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Container, TitlePage, TitleFilter, ContainerFilters, ContainerGames } from "../RecentGames/styles";
import BtnFilter from "../BtnFilter";
import PurchasedCard from "../PurchasedCard";

const RecentGames: React.FC = () => {
    return (
        <Container>
                <TitlePage>RECENT GAMES</TitlePage>
                <TitleFilter>Filters</TitleFilter>
                <ContainerFilters>
                    <BtnFilter />
                    <BtnFilter />
                    <BtnFilter />
                </ContainerFilters>
                <ScrollView>
                    <ContainerGames>
                        <PurchasedCard />
                        <PurchasedCard />
                        <PurchasedCard />
                        <PurchasedCard />
                    </ContainerGames>
                </ScrollView>
        </Container>
    );
}

export default RecentGames;