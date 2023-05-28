import styled from 'styled-components'

export const Container = styled.div`
    color: ${({theme})=> theme.COLORS.WHITE_100};
`;
export const Form = styled.form`
    padding: 15rem 3.2rem;

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        margin-bottom: 2.4rem;

        input, select {
            width: 100%;
            height: 4.8rem;

            background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
            color: ${({theme})=> theme.COLORS.WHITE_100};

            border: none;

            padding: 1.4rem 1.6rem;
        }
    }



    .wrapper-1 {
        
      
        
    }

    .wrapper-2 {

    }

    .wrapper-3 {

        textarea {
            background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
            padding: 1.4rem 1.6rem;
        }
    }
`;