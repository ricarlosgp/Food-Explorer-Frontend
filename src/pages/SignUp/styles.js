import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    height: 100vh;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    .wrapper-logo {
        padding: 160px 0 70px;

        display: flex;
        justify-content: center;

        img {
            width: 270px;
        }
    }

    .wrapper-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        
        label {
            display: flex;
            flex-direction: column;

            width: 316px;
            
            input {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
                
                border: none;
                height: 48px;
                
                margin-top: 8px;
                border-radius: 5px;
                padding-left: 14px;
            }
        }
    }

    @media(min-width: 800px) {
        display: flex;
        align-items: center;
        

        .wrapper-logo {
            width: 50%;
            padding: 0 0 70px;

            img {
                width: 324px;
            }
        }

        .wrapper-inputs {
            width: 50%;
            height: 62rem;
            justify-content: center;

            border-radius: 8px;
            margin-right: 10rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

            h1 {
                font-size: 3.2rem;
                color: ${({ theme }) => theme.COLORS.WHITE_900};
            }
        }
    }
`;