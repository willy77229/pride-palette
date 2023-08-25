import { useNavigate } from 'react-router-dom';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { BackgroundImage, Body, DirectoryItemContainer, } from './directory-item-styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)

    return(
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage
              imageUrl= {imageUrl} 
            />
            <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </Body>
          </DirectoryItemContainer>
        </StyleSheetManager>  
    )
};


export default DirectoryItem;