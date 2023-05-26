import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 100vh;

    color: ${({ theme }) => theme.COLORS.WHITE_500};
    
    .wrapper-img {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .back{
            width: 100%;
            padding-left: 30px;
            font-size: 24px;

            display: flex;
            align-items: center;
            gap: 5px;
        }

        img {
            max-width: 250px;
        }
    }

    .wrapper-description {
        padding: 0 15px;

        height: 40vh;
        text-align: center;

        display: flex;
        flex-direction: column;
        gap: 24px;

        h1 {
            font-size: 27px;
        }

        .text {
            max-height: 100px;
            overflow: auto;
        }

        .wrapper-tags {
            display: flex;
            justify-content: center;
            max-height: 90px;

            overflow: auto;
            
            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 8px;

                li {
                    background: ${({theme})=> theme.COLORS.BACKGROUND_INGREDIENT_D};
                    height: 32px;
                    border-radius: 5px;

                    padding: 8px;
                }
            }
        }

        .wrapper-control {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;

            svg, span {
                font-size: 32px;
            }

            .wrapper-button {
                button{
                    background: ${({ theme }) => theme.COLORS.RED_1000};
                    color: ${({ theme }) => theme.COLORS.WHITE_500};

                    height: 38px;
                    border: none;

                    padding: 10px;
                    border-radius: 5px;
                }
            }
        }
    }

    .wrapper-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    @media (min-width: 800px) {
        
        .wrapper-1 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            
            height: 100vh;
            padding: 0 120px;

            .wrapper-img {
                display: flex;
                justify-content: center;

                margin-top: 0px;

                width: 50%;
                height: 100%;

                .back{
                    padding-left: 0;
                }

                img {
                    max-width: 390px;
                }
            }
    
            .wrapper-description {
                display: flex;
                justify-content: center;

                width: 50%;
                height: 100%;

                text-align: left;

                .wrapper-tags, .wrapper-control  {
                    justify-content: left;
                }
            }
        }
    }
`;