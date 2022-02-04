import React from 'react';
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Container, FormView, Title, BtnGreen, TextBtnGreen, IconGreen, TextBtnGray, BtnGray, IconGray } from './styles'

interface PropsType {
  title: string;
  btnGreenTitle: string;
  btnGrayTitle: string;
  back: boolean;
  onPressBtnGreen?: any;
  onPressBtnGray: () => void;
}

const FormAuthContainer: React.FC<PropsType> = ({children,title,btnGreenTitle,btnGrayTitle,back,onPressBtnGreen,onPressBtnGray}) => {
  return (
      <Container >
        <Title>{title}</Title>

        <FormView>
          {children}

          {/* Btn Green */}
          <TouchableOpacity activeOpacity={0.5} onPress={onPressBtnGreen}>
            <BtnGreen>
              <TextBtnGreen>{btnGreenTitle}</TextBtnGreen>
              <IconGreen>
                <AntDesign name="arrowright" size={34} color={"#B5C401"} />
              </IconGreen>
            </BtnGreen>
          </TouchableOpacity>

        </FormView>
        
        {/* Btn Gray */}
        <TouchableOpacity onPress={onPressBtnGray}>
          <BtnGray>
            {!!back && <IconGray back={back}><AntDesign name="arrowleft" size={34} color={"#707070"} /></IconGray>}
            <TextBtnGray>{btnGrayTitle}</TextBtnGray>
            {!back && <IconGray back={back}><AntDesign name="arrowright" size={34} color={"#707070"} /></IconGray>}
          </BtnGray>
        </TouchableOpacity>
      </Container>
  );
};

export default FormAuthContainer;