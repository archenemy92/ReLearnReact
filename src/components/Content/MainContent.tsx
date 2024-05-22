import { pizzaData } from "../../mockData/pizzaData";
import { MainContentContainer } from "./styled/mainContentStyle";
import { FooterContainer } from "./styled/footerContentStyle";
import { ContentContainer } from "./styled/ContentStyle";
import Button from "../common/Button/Button";

export const MainContent = () => {
  const pizzas = pizzaData.map((el) => <img key={el.name} alt={el.photoName} src={el.img} />);

  return (
    <MainContentContainer>
      <ContentContainer>{pizzas}</ContentContainer>
      <FooterContainer>
        <p>FOOTER</p>
        <Button />
      </FooterContainer>
    </MainContentContainer>
  );
};
